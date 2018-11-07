
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GreenApp.API.Data;
using GreenApp.API.Dtos;
using GreenApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace GreenApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }
        [HttpPost("register")]
        public async Task<IActionResult> register([FromBody]CompanyForRegisterDto companyForRegisterDto)
        {
            if (await _repo.CompanyExist(companyForRegisterDto.Email))
                return BadRequest("company already exist");
            var companytocreate = new RegisterCompany
            {
                //  Logo=companyForRegisterDto.Logo,
                Name = companyForRegisterDto.Name,
                Address = companyForRegisterDto.Address,
                City = companyForRegisterDto.City,
                Email = companyForRegisterDto.Email,

            };
            var companyCreated = await _repo.Register(companytocreate, companyForRegisterDto.Password);
            return StatusCode(201);
        }
       [HttpGet]
        public async Task<IActionResult> Get([FromBody]CompanyForLoginDtos companyForLoginDtos)
        {
            var CompanyFromRepo = await _repo.Login(companyForLoginDtos.Email, companyForLoginDtos.Password);
            if (CompanyFromRepo == null)
                return Unauthorized();
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,CompanyFromRepo.id.ToString()),
                new Claim(ClaimTypes.Email,CompanyFromRepo.Email)


            };
            var Key = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds= new SigningCredentials(Key, SecurityAlgorithms.HmacSha512Signature);
            var TokenDescription= new SecurityTokenDescriptor
            {
                Subject= new ClaimsIdentity(claims),
                Expires=DateTime.Now.AddDays(1),
                SigningCredentials=creds
            };
            var TokenHandler=new JwtSecurityTokenHandler();
             var token= TokenHandler.CreateToken(TokenDescription);
             return Ok(new {
                 token= TokenHandler.WriteToken(token)
             });

        }
    }
}
using System.Threading.Tasks;
using GreenApp.API.Data;
using GreenApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BussinessController:ControllerBase   
    {
        private readonly IBussinessRepository _bussiness;
        public BussinessController(IBussinessRepository bussiness)
        {
            _bussiness = bussiness;

        }
        [HttpPost("registerbussiness")]
        public async Task<IActionResult> registerbussiness([FromBody]Bussiness bussiness)
        { try{if(await _bussiness.BussinessExist( bussiness.Phonenumber))
          return BadRequest("Bussiness Already Exist");

          var BussinessCreated= await _bussiness.AddBussiness(bussiness);
          return StatusCode(201);
          }
          catch
          {
        return StatusCode(500,"computer says no");
          }
          
        }
        // [Produces("application/json")]
        [HttpGet("FindBussinessById")]
        public async Task<IActionResult> FindBussinessById(int id)
        {
            try{
              var bussiness=await _bussiness.GetBussinessById(id);
                return Ok(bussiness);
            }
            catch{
             return BadRequest();
            }
         
        }
          [HttpGet("GetBussinesses")]
        public async Task<IActionResult > GetBussinesses()
        {
            try{
              var bussiness=await _bussiness.GetAll();
                return Ok(bussiness);
            }
            catch{
             return BadRequest();
            }  
    }
}
}
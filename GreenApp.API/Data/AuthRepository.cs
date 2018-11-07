using System;
using System.Threading.Tasks;
using GreenApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<bool> CompanyExist(string email)
        {
            if(await _context.registerCompanies.AnyAsync(x=>x.Email==email))
            return true;
            return false;
        }

        public async Task<RegisterCompany> Login(string email, string password)
        {
         var company=    await _context.registerCompanies.FirstOrDefaultAsync(x =>x.Email==email);
        if(company==null)
        return null;
        if(!VerifyPasswordHash(password,company.PasswordHash,company.PasswordSalt))
        return null;
        return company;
        }
          private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
             using( var hmac=new System.Security.Cryptography.HMACSHA512(passwordSalt))
           {
             
            var computedHash =hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            for(int i=0; i<computedHash.Length; i++)
            {
                if(computedHash[i]!=passwordHash[i]) return false;
            }
           }
           return true;
        }


        public async Task<RegisterCompany> Register(RegisterCompany company, string password)
        {
           byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            company.PasswordHash=passwordHash;
            company.PasswordSalt=passwordSalt;
           await _context.registerCompanies.AddAsync(company);
           await _context.SaveChangesAsync();
           return company;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
             using( var hmac=new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt=hmac.Key;
               passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
           }
        }
    }
    
}
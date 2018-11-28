using System.Collections.Generic;
using System.Threading.Tasks;
using GreenApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenApp.API.Data
{
    public class BussinessRepository : IBussinessRepository
    {
        private readonly DataContext _context;
        public BussinessRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Bussiness> AddBussiness(Bussiness bussiness)
        {
          await _context.bussinesses.AddAsync(bussiness);
           await _context.SaveChangesAsync();
            return bussiness;
        }

        public async Task<bool> BussinessExist(string phonenu)
        {
           if(await _context.bussinesses.AnyAsync(x=>x. Phonenumber==phonenu))
           return true;
           return false;
        }

        public async Task<IEnumerable<Bussiness>> GetAll()
        {
            var bussiness= new Bussiness();
       return await _context.bussinesses.ToListAsync();
        
         
        }

        public async Task<Bussiness> GetBussinessById(int id)
        {
           return await _context.bussinesses.Include(x=>x.Company).SingleOrDefaultAsync(x=>x.id==id);
           
            // console.log('Response through Async function',);       
             }
    }
}
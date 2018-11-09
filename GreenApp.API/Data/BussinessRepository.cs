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
    }
}
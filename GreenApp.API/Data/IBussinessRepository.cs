using System.Collections.Generic;
using System.Threading.Tasks;
using GreenApp.API.Models;

namespace GreenApp.API.Data
{
    public interface IBussinessRepository
    {
        Task<Bussiness> AddBussiness(Bussiness bussiness);
        Task<bool> BussinessExist(string phonenu) ;
        Task<Bussiness> GetBussinessById(int id);
        Task<IEnumerable<Bussiness>> GetAll();
      
    }
}
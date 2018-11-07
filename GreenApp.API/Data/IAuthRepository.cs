using System.Threading.Tasks;
using GreenApp.API.Models;

namespace GreenApp.API.Data
{
    public interface IAuthRepository
    {
          Task<RegisterCompany> Register(RegisterCompany company,string password);
         Task<RegisterCompany> Login(string email,string password);
         Task<bool> CompanyExist(string email);
    }
}
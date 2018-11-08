using System.Threading.Tasks;
using GreenApp.API.Models;
namespace GreenApp.API.Data
{
    public interface IAddBussiness
    {
         Task<Bussiness> Addbussiness(Bussiness busssiness);
         
    }
}
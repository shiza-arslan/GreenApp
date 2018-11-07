using GreenApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenApp.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}
        public DbSet <RegisterCompany> registerCompanies {get;set;}
        public DbSet <Bussiness> bussinesses {get;set;}
    }
}
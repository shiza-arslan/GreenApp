namespace GreenApp.API.Models
{
    public class Bussiness
    {
         public int id { get; set; }
        public string Name { get; set; }
        public string Phonenumber { get; set; }
        public int CompanyId { get; set; }
        public  RegisterCompany Company { get; set; }
    }
}
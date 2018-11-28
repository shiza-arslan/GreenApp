using System.Collections.Generic;

namespace GreenApp.API.Models
{
    public class RegisterCompany
    {
    public int id { get; set; }
    public byte[] Logo { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string City{get;set;}
    public string Email { get; set; }
    public byte[] PasswordHash { get; set; }
     public byte[] PasswordSalt { get; set; }
    //  public ICollection<Bussiness> Bussinesses{get;set;}
    }
}
using System.ComponentModel.DataAnnotations;
namespace GreenApp.API.Dtos
{
    public class CompanyForLoginDtos
    {[Required]
        public string Email { get; set; }
[Required]
        public string  Password { get; set; }
    }
}
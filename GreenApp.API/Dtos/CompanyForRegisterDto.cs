using System.ComponentModel.DataAnnotations;

namespace GreenApp.API.Dtos
{
    public class CompanyForRegisterDto
    {
     public byte[] Logo { get; set; }
    // [Required]
    public string Name { get; set; }
      //[Required]
    public string Address { get; set; }
      //[Required]
    public string City{get;set;}
      // [Required]
      // [DataType(DataType.EmailAddress,ErrorMessage="Email is not valid")]
    public string Email { get; set; }
      // [Required]
      // [StringLength(8,MinimumLength=4,ErrorMessage="you must specify password between 4 and 8")]
   public string Password { get; set; }
    }
}
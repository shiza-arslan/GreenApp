using System.Threading.Tasks;
using GreenApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController:ControllerBase
    {
        [HttpPost("AdminLogin")]
         public IActionResult AdminLogin([FromBody] Admin admin)
         {
             admin.UserName="Admin";
             admin.Password="Admin";
           return Ok(admin);

         }
    }
}
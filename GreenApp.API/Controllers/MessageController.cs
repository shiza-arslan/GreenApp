using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GreenApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace GreenApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _repo;
        public MessageController(IMessageRepository repo)
        {
            _repo = repo;

        }
        [HttpPost("SendMessage")]
        public async Task  SendMessage([FromBody] string Message, List<string> number ) {
           await _repo.SendSMSBySMSGatewayAppAsync(Message, number);
          Console.WriteLine("message sent");
        } 

    }
}

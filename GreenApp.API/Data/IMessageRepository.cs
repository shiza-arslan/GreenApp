using System.Collections.Generic;
using System.Threading.Tasks;

namespace GreenApp.API.Data
{
    public interface IMessageRepository
    {
        Task SendSMSBySMSGatewayAppAsync(string message, List<string> numbers);  
    }
}
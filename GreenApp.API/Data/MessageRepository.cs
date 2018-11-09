using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Net.Http;
using System.Net.Mail;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using GreenApp.API.Models;

namespace GreenApp.API.Data
{
    public class MessageRepository : IMessageRepository
    {
             #region DataMembers
        private const string ContentType = "application/json";
        private const string deviceId = "94474";
        private const string Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsImlhdCI6MTUyOTcwMTEwMywiZXhwIjo0MTAyNDQ0ODAwLCJ1aWQiOjU1NTIzLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.6hfJMPKyy1wVJz6EYC59gk3P-GjWgPN29oJkm4eSbfE";
        
                public Uri RequestUri { get; private set; }
        private static readonly HttpClient client = new HttpClient();
        #endregion

        #region Constructors

public MessageRepository() 
        {
           
               
        }


        #endregion
        public async Task SendSMSBySMSGatewayAppAsync(string message, List<string> numbers)
        {
            var payload = new List<SMSPayLoad>();
            foreach (var item in numbers)
            {
                payload.Add(new SMSPayLoad { device_id = deviceId, message = message, phone_number = item });
            }
            var settings = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            string jsonString = JsonConvert.SerializeObject(payload, Formatting.Indented, settings);

            try
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(Token);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var content = new StringContent(jsonString.ToString(), Encoding.UTF8, "application/json");

                var response = await client.PostAsync("https://smsgateway.me/api/v4/message/send", content);

                var responseString = await response.Content.ReadAsStringAsync();

            }
            catch (Exception error)
            {
                Console.WriteLine(error);
            }
        }


    }
        }
    

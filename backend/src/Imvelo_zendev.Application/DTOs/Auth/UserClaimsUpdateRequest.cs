using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Auth
{
    public class UserClaimsUpdateRequest
    {
        public List<Claim> Claims { get; set; }
        public class Claim
        {
            public string Type { get; set; }
            public string Value { get; set; }
        }
    }
}

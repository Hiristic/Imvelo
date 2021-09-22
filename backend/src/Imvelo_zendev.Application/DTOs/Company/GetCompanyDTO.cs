using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.DTOs.Company
{
    public class GetCompanyDTO
    {
        public string Name { get; set; }
        public int QuantityOfChemichals { get; set; }
        public string ContactName { get; set; }
        public string ContactLastname { get; set; }
        public string ContactEmail { get; set; }
    }
}

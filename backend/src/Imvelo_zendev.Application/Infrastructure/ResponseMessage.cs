using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Imvelo_zendev.Application.Infrastructure
{
    public class ResponseMessage<T>
    {
        public bool Succeeded { get; set; }
        public List<string> Errors { get; set; }
        public T Result { get; set; }
    }
}

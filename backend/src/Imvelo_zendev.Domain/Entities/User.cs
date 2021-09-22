using Microsoft.AspNetCore.Identity;

namespace Imvelo_zendev.Domain.Entities
{
    public class User : IdentityUser<string>
    {
        public bool IsDeleted { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}

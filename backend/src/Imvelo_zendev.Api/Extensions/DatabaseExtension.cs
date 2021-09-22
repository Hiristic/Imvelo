using Imvelo_zendev.Infrastructure.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Imvelo_zendev.Api.Extensions
{
    public static class DatabaseExtension
    {
        public static void AddApplicationDbContext(this IServiceCollection services, IConfiguration configuration)
        {
                services.AddDbContextPool<Infrastructure.Context.DatabaseContext>(o =>
                {
                    o.UseSqlServer(configuration.GetConnectionString("DefaultConnection")); 
                });
        }
    }
}

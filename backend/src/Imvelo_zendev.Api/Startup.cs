using System.Text.Json.Serialization;
using Imvelo_zendev.Api.Extensions;
using Imvelo_zendev.Application.DTOs.Auth;
using Imvelo_zendev.Application.Interfaces;
using Imvelo_zendev.Application.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Imvelo_zendev.Api
{
    public class Startup
    {
        private readonly IConfiguration Configuration;

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(Configuration);
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            //Extension method for less clutter in startup
            services.AddApplicationDbContext(Configuration);
            services.AddAuthenticationService();

            services.AddAuthorization(options =>
            {
                options.AddPolicy(ApplicationPolicies.UserManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.UserManagment, "1"));
                options.AddPolicy(ApplicationPolicies.ELearningOnly, policy => policy.RequireClaim(ApplicationClaims.ELearning, "1"));
                options.AddPolicy(ApplicationPolicies.OrganizationManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.OrganizationManagment, "1"));
                options.AddPolicy(ApplicationPolicies.ProductInfoManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.ProductInfoManagment, "1"));
                options.AddPolicy(ApplicationPolicies.RiskAssessmentManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.RiskAssessmentManagment, "1"));
                options.AddPolicy(ApplicationPolicies.ActivityManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.ActivityManagment, "1"));
                options.AddPolicy(ApplicationPolicies.CompanyManagmentOnly, policy => policy.RequireClaim(ApplicationClaims.CompanyManagment, "1"));
            });



            //DI Services and Repos            
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ICompanyService, CompanyService>();
            services.AddScoped<IDepartmentService, DepartmentService>();

            // WebApi Configuration
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.IgnoreNullValues = true;
                options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()); // for enum as strings
            });

            // AutoMapper settings
            services.AddAutoMapperSetup();

            // HttpContext for log enrichment 
            services.AddHttpContextAccessor();

            // Swagger settings
            services.AddApiDoc();
            // GZip compression
            services.AddCompression();
            /*
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<DatabaseContext>();*/
            

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
            app.UseCustomSerilogRequestLogging();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseApiDoc();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            //added request logging


            app.UseHttpsRedirection();


            app.UseResponseCompression();
        }
    }
}

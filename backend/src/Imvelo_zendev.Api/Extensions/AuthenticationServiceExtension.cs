using System;
using System.Text;
using Imvelo_zendev.Api;
using Imvelo_zendev.Api.Services.Auth;
using Imvelo_zendev.Domain.Entities;
using Imvelo_zendev.Infrastructure.Context;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

//#endregion

// ReSharper disable CheckNamespace

//#endregion

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AuthenticationServiceExtension
    {
        /// <summary>
        ///     Add authentication service.
        /// </summary>
        /// <param name="serviceCollection"></param>
        /// <returns></returns>
        public static IServiceCollection AddAuthenticationService(this IServiceCollection serviceCollection)
        {
            var appSettings = serviceCollection.BuildServiceProvider().GetService<IOptions<AppSettings>>().Value;

            // ===== Add Identity =====
            serviceCollection.AddIdentity<User, IdentityRole>(options =>
            {
                // User settings
                options.User.RequireUniqueEmail = true;

                // ===== Password Settings =====
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = true;
                options.Password.RequiredUniqueChars = 1;

                // ===== Lockout settings =====
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // ===== Signin settings =====
                options.SignIn.RequireConfirmedEmail = false;
                options.SignIn.RequireConfirmedPhoneNumber = false;
            })
            .AddEntityFrameworkStores<DatabaseContext>()
            .AddDefaultTokenProviders();

            // ===== Add Jwt Authentication =====
            serviceCollection.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddJwtBearer(jwtBearerOptions =>
            {
                // ===== Add another service for dependency injection feature =====
                serviceCollection.AddTransient<SecurityTokenValidator>();

                jwtBearerOptions.Configuration = new OpenIdConnectConfiguration();
                jwtBearerOptions.Audience = appSettings.Jwt.Audience;
                jwtBearerOptions.Authority = appSettings.Jwt.Authority;
                jwtBearerOptions.RequireHttpsMetadata = false;
                jwtBearerOptions.SaveToken = true;
                jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = appSettings.Jwt.Issuer,
                    ValidAudience = appSettings.Jwt.Audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appSettings.Jwt.Key))
                };
                jwtBearerOptions.SecurityTokenValidators.Clear();
                jwtBearerOptions.SecurityTokenValidators.Add(
                    serviceCollection.BuildServiceProvider().GetService<SecurityTokenValidator>()
                );
            });
                        

            // ===== Add another service for dependency injection feature =====
            serviceCollection.AddTransient<TokenGenerator>();

            return serviceCollection;
        }
    }
}
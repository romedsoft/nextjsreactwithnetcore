var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var spaPath = "/ClientApp";

builder.Services.AddControllersWithViews();

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = $"ClientApp/build";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");


if (app.Environment.IsDevelopment())
    {
        app.MapWhen(y => y.Request.Path.StartsWithSegments(spaPath), client =>
        {
            client.UseSpa(spa => 
            {
                // spa.UseReactDevelopmentServer(npmScript: "start");
                spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
            });
        });
    }
    else
    {
        app.Map(new PathString(spaPath), client =>
        {
            client.UseSpaStaticFiles();
            client.UseSpa(spa => {});
        });
    }

app.MapFallbackToFile("/about", "about.html");
app.MapFallbackToFile("/pokemon", "pokemon.html");
app.MapFallbackToFile("/charts", "charts.html");
app.MapFallbackToFile("/users", "users.html");
app.MapFallbackToFile("index.html");

app.Run();

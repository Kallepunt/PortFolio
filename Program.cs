using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.EntityFrameworkCore;
using Portfolio;
using Portfolio.Pages.WhackMe;
using Portfolio.Pages.WhackMe.Game.Models;
using Portfolio.Pages.WhackMe.Game.Services;
using SqliteWasmHelper;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddScoped<WhackMeHighScoreSerice>();
builder.Services.AddSqliteWasmDbContextFactory<HighScoreContext>(opts =>
	opts.UseSqlite("Data Source=highscore.sqlite3"));


await builder.Build().RunAsync();

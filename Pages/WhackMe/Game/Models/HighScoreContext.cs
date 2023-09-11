
using Microsoft.EntityFrameworkCore;

namespace Portfolio.Pages.WhackMe.Game.Models
{
	public class HighScoreContext : DbContext
	{
        public HighScoreContext(DbContextOptions<HighScoreContext> opts) : base(opts) { }




		public DbSet<Highscore> Highscores { get; set; } = null;
    }
}

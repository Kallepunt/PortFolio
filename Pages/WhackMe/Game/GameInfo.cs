using Portfolio.Pages.WhackMe.Game.Models;

namespace Portfolio.Pages.WhackMe.Game
{
	public class GameInfo
	{
		public int Score = 0;
		public int CurrentTime = 20;
		public int HitPosition;
		public string Message = string.Empty;
		public int GameSpeed = 600;
		public bool IsGameRunning = true;


		public List<SquareModel> Squares { get; set; } = new List<SquareModel>();


        public GameInfo()
        {
				for (int i = 0; i < 9 ; i++)
			{
				Squares.Add(new SquareModel { Id = i });
			}
        }
    }
}

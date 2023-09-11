namespace Portfolio.Pages.WhackMe.Game.Models
{
	public class SquareModel
	{

		public int Id { get; set; }
		public string Style { get; set; }


		private bool isShown;

		public bool IsShown
		{
			get => isShown;
			set
			{
				isShown = value;
				if (isShown)
				{
					Style = "mole";
				}
				else
				{
					Style = string.Empty;
				}
			}
		}

	}
}

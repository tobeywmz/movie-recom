// The moveis list
const movies = [
	{
		image: './artifacts/oppenheimer.jpg',
		year: 2023,
		rating: 8.4
	},
	{
		image: './artifacts/blade_runner.jpg',
		year: 2017,
		rating: 8
	},
	{
		image: './artifacts/lotr.jpg',
		year: 2001,
		rating: 9
	},
	{
		image: './artifacts/harry_potter.jpg',
		year: 2007,
		rating: 7.5
	},
	{
		image: './artifacts/the_matrix.jpg',
		year: 2003,
		rating: 7.2
	},
];

// The handlebars template system
const movieCardHTML = `
{{#movies}}
	<div class="movie-card">
		<div class="movie-card__image">
			<img src="{{image}}" alt="movie-image">
		</div>
		<div class="movie-card__options">
			<button>download</button>
			<div class="movie-card__icons">
				<img src="./artifacts/icons/heart.svg">
				<img src="./artifacts/icons/like.svg">
				<img src="./artifacts/icons/dislike.svg">
			</div>
		</div>
	</div>
	{{/movies}}`;

	const movieCardTemplate = Handlebars.compile(movieCardHTML);

	document.querySelector('#latest-movies').innerHTML = movieCardTemplate({ movies });
	document.querySelector('#top-rated-movies').innerHTML = movieCardTemplate({ movies });
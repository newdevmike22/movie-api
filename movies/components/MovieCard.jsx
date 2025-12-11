import NoImage from "/images/no-movie.png";

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center bg-white">
      <h2 className="text-[2rem] font-bold text-center mb-2">{movie.title}</h2>
      <div className="w-[210px] h-[315px] flex items-center justify-center">
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : NoImage} alt={movie.title} className="mb-2 rounded w-full h-full object-cover" />
      </div>
      <p className="text-base sm:text-lg md:text-[1.1rem] lg:text-[1.25rem]">
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p className="text-base sm:text-lg md:text-[1.1rem] lg:text-[1.25rem]">
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p className="text-base sm:text-lg md:text-[1.1rem] lg:text-[1.25rem]">
        <strong>Language:</strong> {movie.original_language.toUpperCase()}
      </p>
    </div>
  );
};

export default MovieCard;

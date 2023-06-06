import React from "react";

const Movie = ({ movie }) => {

  return (
    <div className="w-full h-full max-w-md bg-gray-900 rounded-xl overflow-hidden">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
        alt={movie.Title}
        className="w-full hover:scale-[1.05] transition-all duration-300 ease-in-out "
      />
      <div className="px-3 py-3 mt-2">
       
        <h3 className="text-md text-white capitalize">{movie.Type}</h3>
        <h3 className="text-md text-yellow-500">{movie.Title}</h3>
      </div>

    </div>
  );
};

export default Movie;

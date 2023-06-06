import React, { useState } from "react";
import Movie from "./components/Movie";
import JohnWick from "./assets/johnwick.png";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e1b43b9d";

const DefaultMovieDisplay = () => {
  const movieDisplay = [
    {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    },
    {
      Title: "John Wick: Chapter 2",
      Year: "2017",
      imdbID: "tt4425200",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg",
    },
    {
      Title: "John Wick: Chapter 3 - Parabellum: HBO First Look",
      Year: "2019",
      imdbID: "tt10275370",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
    },
    {
      Title: "Fast and Furious Crossroads",
      Year: "2020",
      imdbID: "tt11468188",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjc4NjBmMDMtNmQ4MS00MGRhLWI2YTgtYTEwNjZiZGMyNDViXkEyXkFqcGdeQXVyNzQzNDM3NTI@._V1_SX300.jpg",
    },
    {
      Title: "Captain America: The Winter Soldier",
      Year: "2014",
      imdbID: "tt1843866",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man",
      Year: "2008",
      imdbID: "tt0371746",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    },
    {
      Title: "King Kong",
      Year: "2005",
      imdbID: "tt0360717",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Jackie Chan: My Stunts",
      Year: "1999",
      imdbID: "tt0242546",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MzExODU2Ml5BMl5BanBnXkFtZTcwNzE1NzcxMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Titanic",
      Year: "1997",
      imdbID: "tt0120338",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      Title: "The Adventure of A.R.I.: My Robot Friend",
      Year: "2020",
      imdbID: "tt9578746",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjFkNjQyYjUtNmRiZi00YjZkLWI2ZmUtM2M4MTQ4OGI4ODcxXkEyXkFqcGdeQXVyMjA0MjA4NDk@._V1_SX300.jpg",
    },
    {
      Title: "The Flash",
      Year: "2014–2023",
      imdbID: "tt3107288",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDcwMzU4NWYtODIzZi00Yzg4LWJhOTAtOTQ2ZDA4NmFlYmFlXkEyXkFqcGdeQXVyMTY1MTU3NDY5._V1_SX300.jpg",
    },
    {
      Title: "Race to Witch Mountain",
      Year: "2009",
      imdbID: "tt1075417",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzQ5MTM5NTU2NV5BMl5BanBnXkFtZTcwMDAzMjAyMg@@._V1_SX300.jpg",
    },
  ];

  return (
   

<div className="w-full max-w-[1200px] mx-auto px-4">
      <h1 className="text-white font-normal text-2xl">Trending</h1>
      <div className="relative py-4 w-full h-full">
        <img
          src={JohnWick}
          alt="JohnWick"
          className="w-full max-w-max rounded-lg object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <button className="hover:bg-gray-400 py-2 px-4 sm:px-6 md:px-8 border text-white border-gray-400">
            View Info
          </button>
          <button className=" hover:bg-gray-400 py-2 ml-3 px-4 sm:px-6 md:px-8 border text-white border-gray-400">
            Play Now
          </button>
        </div>
      </div>
      
       <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 justify-center items-center">
        {movieDisplay.map((movie) => {
          return (
            <div
              key={movie.imdbID}
              className="w-full h-full max-w-md bg-gray-900 rounded-xl overflow-hidden"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full hover:scale-[1.05] transition-all duration-300 ease-in-out "
              />
              <div className="px-3 py-3 mt-2">
                <h3 className="text-md text-white capitalize">{movie.Type}</h3>
                <h3 className="text-md text-yellow-500">{movie.Title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayMovies, setDisplayMovies] = useState(true); // Added state for displaying default movies or search results

  const handleSearch = async () => {
    setIsLoading(true);
    setDisplayMovies(false); // Hide default movies
    await searchMovies(search);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500); // Show search results
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data);
  };

  const handleGoBack = () => {
    setShowResults(false); // Hide search results
    setDisplayMovies(true); // Show default movies
  };

  return (
    <div className="w-full h-screen px-[30px]">
      <h1 className="text-yellow-500 text-4xl font-bold text-center pt-5">
        Movie<span className="text-gray-200">Flix</span>
      </h1>

      <div className="flex justify-center items-center mt-4 sm:px-16">
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 rounded-l-lg outline-none"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-yellow-500 border-none hover:bg-yellow-600 px-4 py-2 rounded-r-lg text-white"
          onClick={handleSearch}
          disabled={isLoading} // Disable button while loading
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.6 17.6L21 21"
            />
          </svg>
        </button>
      </div>

      {displayMovies ? (
        <DefaultMovieDisplay />
      ) : (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="spinner"></div>
            </div>
          ) : (
            showResults && (
              <div className="w-full h-screen p-4">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 mb-4 rounded-lg"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 justify-center items-center">
                  {movies?.length > 0 ? (
                    movies.map((movie) => (
                      <Movie key={movie.imdbID} movie={movie} />
                    ))
                  ) : (
                    <div className="text-white text-center text-2xl">
                      No movie found...
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default App;

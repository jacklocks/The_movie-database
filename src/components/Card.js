import { IconSquareForbid, IconStarFilled } from "@tabler/icons-react";
import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => (
      <li className="genre" key={genre}>
        {genre}
      </li>
    ));
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != movie.id);
    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "./img/poster.jpg"
          }
          alt={`affiche du film" ${movie.title}`}
        />
        {movie.release_date ? (
          <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
        ) : null}
        <h5>{"note sur 10 : " + Math.floor(movie.vote_average)}</h5>
        <div className="star">
          <IconStarFilled />
        </div>
        <ul>
          {movie.genre_ids
            ? genreFinder()
            : movie.genres.map((genre) => (
                <li className="genre" key={genre}>
                  {genre.name}
                </li>
              ))}
        </ul>
        <p>{movie.overview}</p>
        {movie.genre_ids ? (
          <button onClick={() => addStorage()}>Ajouter aux favoris</button>
        ) : (
          <button
            onClick={() => {
              deleteStorage();
              window.location.reload();
            }}
          >
            Retirer des favoris
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import Footer from "../components/Footer";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];

    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=97bb058bdfc5fe58807b34f7302cd7bd`
        )
        .then((res) => movieArray.push(res.data))
        .then(() => setListData(movieArray));
    }
  }, []);
  return (
    <div className="likepage">
      <Header />

      <div className="movie">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2 className="noFavoris">Aucuns favoris pour le moment</h2>
        )}
      </div>
      <div className="pied">
        <Footer />
      </div>
    </div>
  );
};

export default LikePage;

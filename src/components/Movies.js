import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";

const Movies = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortTopFlop, setSortTopFlop] = useState(null);
  console.log(data);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=97bb058bdfc5fe58807b34f7302cd7bd&query=${search}&language=fr-FR`
      )
      .then((res) => setData(res.data.results));
  }, [search]);

  return (
    <>
      <div className="search">
        <div className="search-input">
          <input
            className="write"
            type="text"
            placeholder="Entrez un titre de film"
            onChange={(e) => {
              if (e.target.value === "") {
                setSearch("code");
              } else {
                setSearch(e.target.value);
              }
            }}
          />
          <h3>Rechercher</h3>
        </div>
        <div className="check-container">
          <button id="top" onClick={() => setSortTopFlop("top")}>
            Top <IconArrowNarrowUp />
          </button>

          <button id="flop" onClick={() => setSortTopFlop("flop")}>
            Flop <IconArrowNarrowDown />
          </button>
        </div>
      </div>

      <div className="movie">
        {data
          .sort((a, b) => {
            if (sortTopFlop === "top") {
              return b.vote_average - a.vote_average;
            } else if (sortTopFlop === "flop") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
      </div>
    </>
  );
};

export default Movies;

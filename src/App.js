import React, { useState } from "react";
import "./styles.css";

const action = {
  "Avengers: Endgame (2019)": "8.4/10",
  " Free Guy (2021)": "7.2/10",
  "John Wick (2014)": "7.4/10"
};

const horror = {
  "It (2017)": "7.3/10",
  " The Conjuring (2013)": "7.2/10",
  " The Exorcist (2000)": "8.5/10"
};

const comedy = {
  "Dumb and Dumber (1994)": "7.3/10",
  " Central Intelligence (2016)": "6.3/10"
};

const animation = {
  "The Croods (2013)": "7.2/10",
  " Demon Slayer: Mugen Train (2020)": "8.2/10",
  "Spider-Man: Into the Spider-Verse (2018)": "8.4/10"
};

var actionList = Object.keys(action);
var horrorList = Object.keys(horror);
var comedyList = Object.keys(comedy);
var animationList = Object.keys(animation);

var buttons = ["action", "horror", "comedy", "animation"];

export default function App() {
  const [display, setDisplay] = useState("");

  function clickHandler(genreList, genre, event) {
    var currentId;

    currentId = event.target.id;
    setActive(currentId);

    var display = genreList.map((list) => {
      return (
        // console.log(list,action[list])
        <li key={list}>
          <p>{list}</p>
          <hr />
          <small>{genre[list]}</small>
        </li>
      );
    });
    setDisplay(display);
  }

  function setActive(e) {
    // var id = document.querySelector(`#${event}`);
    var id = e;

    buttons.map((button) =>
      button !== id
        ? document.querySelector(`#${button}`).classList.remove("active")
        : document.querySelector(`#${button}`).classList.add("active")
    );
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span id="clr" role="img" aria-label="movie-icon">
            🎞️
          </span>
          Movie <span id="clr">Recommendation</span>
        </h1>
        <p>
          Here are Some of the top recommended movies to watch. Select the given
          Genre below to view the list.
        </p>
      </header>

      <button
        id="action"
        onClick={() => clickHandler(actionList, action, event)}
      >
        Action
      </button>
      <button
        id="horror"
        onClick={() => clickHandler(horrorList, horror, event)}
      >
        Horror
      </button>
      <button
        id="comedy"
        onClick={() => clickHandler(comedyList, comedy, event)}
      >
        Comedy
      </button>
      <button
        id="animation"
        onClick={() => clickHandler(animationList, animation, event)}
      >
        Animation
      </button>

      <hr />

      <ul>{display}</ul>
    </div>
  );
}

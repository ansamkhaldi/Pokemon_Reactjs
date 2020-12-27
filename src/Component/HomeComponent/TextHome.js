import React from 'react';
import './home.css';

export default function TextHome(props) {
  return (
    <div className="grid-item-home">
      <p className="home-p1">
        Find <span>all your favorite</span> Pokemon
      </p>
      <p className="home-p2">
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities
      </p>
      <button className="home-button">See pokemons</button>
    </div>
  );
}

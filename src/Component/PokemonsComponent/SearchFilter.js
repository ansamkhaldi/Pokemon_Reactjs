import React from 'react';
import './pokemons.css';

export default function SearchFilter({ searchChange }) {
  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }
  // var expanded = false;

  return (
    <div className="filter">
      <p className="pokemon-p">
        800 <span>Pokemons</span> for you to choose your favorite
      </p>
      <input
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
        placeholder="Encuentra tu Pokémon..."
        onChange={searchChange}
      />
      <div className="div_select">
        <form>
          <select className="select">
            <option value="Fire">Fire</option>
            <option value="Normal">Normal</option>
            <option selected value="ُElectric">
              Electric
            </option>
            <option value="Water">Water</option>
          </select>
          <select className="select">
            <option selected value="Ataque">
              Ataque
            </option>
            <option value="_">...</option>
            <option value="_">...</option>
            <option value="_">...</option>
          </select>
          <select className="select">
            <option selected value="Experiencia">
              Experiencia
            </option>
            <option value="lime">...</option>
            <option value="coconut">...</option>
            <option value="mango">...</option>
          </select>
        </form>
      </div>
    </div>
  );
}

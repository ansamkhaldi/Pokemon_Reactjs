import React from 'react';
import pokemon from '../../assets/images/BannerComplete.png';
import './home.css';

export default function Image(props) {
  return (
    <div className="grid-item-image">
      <img src={pokemon} alt="pokemon" />
    </div>
  );
}

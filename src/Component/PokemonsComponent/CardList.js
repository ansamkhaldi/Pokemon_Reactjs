import React from 'react';
// import imagcard from '../../assets/images/imagecard.png';
import PokemonCard from './PokemonCard';

export default function CardList({ Image }) {
  let id = 0;
  return (
    <>
      {Image.slice(18, 27).map((item, index) => {
        return (
          <PokemonCard
            picture={item.picture}
            key={item.id}
            alt={item.id}
            name={item.name}
            id={(id += 1)}
          />
        );
      })}
    </>
  );
}

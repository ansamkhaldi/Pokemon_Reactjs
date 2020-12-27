// import React from 'react';
// import imagcard from '../../assets/images/imagecard.png';
//import Modal from './Modal';
import React, { useState } from 'react';

export default function PokemonCard({ name, picture, alt, id }) {
  const [isOpend, setIsOpend] = useState(false);
  const handleShowDialog = () => {
    setIsOpend(!isOpend);
    console.log('cliked');
    //onClick={() => setCount(count + 1)}
  };
  return (
    <div className="card">
      <div className="grid-item-card">
        <p id="title">{name}</p>
        <p>
          <span className="number">419</span>
          <span className="number sp2">49</span>
        </p>
        <p>
          <span className="text">Attack</span>
          <span className="text">Defense</span>
        </p>
        <p className="button-card">
          <button id="Grass">Grass</button>
          <button id="Poison">Poison</button>
        </p>
      </div>
      <div className="grid-item-imageCard" id={`card_${id}`}>
        <img
          src={picture}
          alt={`The Pokemon:${name + alt}`}
          onClick={handleShowDialog}
        />
      </div>
      {isOpend && (
        <dialog
          className="dialog"
          style={{ position: 'absolute' }}
          open
          onClick={handleShowDialog}
        >
          <div className="DivMainModal">
            <span class="close" onClick={handleShowDialog}>
              &times;
            </span>
            <div id={`card_${id}`} className="CardModal">
              <div className="grid_card_image">
                <img
                  className="image"
                  src={picture}
                  onClick={handleShowDialog}
                  alt="no image"
                />
                <p style={{ float: 'right' }}>
                  <button id="Grass">Grass</button>
                  <button id="Poison">Poison</button>
                </p>
              </div>
              <div id={`img_card_${id}`} className="grid_card_info">
                <div className="Div_1">
                  <span className="span_1_1">{name}</span>
                  <span className="span_1_2">
                    Generation 1<span className="span_1_3">578</span>
                  </span>
                </div>
                <div className="Div_2">
                  <p>Abilities</p>
                  <p>Overgrow - Chlorophyll</p>
                </div>
                <div className="Div_3">
                  <div className="Div_3_1">
                    <p>Healthy Points</p>
                    <p style={{ fontWeight: 'bold' }}>1 000 000</p>
                    <div id="rect"> </div>
                  </div>
                  <div className="Div_3_1">
                    <p>Experience</p>
                    <p style={{ fontWeight: 'bold' }}>1 000 000</p>
                    <div id="rect_2"></div>
                  </div>
                </div>
                <div className="Div_4">
                  <div>
                    <span className="number sp2"> 49</span>
                    <p>Defense</p>
                  </div>
                  <div>
                    <span className="number">156</span>
                    <p>Attack</p>
                  </div>
                  <div>
                    <span className="number">130</span>
                    <p>Sp Attack</p>
                  </div>
                  <div>
                    <span className="number">271</span>
                    <p>Sp Defense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

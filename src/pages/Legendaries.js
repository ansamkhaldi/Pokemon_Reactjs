import React from 'react';
import LegendariesList from '../Component/LegendariesComponent/LegendariesCard';
import '../Component/LegendariesComponent/slider.css';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { useEffect, useReducer, useState } from 'react';

const initialState = {
  Image: [],
  loading: false,
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'success':
      return { ...state, loading: false, Image: action.payload };
    case 'error':
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error('Invalid action type');
  }
}
function Legendaries(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pokemon, setPokemon] = useState([]);

  const { loading, error, Image } = state;

  useEffect(() => {
    dispatch({ type: 'loading' });

    axios
      .get('https://ironhack-pokeapi.herokuapp.com/pokemon')
      .then((pokemon) => {
        setPokemon({ pokemon: pokemon });
        dispatch({ type: 'success', payload: pokemon.data });
        // console.log(pokemon.name);
      })
      .catch((error) => {
        dispatch({ type: 'error', error: 'Invalid action' });
      });
  }, []);
  return (
    <div className="Legendaries-page">
      <div className="card-container">
        {!!loading && state.Image.length === 0 && (
          <div className="loadingDiv">
            <VscLoading
              className="Looding"
              size="60"
              style={{ color: 'green', margin: '50px 0px 0px 380px' }}
            />
          </div>
        )}
        {!!error && <div className="errorDiv">somthing went wrong</div>}
        {!loading && !error && (
          <>
            <LegendariesList image={Image} />
          </>
        )}
      </div>
    </div>
  );
}

export default Legendaries;

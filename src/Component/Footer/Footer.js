import React from 'react';

import './Footer.css';
// import logo from '../../assest/images/Logo.png';

export default function Footer({ color }) {
  return (
    <footer className="grid-footer" style={{ backgroundColor: { color } }}>
      <div className="grid-item-footer">
        Make with ❤️ for the PokéSpartans team Platzi Master
      </div>
      <div className="grid-item-footer2">Ours Team</div>
    </footer>
  );
}

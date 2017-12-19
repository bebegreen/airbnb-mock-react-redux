import React from 'react';
import './amenties.css';

export default function Amenties({ amenties }) {
  return (
    <div>
      <h3>Amenties</h3>
      {amenties.map((amentie, i) => <p key={i}>{amentie}</p>)}
    </div>
  );
}

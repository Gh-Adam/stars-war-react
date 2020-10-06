import React from 'react';

const Planet = ({ planet }) => {
  return (
      <div className="card">
        <h4>{planet.name}</h4>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
      </div>
  );
};
export default Planet;

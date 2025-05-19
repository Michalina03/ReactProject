import React from 'react';

function Block({ identifier, name, hardness, blast_resistance, flammable, inventory_image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>ID:</strong> {identifier}</p>
      <p><strong>Hardness:</strong> {hardness}</p>
      <p><strong>Blast Resistance:</strong> {blast_resistance}</p>
      <p><strong>Flammable:</strong> {flammable ? 'Yes' : 'No'}</p>
      <img src={inventory_image} alt={name} />
    </div>
  );
}

export default Block;

import React from "react";

function Item({ identifier, name, inventory_image, rarity_id, renewable, stack_size }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>ID:</strong> {identifier}</p>
      <p><strong>Stack size:</strong> {stack_size}</p>
      <p><strong>Rarity:</strong> {rarity_id}</p>
      <p><strong>Renewable:</strong> {renewable ? "Yes" : "No"}</p>
      <img src={inventory_image} alt={name} />
    </div>
  );
}

export default Item;

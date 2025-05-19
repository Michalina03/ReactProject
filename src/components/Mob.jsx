import React from 'react'

function Mob({identifier,health,name,height,width,head_image}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>ID:</strong> {identifier}</p>
      <p><strong>Health:</strong> {health}</p>
      <p><strong>Height:</strong> {height}</p>
      <p><strong>Width:</strong> {width}</p>
      <img src={head_image} alt={name} />
    </div>
  )
}

export default Mob
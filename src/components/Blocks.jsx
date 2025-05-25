import React, { useState, useEffect } from 'react';
import Block from './Block';

function Blocks() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetch('/api/block')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data.slice(0, 24);

        const detailPromises = identifiers.map((id) =>
          fetch(`/api/block/${id}`)
            .then((res) => res.json())
            .then((result) => result.data)
            .catch(() => null)
        );

        const detailedBlocks = await Promise.all(detailPromises);
        setBlocks(detailedBlocks.filter(Boolean));
      })
      .catch((error) => {
        console.error("Error fetching block list:", error);
      });
  }, []);

  return (
    <div className="page__container">
      {blocks.map((block) => (
        <Block key={block.identifier} {...block} />
      ))}
    </div>
  );
}

export default Blocks;

import React, { useState, useEffect } from 'react';
import Mob from "./Mob"

function Mobs() {
  const [mobs, setMobs] = useState([]);

  useEffect(() => {
    fetch('/api/mob')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data.slice(0, 24);

        const detailPromises = identifiers.map((id) =>
          fetch(`/api/mob/${id}`)

            .then((res) => res.json())
            .then((result) => result.data)
            .catch(() => null)
        );

        const detailedMobs = await Promise.all(detailPromises);
        setMobs(detailedMobs.filter(Boolean));
      })
      .catch((error) => {
        console.error("Error fetching mob list:", error);
      });
  }, []);

  return (
    <div className="container">
      {mobs.map((mob) => (
        <Mob key={mob.identifier} {...mob} />
      ))}
    </div>
  );
}

export default Mobs
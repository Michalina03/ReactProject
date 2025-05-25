import React, { useState, useEffect } from "react";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/item')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data.slice(0, 24);

        const detailPromises = identifiers.map((id) =>
          fetch(`/api/item/${id}`)

            .then((res) => res.json())
            .then((result) => result.data)
            .catch(() => null)
        );

        const detailedItems = await Promise.all(detailPromises);
        setItems(detailedItems.filter(Boolean));
      })
      .catch((error) => {
        console.error("Error fetching item list:", error);
      });
  }, []);

  return (
    <div className="page__container">
      {items.map((item) => (
        <Item key={item.identifier} {...item} />
      ))}
    </div>
  );
}

export default Items;

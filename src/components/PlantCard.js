import React, { useState } from "react";

function PlantCard({ id, name, image, price, handleDeletedItem }) {
  const [isInStock, setIsInStock] = useState(true)
  const className = isInStock ? "primary" : ""

  function handleClick() {
    setIsInStock(isInStock => !isInStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => handleDeletedItem(id))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleClick} className={className}>{isInStock ? "In Stock" : "Out of Stock"}</button>
      <button style={{ float: "right" }} onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;

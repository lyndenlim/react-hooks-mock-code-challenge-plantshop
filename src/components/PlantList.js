import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDeletedItem }) {
  
  const plantList = plants.map(plant => {
    return <PlantCard 
    key={plant.id} 
    id={plant.id} name={plant.name} 
    image={plant.image} 
    price={plant.price}
    handleDeletedItem={handleDeletedItem}
    />
  })

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;

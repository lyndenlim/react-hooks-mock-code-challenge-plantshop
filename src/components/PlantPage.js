import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlant] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plantData => setPlant(plantData))
  }, [])

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleAddedPlant(addedPlant) {
    setPlant([...plants, addedPlant])
  }

  function handleDeletedItem(id) {
    const updatedItems = plants.filter(plant => {
      if (plant.id !== id) {
        return plant
      } else {
        return false
      }
    })
    setPlant(updatedItems)
  }

  return (
    <main>
      <NewPlantForm handleAddedPlant={handleAddedPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} handleDeletedItem={handleDeletedItem}/>
    </main>
  );
}

export default PlantPage;

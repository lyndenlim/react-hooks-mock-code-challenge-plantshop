import React, { useState } from "react";

function NewPlantForm({ handleAddedPlant }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        handleAddedPlant(data)
        setName("")
        setImage("")
        setPrice("")
      })

  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handlePrice(e) {
    setPrice(e.target.value)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImage} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePrice} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

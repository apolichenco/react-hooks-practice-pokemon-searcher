import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({whenAddingAPoke}) {
  const [name, setName] = useState()
  const [hp, setHp] = useState()
  const [front, setFront] = useState()
  const [back, setBack] = useState()

  function handleName(e) {
    setName(e.target.value)
  }
  function handleHp(e) {
    setHp(e.target.value)
  }
  function handleFront(e) {
    setFront(e.target.value)
  }  
  function handleBack(e) {
    setBack(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPoke = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back,
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoke),
    })
    .then((r) => r.json())
    .then((newItem) => whenAddingAPoke(newItem));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={handleBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

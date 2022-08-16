import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeData}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeData.map((poke, index) => <PokemonCard key={index} pokeInfo={poke}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;

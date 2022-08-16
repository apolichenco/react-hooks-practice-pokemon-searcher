import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards] = useState([])
  const [permanentPokemanCards, setPermanentPokemonCards] = useState([])

  function handleSearchPoke(searchedTerm) {
    if(!searchedTerm) {
      setPokemonCards(permanentPokemanCards)
    }
    else {
      const updatedPoke =
        permanentPokemanCards.filter((poke) => {
        const thisPoke = poke.name
        return thisPoke.toLowerCase().includes(searchedTerm.toLowerCase())
        })
      setPokemonCards(updatedPoke)
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => {
      setPokemonCards(data)
      setPermanentPokemonCards(data)
    })
  }, [])

  function handleAddPoke(newPoke) {
    setPokemonCards([...pokemonCards, newPoke])
    setPermanentPokemonCards([...pokemonCards, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm whenAddingAPoke={handleAddPoke}/>
      <br />
      <Search whenSearch={handleSearchPoke} />
      <br />
      <PokemonCollection pokeData={pokemonCards}/>
    </Container>
  );
}

export default PokemonPage;

import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeInfo}) {
  const [frontOrBack, setFrontOrBack] = useState(true)

  function handleFrontOrBack() {
    setFrontOrBack(!frontOrBack)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleFrontOrBack}>
          <img src={frontOrBack ? pokeInfo.sprites.front : pokeInfo.sprites.back} alt={pokeInfo.name}></img>
        </div>
        <div className="content">
          <div className="header">{pokeInfo.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeInfo.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

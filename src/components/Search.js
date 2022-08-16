import React from "react";

function Search({whenSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={((e) => whenSearch(e.target.value))}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

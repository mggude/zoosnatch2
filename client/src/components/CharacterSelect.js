import React from "react";
import characters from "../characters.json";
import { HeaderH2, CharImageContainer, CharImageSquare, ImageSquare, ImageText } from "./NewComponents/AllComponents";




///////we will need to put a function for an onClick

const SelectCharacter = props => {
  return (
    <>
      <title>Choose a Character</title>

      <HeaderH2 text="Choose a Character" />

      <div className="row">
        <CharImageContainer
          giraffeImage={props.giraffeImage}
          bearImage={props.bearImage}
          monkeyImage={props.monkeyImage}
        />
      </div>
    </>
  );
}

export default SelectCharacter;

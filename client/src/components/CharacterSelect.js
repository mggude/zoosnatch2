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
      <span onClick={() => props.selectedCharacterUpdatingState()}> </span>

        <CharImageContainer
          giraffeImage={props.giraffeSelectImg}
          bearImage={props.bearSelectImg}
          monkeyImage={props.monkeySelectImg}
          canvasComplete={props.canvasComplete}

        />
        
     
      </div>
    </>
  );
}

export default SelectCharacter;

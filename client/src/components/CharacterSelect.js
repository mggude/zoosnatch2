import React from "react";
import characters from "../characters.json";
import { HeaderH2, CharImageContainer, CharImageSquare, ImageSquare, ImageText } from "./NewComponents/AllComponents";




  ///////we will need to put a function for an onClick

const SelectCharacter = props => {
  return (
    <>
      <title>Choose a Character</title>
      <div className="w3-container">
        <div className="container">
          <HeaderH2 text="Choose a Character" />

          <div className="row">
            <CharImageContainer
              giraffeImage={this.state.giraffeImage}
              bearImage={this.state.bearImage}
              monkeyImage={this.state.monkeyImage}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default SelectCharacter;

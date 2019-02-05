import React from "react";

const HeaderH2 = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div id="displayQuestionText">
                    <h2>{props}</h2>
                </div>
            </div>
        </div>
    )
};

export default HeaderH2;
import React from "react";

const progressBar = (props) => {
    
    startProgressBar = (...timer) => {
        progress(timer, $("#timerCountdownBarRight")); //How to target this div?
        progress(timer, $("#timerCountdownBarLeft"));

    }

    progress = (percent, element) => {
        var progressBarWidth = percent * element.width() / 10;
        element.find('div').animate({ width: progressBarWidth }, 1000);
    }
    
    return (
        <>
            <div className="col-md-6">
                <div id="timerCountdownBarLeft">
                    <div></div>
                </div>
            </div>

            <div className="col-md-6">
                <div id="timerCountdownBarRight">
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default ImageSquare;
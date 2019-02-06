import "../../styles/ProgressBar.css";
import React, { Component } from 'react';
// import Timer from "./Timer";

class ProgressBar extends Component {
    state = {
        remainingTime: 100
    }

    componentDidMount() {
        setInterval(this.countDown, 1000);
    }

    countDown = (percent, element) => {
        this.setState({ remainingTime: this.state.remainingTime - 10 })
        // var progressBarWidth = percent * element.width() / 10;
        // element.find('div').animate({ width: percent * element.width() / 10 }, 1000);
    }


    render() {
        return (
            <div>
                {/* <h1>Time Remaining</h1> */}
                <div className="progress-containerTwo">
                    <div className="progress-barTwo" id="myBarTwo" style={{ width: `${this.state.remainingTime}%` }}></div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar" style={{ width: `${this.state.remainingTime}%` }}></div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;



// const progressBar = (props) => {


//     return (
//         <>
//             <h1>Time Remaining</h1>
//             <div className="progress-containerTwo">
//                 <div className="progress-barTwo" id="myBarTwo"></div>
//             </div>
//             <div className="progress-container">
//                 <div className="progress-bar" id="myBar"></div>
//             </div>
            {/* <div className="col-md-6">
                <div id="timerCountdownBarLeft">
                    <div></div>
                </div>
            </div>

            <div className="col-md-6">
                <div id="timerCountdownBarRight">
                    <div></div>
                </div>
            </div> */}

        {/* </>
    );
}

export default progressBar; */}

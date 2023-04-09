import { prototype } from "file-loader";
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle



//render your react application
function SimpleCounter(props) {
    return (

        <div className="bigCounter">
            <div className="calendar">
                <i className="bi bi-clock"></i></div>

            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>

        </div>
    )
}

SimpleCounter.prototypes = {
    digitFour: PropTypes.number,
    digitThree: prototypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const Two = Math.floor(counter / 10);
    const One = Math.floor(counter / 1);

    counter++;

    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={Two} digitThree={Three} digitFour={Four} />, document.querySelector("#app"));

}, 1000);



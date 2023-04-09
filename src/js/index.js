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

ReactDOM.render(<Home />, document.querySelector("#app"));

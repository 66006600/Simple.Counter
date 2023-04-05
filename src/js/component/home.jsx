import React from "react";
import Contador from "./Contador";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="row bg-dark">
				<div className="col"><i class="bi bi-clock-history"></i></div>
				<div className="col">0</div>
				<div className="col">0</div>
				<div className="col">0</div>
			</div>

			<nav className="navbar navbar-light bg-light">
				<form className="form-inline">
					<button className="btn btn-outline-success" type="button">Start button</button>
					<button className="btn btn-outline-warning" type="button">Pause button</button>

				</form>
			</nav>


			<Contador />

		</div>
	);
};

export default Home;

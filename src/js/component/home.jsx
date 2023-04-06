import React from "react";
import Contador from "./Contador";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div style={{ display: 'flex' }}>
			<Cuadro valor={1} />
			<Cuadro valor={2} />
			<Cuadro valor={3} />
			<Cuadro valor={4} />
			<Cuadro valor={5} />
			<Cuadro valor={6} />
		</div>
		

	)
};

export default Home;

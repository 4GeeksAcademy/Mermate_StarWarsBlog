import React from "react";
import Characters from "./characters";
import Planets from "./planets";
import Starships from "./starships";


export const Home = () => {
	return (
		<>
			<div>

				<Characters/>
				<Planets/>
				<Starships/>
				
			</div>
		</>
	);
};

import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			
			<div className="container">
			<Jumbotron />
			
			
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;

import React from "react";

import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-center my-5 text-center">
				<Card title="Card #1" text="The wind whispered secrets through the tall grass as the sun dipped below the horizon." image="https://images.pexels.com/photos/5926363/pexels-photo-5926363.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/> 
				<Card title="Card #2" text="She found the old key beneath a loose floorboard, its rusted teeth hinting at forgotten stories." image="https://images.pexels.com/photos/5639324/pexels-photo-5639324.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
				<Card title="Card #3" text="A single raindrop landed on his hand—then the storm began." image="https://images.pexels.com/photos/3634882/pexels-photo-3634882.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
				<Card title="Card #4" text="The lights flickered once, then everything went quiet." image="https://images.pexels.com/photos/19867368/pexels-photo-19867368/free-photo-of-scrabble-letters-spelling-free-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
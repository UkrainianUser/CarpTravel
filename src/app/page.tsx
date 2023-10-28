import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CareerInfo from "@/components/CareerInfo";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<CareerInfo />
			</main>
		</>
	);
};

export default Home;

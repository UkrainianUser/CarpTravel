import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
			</main>
		</>
	);
};

export default Home;

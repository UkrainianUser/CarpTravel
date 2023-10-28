import { NextPage } from "next";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Career />
			</main>
		</>
	);
};

export default Home;

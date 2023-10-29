import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Career />
				<Gallery />
				<Contacts />
			</main>
		</>
	);
};

export default Home;

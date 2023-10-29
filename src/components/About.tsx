import { NextPage } from "next";
import Container from "./Container";

const About: NextPage = () => {
	return (
		<>
			<section
				className="h-full py-14 bg-[url('/bg-about-mobile.jpg')] bg-cover"
				name="about"
			>
				<Container>
					<h2 className="mb-5 text-4xl font-thin uppercase tracking-wide">
						Who
						<span className="text-4xl font-medium"> we are</span>
					</h2>
					text-4xl font-medium
					<p className="mb-5 text-sm font-thin tracking-wide leading-5 w-[180px]">
						<span className="font-medium">a team of enthusiasts </span>
						who are fully committed to the mission of creating unforgettable and
						extraordinary trips to the most beautiful parts of the Carpathians.
						Our goal is not just to show you the natural wonders of the
						mountains, but to provide you with a deep immersion in their magical
						atmosphere.
					</p>
					<p className="mb-10 text-sm font-thin tracking-wide leading-5 w-[180px]">
						<span className="font-medium">We believe </span>
						that nature has the power to inspire, strengthen character and
						provide new perspectives. Therefore, each of our tours is aimed at
						unlocking your potential, enriching your spiritual world and
						creating unforgettable memories.
					</p>
					<p className="mb-10 w-[180px] ml-auto">
						<span className="uppercase block">From vacationers </span>
						<span className="uppercase text-right block">
							to active travelers{" "}
						</span>
						<span className="font-thin block tracking-[-0.14px]">
							we have a tour for everyone.
						</span>
					</p>
					<p className=" text-sm font-thin tracking-wide leading-5 auto-text">
						<span className="font-medium">We use methods </span>
						that are time-tested and proven. Our expert guides with in-depth
						knowledge of the Carpathian landscapes lead you safely through the
						mysteries of these mountains.
					</p>
				</Container>
			</section>
		</>
	);
};

export default About;

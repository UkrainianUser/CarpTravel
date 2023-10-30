import { NextPage } from "next";
import Container from "./Container";

const About: NextPage = () => {
	return (
		<>
			<section
				className="h-full py-14 md:pt-16 bg-[url('/bg-about-mobile.jpg')] min-[480px]:bg-[url('/bg-about-tablet.jpg')] xl:bg-[url('/bg-about-desktop.jpg')] bg-cover"
				name="about"
			>
				<Container>
					<div className="md:flex md:justify-between xl:justify-normal md:mb-5">
						<h2 className="mb-5 md:mb-0 text-4xl md:text-[67px] xl:text-[98px] md:leading-[4.2rem] xl:leading-[5.8rem] font-thin uppercase tracking-wide md:tracking-[-2.68px]">
							Who
							<span className="text-4xl md:text-[67px] xl:text-[98px] font-medium md:tracking-[-2.68px]">
								{" "}
								we are
							</span>
						</h2>
						<p className="mb-5 md:mb-0 md:ml-auto xl:ml-6 text-sm md:text-base xl:text-lg font-thin tracking-wide leading-5 w-[180px] md:w-[220px] xl:w-[292px]">
							<span className="font-medium">a team of enthusiasts </span>
							who are fully committed to the mission of creating unforgettable
							and extraordinary trips to the most beautiful parts of the
							Carpathians. Our goal is not just to show you the natural wonders
							of the mountains, but to provide you with a deep immersion in
							their magical atmosphere.
						</p>
					</div>
					<div className="md:flex md:justify-between md:flex-row-reverse md:mb-10">
						<p className="mb-10 md:mb-0 text-sm md:text-base xl:text-lg font-thin tracking-wide leading-5 w-[180px] md:w-[220px] xl:w-[292px]">
							<span className="font-medium">We believe </span>
							that nature has the power to inspire, strengthen character and
							provide new perspectives. Therefore, each of our tours is aimed at
							unlocking your potential, enriching your spiritual world and
							creating unforgettable memories.
						</p>
						<p className="mb-10 md:mb-0 md:text-base xl:text-lg w-[180px] md:w-[221px] ml-auto md:ml-0 md:inline-block md:self-end">
							<span className="uppercase block">From vacationers </span>
							<span className="uppercase text-right block">
								to active travelers{" "}
							</span>
							<span className="font-thin block tracking-[-0.14px] md:tracking-[0.32px]">
								we have a tour for everyone.
							</span>
						</p>
					</div>
					<p className=" text-sm md:text-base xl:text-lg font-thin tracking-wide leading-5 auto-text md:tracking-[0.32px] md:w-[473px] md:ml-auto">
						<span className="font-medium md:font-normal">We use methods </span>
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

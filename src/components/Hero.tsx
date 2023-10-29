import { NextPage } from "next";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Hero: NextPage = () => {
	return (
		<>
			{/* <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4">
        <div className="md:col-start-2 md:row-start-1">2</div>
    <div className="md:row-span-2 md:col-start-1 md:row-start-1">3</div>
    <div className="md:col-start-1 md:row-start-3">4</div>
    <div className="md:col-start-2 md:row-start-2">5</div>
    <div className="md:row-start-3">6</div>
</div> */}
			<section className="h-screen  pt-28 bg-[url('/bg-home-mobile.jpg')] min-[480px]:bg-[url('/bg-home-tablet.jpg')] bg-cover">
				<Container>
					<div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-12">
						<div className="uppercase text-end w-28 md:w-full mb-6 ml-auto md:ml-0 tracking-widest md:tracking-[8.71px] md:col-start-2 md:row-start-1">
							<span className="text-4xl  md:text-[67px] font-medium">7</span>
							<span className="text-4xl  md:text-[67px] font-thin">days </span>
							<span className="title-sub text-xs md:text-sm font-light tracking-[9.48px] md:tracking-[25.9px]">
								journey
							</span>
						</div>
						<h2 className="md:w-[426px] mb-6 text-4xl md:text-[67px] md:leading-none font-thin uppercase tracking-wide md:tracking-[-2.68px] md:row-span-2 md:col-start-1 md:row-start-1">
							<span className="font-medium">Uncover</span> Carpathian's Secrets
						</h2>
						<p className="text-[10px] md:text-sm w-40 md:w-64 mb-6 font-extralight leading-[1.6] md:col-start-1 md:row-start-3">
							Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
							Bukovel
						</p>
						<p className="md:w-[230px] mb-6 text-sm md:text-[16px] font-thin tracking-wide leading-5 md:col-start-2 md:row-start-2">
							We offer you unforgettable trips to the most beautiful parts of
							the Carpathians. Enjoy stunning views, exciting expeditions, and
							the best service!
						</p>
						<div className="relative z-0 w-[280px] mx-auto md:row-start-3">
							<Image
								className="absolute left-0"
								src={"/utils/left-border-mobile.svg"}
								width={42}
								height={53}
								alt={"left border"}
							/>
							<Link
								className="bg-[#ffffff1a] flex justify-center uppercase text-lg text-center items-center font-bold w-[280px] h-[53px]"
								href="#contacts"
							>
								<Image
									className="absolute left-[238px]"
									src={"/utils/right-border-mobile.svg"}
									width={42}
									height={53}
									alt={"left border"}
								/>
								Join now
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Hero;

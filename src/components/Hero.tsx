import { NextPage } from "next";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Hero: NextPage = () => {
	return (
		<>
			<section className="h-screen  pt-28 xl:pt-[130px] bg-[url('/bg-home-mobile.jpg')] min-[480px]:bg-[url('/bg-home-tablet.jpg')] min-[1000px]:bg-[url('/bg-home-desktop.jpg')] bg-cover">
				<Container>
					<div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-12 xlgap-y-[74px]">
						<div className="uppercase text-end w-28 md:w-[221px] xl:w-[295px] mb-6 xl:mb-0 ml-auto md:ml-auto tracking-widest md:tracking-[5.71px] xl:tracking-[1.71px] md:col-start-2 md:row-start-1">
							<span className="text-4xl  md:text-[67px] xl:text-[98px] font-medium md:leading-[1]">
								7
							</span>
							<span className="text-4xl  md:text-[67px] xl:text-[98px] font-thin md:leading-[1]">
								days{" "}
							</span>
							<span className="title-sub text-xs md:text-sm xl:text-base font-light tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[36.48px]">
								journey
							</span>
						</div>
						<h2 className="md:w-[426px] mb-6 xl:mb-[148px] text-4xl md:text-[67px] xl:text-[98px] md:leading-none font-thin uppercase tracking-wide md:tracking-[-2.68px] md:row-span-2 md:col-start-1 md:row-start-1">
							<span className="font-medium">Uncover</span> Carpathian's Secrets
						</h2>
						<p className="text-[10px] md:text-sm xl:text-base w-40 md:w-64 xl:h-6 xl:mb-0 xl:w-full mb-6 font-extralight leading-[1.6]  md:col-start-1 md:row-start-3">
							Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
							Bukovel
						</p>
						<p className="md:w-[230px] xl:w-[294px] xl:h-[120px] mb-6 xl:mb-0 md:ml-auto text-sm md:text-base xl:text-lg md:text-justify font-thin tracking-wide leading-5 xl:flex xl:items-end  md:col-start-2 md:row-start-2">
							We offer you unforgettable trips to the most beautiful parts of
							the Carpathians. Enjoy stunning views, exciting expeditions, and
							the best service!
						</p>
						<div>
							<Link
								className=" bg-[#ffffff1a] h-[53px] relative z-0 w-[280px] md:w-[230px] xl:w-[293px] mx-auto md:ml-auto md:mr-0 xl:mt-[-39px] md:row-start-3 hover:bg- hover:transition-all focus:transition-all flex justify-center uppercase text-lg text-center items-center font-bold h-[53px]"
								href="#contacts"
							>
								<Image
									className="absolute left-0"
									src={"/utils/left-border-mobile.svg"}
									width={42}
									height={53}
									alt={"left border"}
								/>
								Join now
								<Image
									className={
										"absolute left-[238px] md:left-[188px] xl:left-[251px]"
									}
									src={"/utils/right-border-mobile.svg"}
									width={42}
									height={53}
									alt={"left border"}
								/>
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Hero;

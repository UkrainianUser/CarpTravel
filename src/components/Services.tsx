"use client";

import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "./Container";

const Services: NextPage = () => {
	return (
		<>
			<section className="h-screen py-14 bg-[url('/bg-services1-mobile.jpg')] bg-cover">
				<Container>
					<h2 className="mb-5 uppercase text-4xl font-thin tracking-wide">
						<span>we</span> <span className="text-4xl font-medium">offer</span>
					</h2>
					<p className="ml-auto uppercase text-4xl font-thin tracking-wide text-right text-[43px] mb-3.5">
						01/<span className="text-[#ffffff33]">05</span>
					</p>
					<Swiper
						spaceBetween={50}
						slidesPerView={3}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
					</Swiper>
				</Container>
			</section>
		</>
	);
};

export default Services;

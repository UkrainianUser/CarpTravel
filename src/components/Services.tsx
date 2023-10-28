"use client";

import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import data from "../data/services.json";

const Services: NextPage = () => {
	const [activService, setActiveService] = useState("");
	let serviceName;
	activService === ""
		? (serviceName = "ATVs Traveling")
		: (serviceName = activService);

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<>
			<section
				className={`h-screen py-14 bg-[url('/bg-services1-mobile.jpg')] bg-cover`}
			>
				<Container>
					<h2 className="mb-5 uppercase text-4xl font-thin tracking-wide">
						<span>we</span> <span className="text-4xl font-medium">offer</span>
					</h2>
					<Swiper
						spaceBetween={50}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						slidesPerView={1}
						navigation={true}
						pagination={pagination}
						effect={"fade"}
					>
						{/* <p className="ml-auto uppercase text-4xl font-thin tracking-wide text-right text-[43px] mb-3.5">
							01/<span className="text-[#ffffff33]">05</span>
						</p> */}
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

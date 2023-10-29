"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
	return (
		<>
			<section
				className="h-screen py-14 bg-[url('/bg-gallery-mobile.jpg')]"
				name="gallery"
			>
				<Container>
					<h2 className="mb-5 text-4xl font-thin uppercase tracking-wide">
						Our
						<span className="text-4xl font-medium"> Gallery</span>
					</h2>
					<div className="min-w-0">
						<Swiper
							slidesPerView={1}
							loop={true}
							spaceBetween={24}
							centeredSlides={true}
							modules={[Navigation, Pagination]}
						>
							<SwiperSlide>
								<Image
									src={"/gallery-mountains.jpg"}
									width={460}
									height={306}
									alt={"mountains"}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={"/gallery-lake.jpg"}
									width={460}
									height={306}
									alt={"lake"}
									sizes="max-width: 100%"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={"/gallery-river.jpg"}
									width={460}
									height={306}
									alt={"river"}
									sizes="max-width: 100%"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Gallery;

import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<section className="home h-screen">
				<div className="container">
					<div className="uppercase text-center mb-4">
						<span className="text-3xl font-semibold">7</span>
						<span className="text-3xl">days </span>
						<span className="text-base font-medium">journey</span>
					</div>
					<h2 className="text-center mb-4 text-4xl font-light">
						Uncover Carpathian's Secrets
					</h2>
					<p className="home-mark text-center mb-4 text-base font-light">
						Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
					</p>
					<p className="home-text text-center mb-4 text-base font-light">
						We offer you unforgettable trips to the most beautiful parts of the
						Carpathians. Enjoy stunning views, exciting expeditions, and the
						best service!
					</p>
					<a
						className="home-link flex justify-center items-center gap-2 py-3 px-4 text-base font-bold text-white bg-opacity-10 border-dashed border-white"
						href="#"
					>
						Join now
					</a>
				</div>
			</section>
		</>
	);
}

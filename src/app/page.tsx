import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<section className="home h-screen pt-28">
				<div className="container">
					<div className="uppercase text-end w-28 mb-6 ml-auto tracking-widest">
						<span className="text-4xl font-medium">7</span>
						<span className="text-4xl font-thin">days </span>
						<span className="title-sub text-xs font-light">journey</span>
					</div>
					<h2 className="mb-6 text-4xl font-thin uppercase tracking-wide">
						<span className="font-medium">Uncover</span> Carpathian's Secrets
					</h2>
					<p className="home-mark w-40 mb-6 font-extralight leading-5">
						Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
					</p>
					<p className="home-text mb-6 text-sm font-thin tracking-wide leading-5">
						We offer you unforgettable trips to the most beautiful parts of the
						Carpathians. Enjoy stunning views, exciting expeditions, and the
						best service!
					</p>
					<a
						className="home-link flex justify-center uppercase py-5 text-lg font-bold border border-dashed"
						href="#"
					>
						Join now
					</a>
				</div>
			</section>
		</>
	);
}

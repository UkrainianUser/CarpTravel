import Container from "./Container";

const CareerInfo = () => {
	return (
		<Container>
			<h2 className="mb-5 text-4xl font-thin uppercase tracking-wide">
				Choose
				<span className="text-4xl font-medium"> us</span>
			</h2>
			<p className="ml-auto mb-9 text-sm font-thin leading-5 w-[180px]">
				Your chance to join our passionate team in Carpathian tourism. Seeking
				talented professionals to share our common mission.
			</p>
			<p className="ml-auto mb-9 text-3xl font-thin uppercase w-[180px]">
				Why us ?
			</p>
			<ul className="mb-9 text-xs font-thin text-right leading-5 w-[180px]">
				<li>
					<h5 className="text-sm mb-4 font-normal">
						Professional development{" "}
					</h5>
					<p className="mb-4">
						We offer growth opportunities and a creative environment to nurture
						your talents.
					</p>
				</li>
				<li>
					<h5 className="text-sm mb-4 font-normal">Teamwork </h5>
					<p className="mb-4">
						Join our close-knit family, where support and inspiration abound.
					</p>
				</li>
				<li>
					<h5 className="text-sm mb-4 font-normal">
						Stimulating work environment{" "}
					</h5>
					<p className="mb-4">
						Flexibility and remote options for a comfortable experience.
					</p>
				</li>
				<li>
					<h5 className="text-sm mb-4 font-normal">Exciting challenges </h5>
					<p className="mb-4">
						Unleash your potential through unforgettable projects showcasing
						Carpathian beauty.
					</p>
				</li>
			</ul>
		</Container>
	);
};

export default CareerInfo;

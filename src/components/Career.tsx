import CareerForm from "./CareerForm";
import CareerInfo from "./CareerInfo";

const Career = () => {
	return (
		<>
			<section
				className="h-full py-14 bg-[url('/bg-career-mobile.jpg')] bg-fixed"
				name="career"
			>
				<CareerInfo />
				<CareerForm />
			</section>
		</>
	);
};

export default Career;

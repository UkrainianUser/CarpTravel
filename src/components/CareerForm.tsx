import Container from "./Container";

const CareerForm = () => {
	return (
		<Container>
			<p className="ml-auto mb-6 text-sm font-extralight w-[180px]">
				Don't miss your opportunity! <br />
				Fill out the form right now and join our team!
			</p>
			<form>
				<div className="mb-4">
					<label
						className="flex leading-6 text-xs tracking-[2.4px] font-extralight"
						htmlFor="fullName"
					>
						Full name
					</label>
					<input
						className="block w-full h-6 pl-2 bg-[#ffffff0d] placeholder:font-thin"
						type="text"
						id="fullName"
						placeholder="John Smith"
					/>
				</div>
				<div className="mb-4">
					<label
						className="flex leading-6 text-xs tracking-[2.4px] font-extralight"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="block w-full h-6 pl-2 bg-[#ffffff0d] placeholder:font-thin"
						type="email"
						id="email"
						placeholder="johnsmith@email.com"
					/>
				</div>
				<div className="mb-4">
					<label
						className="flex leading-6 text-xs tracking-[2.4px] font-extralight"
						htmlFor="position"
					>
						Position
					</label>
					<input
						className="block w-full h-6 pl-2 bg-[#ffffff0d] placeholder:font-thin"
						type="text"
						id="position"
						placeholder="Movie maker"
					/>
				</div>
				<div className="mb-4">
					<label
						className="flex leading-6 text-xs tracking-[2.4px] font-extralight"
						htmlFor="phone"
					>
						Phone
					</label>
					<input
						className="block w-full h-6 pl-2 bg-[#ffffff0d] placeholder:font-thin"
						type="tel"
						id="phone"
						placeholder="(097) 12 34 567"
					/>
				</div>
				<div className="mb-4">
					<label
						className="flex leading-6 text-xs tracking-[2.4px] font-extralight"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="block w-full bg-[#ffffff0d]"
						id="message"
						rows={8}
						cols={20}
					/>
				</div>
				<div className="mb-4 flex">
					<input
						className="w-[22px] h-[22px] mr-2 text-center "
						type="checkbox"
						id="confirm"
					/>
					<label className="text-xs pt-1" htmlFor="confirm">
						I confirm my consent to the processing of personal data.
					</label>
				</div>
				<button
					className="uppercase text-3xl font-medium block ml-auto"
					type="submit"
				>
					Send
				</button>
			</form>
		</Container>
	);
};

export default CareerForm;

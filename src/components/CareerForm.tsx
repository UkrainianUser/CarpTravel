"use client";

import { useForm } from "react-hook-form";
// import Notiflix from "notiflix";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import Container from "./Container";
import { type } from "os";

type applicantData = {
	fullName: string;
	email: string;
	position: string;
	phone: number;
	message: string;
	confirm: boolean;
};

// Notiflix.Notify.init({
// 	opacity: 0.8,
// 	cssAnimationStyle: "from-top",
// });

const fullName = {
	required: { value: true, message: "Full name is required" },
};
const email = {
	required: { value: true, message: "Email is required" },
};
const position = {
	required: { value: true, message: "Position is required" },
};
const phone = {
	required: { value: true, message: "Phone is required" },
};
const confirm = {
	required: {
		value: true,
		message: "Please confirm yours consent to the processing of personal data",
	},
};

const CareerForm = () => {
	const { register, formState, handleSubmit } = useForm<applicantData>();
	return (
		<Container>
			<p className="ml-auto mb-6 text-sm font-extralight w-[180px]">
				Don't miss your opportunity! <br />
				Fill out the form right now and join our team!
			</p>
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
			>
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
						{...register("fullName", fullName)}
					/>
					{/* {Notiflix.Notify.warning(formState.errors.fullName?.message)} */}
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
						{...register("email", email)}
					/>
					{/* {Notiflix.Notify.warning(formState.errors.email?.message)} */}
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
						{...register("position", position)}
					/>
					{/* {Notiflix.Notify.warning(formState.errors.position?.message)} */}
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
						{...register("phone", phone)}
					/>
					{/* {Notiflix.Notify.warning(formState.errors.phone?.message)} */}
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
						{...register("message")}
					/>
				</div>
				<div className="mb-4 flex">
					<input
						className="w-[22px] h-[22px] mr-2 text-center "
						type="checkbox"
						id="confirm"
						{...register("confirm", confirm)}
					/>
					{/* {Notiflix.Notify.warning(formState.errors.confirm?.message)} */}
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

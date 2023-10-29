"use client";

import { useForm } from "react-hook-form";
import Container from "./Container";

type applicantData = {
	fullName: string;
	email: string;
};

const fullName = {
	required: { value: true, message: "Full name is required" },
};
const email = {
	required: { value: true, message: "Email is required" },
};

const Contacts = () => {
	const { register, formState, handleSubmit } = useForm<applicantData>();
	return (
		<>
			<section
				className="h-full py-14 bg-[url('/bg-contacts-mobile.jpg')] bg-cover"
				name="contacts"
			>
				<Container>
					<h2 className="mb-5 text-4xl font-thin uppercase tracking-wide">
						Contact
						<span className="text-4xl font-medium"> us</span>
					</h2>
					<div>
						<div>
							<span>+38 (098) 12 34 567</span>
							<span>+38 (073) 12 34 567</span>
						</div>
						<span>Phone number</span>
					</div>
					<div>
						<span>support@carptravel.com</span>
						<span>E-mail</span>
					</div>
					<div>
						<span>Follow us</span>
						<a href="#">facebook</a>
						<a href="#">instagram</a>
						<a href="#">youtube</a>
						<a href="#">tiktok</a>
					</div>
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
						<button
							className="uppercase text-3xl font-medium block ml-auto"
							type="submit"
						>
							Send
						</button>
					</form>
				</Container>
			</section>
		</>
	);
};

export default Contacts;

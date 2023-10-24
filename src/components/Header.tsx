import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Home() {
	return (
		<header className="header flex justify-between py-0 px-20 absolute w-screen mx-auto">
			<Image src={logo} alt="logo" width={61} height={34} />
			<button className="uppercase bg-transparent text-white border-none">
				Menu
			</button>
		</header>
	);
}

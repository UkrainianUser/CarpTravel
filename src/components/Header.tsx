"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleOpenMenu: () => void = () => {
		setIsOpenMenu(true);
	};
	const handleCloseMenu: () => void = () => {
		setIsOpenMenu(false);
	};

	return (
		<header className="header flex justify-between py-9 px-5 absolute w-screen">
			<Image src={logo} alt="logo" width={61} height={34} />
			<button
				className="uppercase bg-transparent text-white border-none"
				onClick={handleOpenMenu}
			>
				Menu
			</button>
			{isOpenMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
		</header>
	);
};

export default Header;

"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import MobileMenu from "./MobileMenu";
import Container from "./Container";
import Menu from "./Menu";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleOpenMenu: () => void = () => {
		setIsOpenMenu(true);
	};
	const handleCloseMenu: () => void = () => {
		setIsOpenMenu(false);
	};

	return (
		<header className="header py-9 absolute w-screen">
			<Container>
				<div className="flex justify-between">
					<Image src={logo} alt="logo" width={61} height={34} />
					<button
						className="uppercase bg-transparent text-white border-none md:hidden"
						onClick={handleOpenMenu}
					>
						Menu
					</button>
					{isOpenMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
					<Menu />
				</div>
			</Container>
		</header>
	);
};

export default Header;

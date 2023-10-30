import { Link } from "react-scroll";

const Menu = () => {
	return (
		<nav className="hidden md:flex">
			<ul className="flex gap-x-6 xl:gap-x-14">
				<li>
					<Link to="about" smooth={true} duration={1000}>
						About
					</Link>
				</li>
				<li>
					<Link to="services" smooth={true} duration={1000}>
						Services
					</Link>
				</li>
				<li>
					<Link to="career" smooth={true} duration={1000}>
						Career
					</Link>
				</li>
				<li>
					<Link to="gallery" smooth={true} duration={1000}>
						Gallery
					</Link>
				</li>
				<li>
					<Link to="contacts" smooth={true} duration={1000}>
						Contacts
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

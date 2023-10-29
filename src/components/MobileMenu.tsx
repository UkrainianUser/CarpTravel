import { FC } from "react";
import { Link } from "react-scroll";
import Container from "./Container";

interface MobileMenuProps {
	onCloseMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ onCloseMenu }) => {
	return (
		<div className="bg-[#010a05bf] backdrop-blur-xl fixed top-0 left-0 w-full h-full pt-11 text-lg tracking-[1.8px]">
			<Container>
				<button
					className="uppercase block ml-auto mb-[110px] text-sm"
					onClick={onCloseMenu}
				>
					Close
				</button>
				<nav>
					<ul className="flex flex-col gap-12 items-center">
						<li>
							<Link
								to="about"
								onClick={onCloseMenu}
								smooth={true}
								duration={1000}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="services"
								onClick={onCloseMenu}
								smooth={true}
								duration={1000}
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="career"
								onClick={onCloseMenu}
								smooth={true}
								duration={1000}
							>
								Career
							</Link>
						</li>
						<li>
							<Link
								to="gallery"
								onClick={onCloseMenu}
								smooth={true}
								duration={1000}
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								to="contacts"
								onClick={onCloseMenu}
								smooth={true}
								duration={1000}
							>
								Contacts
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	);
};

export default MobileMenu;

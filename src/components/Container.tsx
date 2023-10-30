import { FC, ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<div className="min-w-[320px] min-[480px]:w-[440px] md:w-[744px] xl:w-[1240px] my-0 mx-auto py-0 px-[20px]">
			{children}
		</div>
	);
};

export default Container;

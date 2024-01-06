import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ body }) => {
	return (
		<div className="relative w-full items-center justify-center">
			{/* Header */}
			<Header />

			{/* Body */}
			<div className="w-full px-[5%] md:px-[12.5%] flex justify-center">
				<div className="z-10 md:max-w-[1920px] w-full">{body}</div>
			</div>

			{/* Footer */}
			<Footer />
			{/* Bg Lines */}
			<div className="absolute top-0 w-full h-full z-[-1]">
				{" "}
				<div className="absolute right-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[50%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute right-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
			</div>
		</div>
	);
};

export default Layout;

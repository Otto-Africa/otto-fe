import React from "react";
import Logo from "../assets/image/logo-black.svg";

const Layout = ({ body }) => {
	return (
		<div className="relative w-full items-center justify-center">
			<div className="">
				{" "}
				<div className="absolute right-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[50%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute right-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
			</div>
			{/* Header */}
			<div className="w-full fixed z-50 flex bg-white content-center items-center justify-between h-[88px] border-b border-[#C9C9C9]/30 px-[5%]">
				<div className="flex items-center space-x-8">
					<img
						src={Logo}
						alt=""
						className="h-[32px]"
					/>
					<div className="border-r h-8"></div>
					<ul className="flex space-x-8">
						<li className="font-semibold">Why Otto</li>
						<li>About</li>
					</ul>
				</div>
				<div className="flex items-center space-x-8">
					<p>Support</p>
					<p>Login</p>
					<div className=" text-white text-[14px] border bg-[#1b3359] rounded-lg px-6 py-3">
						Create Free Account
					</div>
					<img
						src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703958592/Ghana-Flag_xtapmg.png"
						alt=""
						className="h-[24px]"
					/>
				</div>
			</div>
			<div className="z-10 px-[12.5%]">{body}</div>

			<div className="bg-white">{/* <Footer /> */}</div>
		</div>
	);
};

export default Layout;

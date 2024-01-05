import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const dropdownRef = useRef(null);
	const [aboutIsOpen, setAboutIsOpen] = useState();

	const setOpenAbout = () => {
		setAboutIsOpen(!aboutIsOpen);
	};

	const aboutList = [
		{
			title: "QR Payments",
			subtitle: "Text Here for QR ",
			icon: "/img/logos/Favicon - White@4x-8.png",
		},
		{
			title: "Gift Cards",
			subtitle: "Text Here for Gift Cards ",
			icon: "/img/logos/Favicon - White@4x-8.png",
		},
	];
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setAboutIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className="w-full fixed z-50 flex bg-white content-center items-center justify-between h-[88px] border-b border-[#C9C9C9]/30 px-[5%]">
			<div className="flex items-center space-x-8">
				<img
					src="/img/logos/Logo Black.png"
					alt=""
					className="h-[32px] cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				/>
				<div className="border-r h-8"></div>
				<ul className="flex space-x-8">
					<li className="text-slate-500 cursor-pointer">Why Otto</li>

					<li
						ref={dropdownRef}
						className="relative"
						onClick={setOpenAbout}>
						<div className="cursor-pointer flex items-center space-x-2">
							<p className="text-slate-500">About</p>{" "}
							<FaCaretDown className="-mt-1 text-slate-500" />
						</div>
						{aboutIsOpen && (
							<div className="bg-gray-50 border rounded-2xl overflow-hidden top-8 absolute z-50 w-[60vh]">
								<div className="flex ">
									<div className="bg-white pl-8 py-8 w-2/3 space-y-8">
										{aboutList.map((items) => {
											return (
												<div className="flex items-center space-x-4 cursor-pointer">
													<div className="rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#1b3359]">
														<img
															src={items.icon}
															alt=""
															className="h-[24px] object-contain"
														/>
													</div>
													<div>
														<p className="font-medium">
															{items.title}
														</p>
														<p className="text-slate-500 text-sm">
															{items.subtitle}
														</p>
													</div>
												</div>
											);
										})}
									</div>
									<div className="p-8">
										<li className="space-y-4">
											<ul className="cursor-pointer">
												About Otto
											</ul>
											<ul className="cursor-pointer">
												Otto Team
											</ul>
										</li>
										<div className="flex space-x-2 mt-12">
											<img
												src="/img/twitter.png"
												alt=""
												className="w-[24px] object-contain"
												onClick={() => {}}
											/>
											<img
												src="/img/linkedin.png"
												alt=""
												className="w-[24px] object-contain"
												onClick={() => {}}
											/>
											<img
												src="/img/instagram.png"
												alt=""
												className="w-[24px] object-contain"
												onClick={() => {}}
											/>
											<img
												src="/img/facebook.png"
												alt=""
												className="w-[24px] object-contain"
												onClick={() => {}}
											/>
										</div>
									</div>
								</div>
							</div>
						)}
					</li>
					<li className="cursor-pointer text-slate-500">Blog</li>
				</ul>
			</div>
			<div className="flex items-center space-x-8">
				<p className="text-slate-500">Support</p>
				{/* <p className="text-slate-500">Login</p> */}
				<div className="text-white text-[14px] border bg-[#1b3359] rounded-lg px-6 py-3">
					Join the Waitlist
				</div>
				<img
					src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703958592/Ghana-Flag_xtapmg.png"
					alt=""
					className="h-[24px] rounded-md"
				/>
			</div>
		</div>
	);
};

export default Header;

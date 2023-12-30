import React, { useState } from "react";
import Logo from "./assets/image/logo-black.svg";
import QRCodeChanger from "./qrcode-changer";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

function App() {
	const [display, setDisplay] = useState("");
	const [userEmail, setEmail] = useState("");
	return (
		<div className="text-[#060b11] w-full items-center justify-center">
			{/* Header */}
			<div className="w-full fixed z-50 bg-gray-50  flex content-center items-center justify-between h-[88px] px-[12.5%]">
				<div className="flex items-center space-x-4">
					<img
						src={Logo}
						alt=""
						className="h-[32px]"
					/>
					<div className="border-r h-8"></div>
					<p className="font-semibold">Financial Technologies</p>
				</div>
				<div className="flex items-center space-x-12">
					<ul className="flex space-x-12">
						<li className="font-semibold">Home</li>
						<li>About</li>
					</ul>
					<div className=" text-[#060b11] border border-[#1b3359] px-4 py-2">
						Get Started
					</div>
				</div>
			</div>

			<div className="pt-48 pb-32 px-[12.5%]">
				{/* <div className="absolute top-0 h-full w-full bg-cover bg-center" /> */}
				<div className="max-w-8xl container relative mx-auto">
					<div className="flex flex-wrap items-center">
						<div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
							<p className="text-[#060b11] leading-[84px] text-[72px] mb-6 font-black">
								Pay & get paid with cash, gift cards, and more.
							</p>
							<p className="text-[#696d70] text-[20px]">
								From corner stores to corner offices, Otto fuels
								payments that grow. Seamless cash & card
								transactions, rewarding loyalty programs, and
								convenient gifting
							</p>
						</div>
						<div className="flex w-full mt-24 space-x-4">
							<div className="w-1/4 h-[32rem] overflow-hidden">
								{/* <p className="mb-6 font-semibold">Payments</p> */}
								<div className="h-[32rem] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
									<img
										src="/img/friends.jpg"
										alt=""
										className="object-cover w-full h-full"
									/>
								</div>
							</div>

							<div className="w-1/4 h-[32rem] overflow-hidden rounded-2xl">
								{/* <p className="mb-6 font-semibold">Gift Cards</p> */}
								<div className="relative h-[32rem] mt-12">
									<div className="relative bg-green-50 h-1/2 rounded-2xl overflow-hidden">
										<div className="absolute top-6 left-6 z-10 bg-white rounded-xl px-4 py-2">
											<p className=" text-[18px] text-[#1b5459] font-extrabold items-center">
												{" "}
												<span className="text-[14px] font-semibold mr-1">
													₵
												</span>
												23
											</p>
											{/* <p className="text-[14px] -mt-1 text-[#798586]">
												{" "}
												Drinks for your hardwork
											</p> */}
										</div>
										<img
											src="/img/Card-3.png"
											alt=""
											className="object-cover w-full h-full"
										/>
									</div>
									<div className="relative -mt-24 bg-green-50 h-1/2 rounded-2xl overflow-hidden">
										<div className="absolute top-6 right-6 z-10 bg-white rounded-xl px-4 py-2">
											<p className=" text-[18px] text-[#1b5459] font-extrabold items-center">
												{" "}
												<span className="text-[14px] font-semibold mr-1">
													₵
												</span>
												1000
											</p>
											{/* <p className="text-[14px] -mt-1 text-[#798586]">
												{" "}
												For your road trip
											</p> */}
										</div>
										<img
											src="/img/Card-1.png"
											alt=""
											className="object-cover w-full h-full"
										/>
									</div>
								</div>
							</div>
							<div className="relative w-1/4  h-[32rem] bg-gray-100 rounded-2xl">
								<div className="flex items-center justify-center bg-[#1b3359] p-4 py-16 rounded-2xl">
									<QRCodeChanger size={180} />
								</div>
								<div className="border absolute -top-6 -left-16 bg-white rounded-full px-6 py-2">
									Scan, Pay, Grow 🥰
								</div>
								<div className="relative p-4 space-y-4">
									<div className="mt-12 pb-4 space-y-3">
										<p className="text-[16px] font-bold">
											Open on Mobile
										</p>
										<p className="text-[14px]">
											Scan with your phone’s camera or the
											Otto code app to pay and use
											multiple options
										</p>
									</div>
									<div className="absolute justify-between items-center flex w-5/6 border -top-8 bg-white p-2 rounded-full">
										<div className="flex items-center">
											<div className="h-10 w-16 rounded-full bg-red-900 overflow-hidden">
												<img
													src="/img/team-2.jpg"
													alt=""
													className="h-full w-full object-cover"
												/>
											</div>
											<p className="font-semibold ml-3">
												Kwasi Adwoa
											</p>
										</div>
										{/* <div className="w-8 h-8 mr-2 bg-[#1b3359] rounded-full text-white flex items-center justify-center bg-[]">
											{" "}
											<FaArrowRight />{" "}
										</div> */}
									</div>
								</div>
							</div>
							<div className="w-1/4 h-[32rem] bg-gray-100 rounded-2xl overflow-hidden ">
								<img
									src="/img/vendor.jpg"
									alt=""
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <section className="mt-16 bg-white px-4 pb-20 pt-4">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{featuresData.map(
							({ color, title, icon, description }) => (
								<FeatureCard
									key={title}
									color={color}
									title={title}
									icon={icon}
									description={description}
								/>
							)
						)}
					</div>
				</div>
			</section> */}

			<div className="bg-white">{/* <Footer /> */}</div>
		</div>
	);
}

export default App;

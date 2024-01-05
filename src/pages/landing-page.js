import React from "react";
import Layout from "../layout/layout";
import QRCodeChanger from "../qrcode-changer";

const LandingPage = () => {
	return (
		<Layout
			body={
				<>
					<section className="relative  pb-32 ">
						<div className="max-w-8xl pt-64 container relative mx-auto">
							<div className=" flex space-x-[80px]">
								<div className="w-1/2">
									<div className="w-full flex flex-col">
										<p className="leading-[80px] text-[72px] w-[90%] mb-4 font-black">
											Pay & get paid with cash, gift
											cards, and more.
										</p>
										<p className="text-lg text-slate-500 w-[75%] leading-relaxed">
											From corner stores to corner
											offices, Otto fuels seamless cash &
											card transactions, rewarding loyalty
											programs, and convenient gifting
										</p>
									</div>

									<div className="flex space-x-4 mt-12">
										<button className="h-[52px] bg-[#1b3359] text-white font-semibold px-6 rounded-lg ">
											Join the Waitlist
										</button>
										<button className="h-[52px] bg-white text-[#1b3359] font-semibold  px-6 rounded-lg ">
											Contact Sales
										</button>
									</div>
								</div>

								<div className="flex w-1/2 -mt-12">
									<div className="w-full  h-full rounded-2xl p-16">
										{/* <p className="mb-6 font-semibold">Gift Cards</p> */}
										<div className="relative h-[32rem]">
											<div className="absolute -left-40 top-48 flex mt-0 w-[262px] max-w-full flex-col items-stretch self-start">
												<div className="bg-white z-10 flex items-stretch border justify-between gap-5 px-5 py-5 rounded-xl">
													<div className="flex flex-col items-stretch">
														<div className="text-slate-500 text-sm whitespace-nowrap">
															Enter amount
														</div>
														<div className="text-black text-2xl font-bold whitespace-nowrap mt-3">
															<span className="text-base">
																₵
															</span>
															450.00
														</div>
													</div>
													<button
														className="text-white text-sm font-medium whitespace-nowrap bg-[#1b5459] self-center aspect-[2.2857142857142856] justify-center items-stretch my-auto px-4 py-2.5 rounded-[40px]"
														aria-label="Send">
														Send
													</button>
												</div>
											</div>
											<div className="absolute -top-16 -left-16 bg-green-50 w-full h-2/3 rounded-2xl overflow-hidden">
												<div className="absolute top-6 left-6  bg-white rounded-xl px-4 py-2">
													<p className=" text-[18px] font-extrabold items-center">
														<span className="text-[14px] font-semibold mr-1">
															₵
														</span>
														23
													</p>
												</div>
												<img
													src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957562/Card-3_mfpbh7.png"
													alt=""
													className="object-cover w-full h-full"
												/>
											</div>
											<div className="absolute top-16 -right-24 bg-green-50 w-full h-2/3 rounded-2xl overflow-hidden">
												<div className="absolute top-6 right-6  bg-white rounded-xl px-4 py-2">
													<p className=" text-[18px] font-extrabold items-center">
														<span className="text-[14px] font-semibold mr-1">
															₵
														</span>
														1000
													</p>
												</div>
												<img
													src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957728/Card-1_kmrujd.png"
													alt=""
													className="object-cover w-full h-full"
												/>
											</div>
											<div className="absolute top-64 rotate-[15deg] -left-16 flex flex-col text-white font-medium bg-gradient-to-br from-[#1b5459] to-[#1e545a] w-full h-2/3 rounded-3xl overflow-hidden">
												<div className="h-full justify-between z-10">
													<div className="flex items-center place-items-center p-10 h-3/4">
														<div className="flex space-x-6 items-center pt-16">
															<img
																src="/img/Card-Chip.png"
																alt="Chip Icon"
																className="w-16 object-contain"
															/>
															<div className="text-2xl font-semibold ">
																4512 3278 0946
																2231
															</div>
														</div>
													</div>
													<div className="pl-8 pb-8 h-1/4">
														<img
															src="/img/logos/Favicon - White@4x-8.png"
															alt="Credit Card Logo"
															className="w-12 h-12 object-contain"
														/>
													</div>
												</div>
												<div className="absolute inset-0">
													<img
														src="/img/pattern.png"
														alt=""
														className="inset-0"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="justify-center items-center flex flex-col py-12 max-md:px-5 mt-12">
						<div className="flex w-full flex-col items-stretch mb-12 max-md:max-w-full">
							<div className="max-md:max-w-full">
								<div className="gap-5 max-md:items-stretch max-md:gap-0">
									<div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
										<div className="flex grow flex-col items-stretch">
											<div className="text-slate-500 text-xl font-semibold ">
												WHY USE OTTO
											</div>
										</div>
									</div>
									<div className="flex mt-10 max-md:flex-col space-x-12 max-md:w-full max-md:ml-0">
										<div className="text-4xl font-bold leading-snug w-[15%]">
											Easy, Fast, Rewarding
										</div>
										<div className="w-[40%] text-slate-500 text-lg leading-relaxed max-md:max-w-full">
											Transform the way you manage your
											finances. From simplified payments
											to loyalty programs, we're here to
											empower your financial journey.
										</div>
									</div>
								</div>
							</div>
							<div className="  rounded-3xl mt-20 flex max-md:max-w-full max-md:mt-10 items-center">
								<div className="flex max-md:items-stretch space-x-8">
									<div className="w-1/3 p-8 rounded-xl bg-gray-50 flex space-x-8 max-md:w-full max-md:ml-0 mb-12">
										{/* <div>
											<div className="bg-[#1b3359] h-10 w-10 flex items-center justify-center rounded-full">
												<FaCheck color="white" />
											</div>
										</div> */}
										<div className="justify-center items-stretch flex grow flex-col max-md:mt-6">
											<div className=" text-xl font-semibold leading-9">
												Secure and Seamless Transactions
											</div>
											<div className="text-slate-500 text-base leading-6 mt-2">
												Trust in our secure QR code
												system for safe and hassle-free
												payments!
											</div>
										</div>
									</div>
									<div className="w-1/3 p-8 bg-gray-50 rounded-xl flex space-x-4 max-md:w-full max-md:ml-0  mb-12">
										{/* <div>
											<div className="bg-[#1b3359] h-10 w-10 flex items-center justify-center rounded-full">
												<FaCheck color="white" />
											</div>
										</div> */}
										<div className="justify-center items-stretch flex flex-col max-md:mt-6">
											<div className=" text-xl font-semibold leading-9 er">
												Clear payment history
											</div>
											<div className="text-slate-500 text-base leading-6  mt-2">
												Still writing manual expenses?
												Our platform breaks down every
												expense you log down to the
												millisecond!
											</div>
										</div>
									</div>
									<div className="w-1/3 p-8 bg-gray-50 rounded-xl flex space-x-4 max-md:w-full max-md:ml-0 mb-12">
										{/* <div>
											<div className="bg-[#1b3359] h-10 w-10 flex items-center justify-center rounded-full">
												<FaCheck color="white" />
											</div>
										</div> */}
										<div className="justify-center items-stretch flex flex-col max-md:mt-6">
											<div className=" text-xl font-semibold leading-9 er">
												Multi Channel Payments
											</div>
											<div className="text-slate-500 text-base leading-6  mt-2">
												Have more than 1 bank account or
												credit/debit card? Our platform
												enables integrated payments.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full flex items-center justify-center">
								<div className="relative p- h-[32rem] rounded-2xl w-1/5">
									<div className="flex items-center justify-center p-4 py-16 rounded-2xl">
										<QRCodeChanger size={280} />
									</div>
									<div className="border absolute top-8 -left-8 bg-white rounded-full px-6 py-2">
										Scan, Pay, Grow 🥰
									</div>
									<div className="relative space-y-6 justify-center flex">
										<div className="absolute justify-between items-center flex w-full border -top-8 bg-white p-2 rounded-full">
											<div className="flex items-center justify-between w-full">
												<div className="flex items-center">
													<div className="h-10 w-16 rounded-full overflow-hidden">
														<img
															src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957412/portrait-lesbian-couple-posing-together_2_kw0ar7.jpg"
															alt=""
															className="h-full w-full object-cover"
														/>
													</div>
													<p className="font-semibold ml-3">
														Kwasi
													</p>
												</div>
												<button
													className="text-white text-sm font-medium whitespace-nowrap bg-[#1b5459] self-center aspect-[2.2857142857142856] justify-center items-stretch my-auto px-4 py-2.5 rounded-[40px]"
													aria-label="Send">
													Send
												</button>
											</div>
										</div>
										<div className="pt-6 pb-4 space-y-3">
											<p className="text-xl font-bold">
												Open on Mobile
											</p>
											<p className="text-base">
												Scan with your phone’s camera or
												the Otto app to pay
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="z-20 justify-center mt-12 items-center content-center flex-wrap bg-[#1b3359] flex flex-col px-16 py-12 rounded-xl max-md:px-5">
						<div className="w-full my-10 max-md:max-w-full">
							<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
								<div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
									<h1 className="text-white text-4xl font-bold leading-[55px] tracking-tighter max-md:mt-10">
										Sign up for free.
										<br />
										Supercharge your payments
									</h1>
								</div>
								<div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
									<div className="items-center self-stretch bg-white bg-opacity-30 flex justify-between gap-5 w-full my-auto pl-6 pr-1.5 py-1.5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pl-5">
										<label
											htmlFor="email"
											className="text-white text-opacity-70 text-base my-auto">
											Your email...
										</label>
										<button
											type="submit"
											className="text-sky-950 text-center text-base font-semibold leading-10 tracking-tight capitalize whitespace-nowrap items-stretch shadow-sm bg-white self-stretch justify-center px-9 py-0.5 rounded-md max-md:px-5">
											Sign up for free
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			}
		/>
	);
};

export default LandingPage;

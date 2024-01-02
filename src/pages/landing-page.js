import React from "react";
import Layout from "../layout/layout";
import { FaCheck } from "react-icons/fa";
import QRCodeChanger from "../qrcode-changer";

const LandingPage = () => {
	return (
		<Layout
			body={
				<>
					<div className="relative  pb-32 z-10">
						<section className="max-w-8xl pt-64 container relative mx-auto">
							<div className=" flex space-x-[80px]">
								<div className="w-1/2">
									<div className="w-full flex flex-col">
										<p className="leading-[80px] text-[72px] mb-6 font-black">
											Pay & get paid with cash, gift
											cards, and more.
										</p>
										<p className="text-xl w-[85%] leading-relaxed">
											From corner stores to corner
											offices, Otto fuels seamless cash &
											card transactions, rewarding loyalty
											programs, and convenient gifting
										</p>
									</div>

									<div className="flex space-x-4 mt-16">
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
											<div className="absolute -top-16 -left-16 bg-green-50 w-full h-2/3 rounded-2xl overflow-hidden">
												<div className="absolute top-6 left-6 z-10 bg-white rounded-xl px-4 py-2">
													<p className=" text-[18px] font-extrabold items-center">
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
													src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957562/Card-3_mfpbh7.png"
													alt=""
													className="object-cover w-full h-full"
												/>
											</div>
											<div className="absolute top-16 -right-24 bg-green-50 w-full h-2/3 rounded-2xl overflow-hidden">
												<div className="absolute top-6 right-6 z-10 bg-white rounded-xl px-4 py-2">
													<p className=" text-[18px] font-extrabold items-center">
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
													src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957728/Card-1_kmrujd.png"
													alt=""
													className="object-cover w-full h-full"
												/>
											</div>
											<div className="absolute top-64 rotate-[15deg] -left-16 flex flex-col text-white font-medium bg-gradient-to-br from-[#1b5459] to-[#1e545a] w-full h-2/3 rounded-3xl overflow-hidden">
												<div className="z-10 h-full justify-between">
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
												<div className="absolute z-0 inset-0">
													<img
														src="/img/pattern.png"
														alt=""
														className="inset-0 z-0"
													/>
												</div>

												{/* <div className="mt-4">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <div className="w-3/4">
                                            <label className="font-semibold">
                                                Card Holder
                                            </label>
                                            <div>Patience Serwah</div>
                                        </div>
                                        <div className="w-1/4">
                                            <label className="font-semibold">
                                                Expires
                                            </label>
                                            <div>12/26</div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-semibold">
                                            CVV
                                        </label>
                                        <div>846</div>
                                    </div>
                                </div> */}

												{/* <div className="flex justify-end">
                                    
                                    <img
                                        src="credit-card-logo.png"
                                        alt="Credit Card Logo"
                                        className="w-16 h-16 object-contain"
                                    />
                                </div> */}
											</div>
										</div>
									</div>
									{/* 
                    <div className="w-1/4 h-[32rem] bg-gray-100 rounded-2xl overflow-hidden ">
                        <img
                            src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957366/latino-hair-salon-owner-preparing-clients_xgqdwq.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div> */}
									{/* 
                    <div className="w-1/3 h-[32rem] overflow-hidden">
                
                        <div className="h-[32rem] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957412/portrait-lesbian-couple-posing-together_2_kw0ar7.jpg"
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div> */}
								</div>
							</div>
						</section>
					</div>

					<div className=" justify-center items-center bg-white flex flex-col py-12 max-md:px-5">
						<div className="flex w-full flex-col items-stretch mt-20 mb-12 max-md:max-w-full max-md:my-10">
							<div className="max-md:max-w-full">
								<div className="gap-5 max-md:items-stretch max-md:gap-0">
									<div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
										<div className="flex grow flex-col items-stretch max-md:mt-10">
											<div className="text-[#1b5459] text-xl font-semibold leading-8 tracking-tight">
												WHY USE OTTO
											</div>
										</div>
									</div>
									<div className="flex mt-10 max-md:flex-col items-center space-x-12 max-md:w-full max-md:ml-0">
										<div className="text-4xl font-bold leading-[60px] tracking-tighter w-[15%]">
											Easy, Fast, Rewarding
										</div>
										<div className="w-[45%] text-slate-500 text-xl leading-8 tracking-tight max-md:max-w-full max-md:mt-10">
											Transform the way you manage your
											finances. From simplified payments
											to loyalty programs, we're here to
											empower your financial journey.
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-100 z-10 p-16 rounded-3xl mt-20 flex max-md:max-w-full max-md:mt-10 items-center">
								<div className="gap-8 max-md:items-stretch ">
									<div className="w-[60%] flex space-x-4 max-md:w-full max-md:ml-0 mb-12">
										<div>
											<div className="bg-[#1b5459] h-10 w-10 flex items-center justify-center rounded-full">
												{" "}
												<FaCheck color="white" />{" "}
											</div>
										</div>
										<div className="justify-center items-stretch flex grow flex-col max-md:mt-6">
											<div className=" text-2xl font-semibold leading-9 tracking-tighter ">
												Secure and Seamless Transactions
											</div>
											<div className="text-slate-500 text-base leading-6 tracking-tight mt-2">
												Trust in our secure QR code
												system for safe and hassle-free
												payments!
											</div>
										</div>
									</div>
									<div className="w-[60%] flex space-x-4 max-md:w-full max-md:ml-0  mb-12">
										<div>
											<div className="bg-[#1b5459] h-10 w-10 flex items-center justify-center rounded-full">
												{" "}
												<FaCheck color="white" />{" "}
											</div>
										</div>
										<div className="justify-center items-stretch flex flex-col max-md:mt-6">
											<div className=" text-2xl font-semibold leading-9 tracking-tighter">
												Clear payment history
											</div>
											<div className="text-slate-500 text-base leading-6 tracking-tight mt-2">
												Still writing manual expenses?
												Our platform breaks down every
												expense you log down to the
												millisecond!
											</div>
										</div>
									</div>
									<div className="w-[60%] flex space-x-4 max-md:w-full max-md:ml-0 mb-12">
										<div>
											<div className="bg-[#1b5459] h-10 w-10 flex items-center justify-center rounded-full">
												{" "}
												<FaCheck color="white" />{" "}
											</div>
										</div>
										<div className="justify-center items-stretch flex flex-col max-md:mt-6">
											<div className=" text-2xl font-semibold leading-9 tracking-tighter">
												Multi Channel Payments
											</div>
											<div className="text-slate-500 text-base leading-6 tracking-tight mt-2">
												Have more than 1 bank account or
												credit/debit card? Our platform
												is already integrated with many
												banks around the world, for
												easier payments!
											</div>
										</div>
									</div>
								</div>
								<div className="relative p- h-[32rem] bg-gray-100 rounded-2xl">
									<div className="flex items-center justify-center bg-[#8dd9ff] p-4 py-16 rounded-2xl">
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
												Scan with your phone’s camera or
												the Otto code app to pay and use
												multiple options
											</p>
										</div>
										<div className="absolute justify-between items-center flex w-5/6 border -top-8 bg-white p-2 rounded-full">
											<div className="flex items-center">
												<div className="h-10 w-16 rounded-full bg-red-900 overflow-hidden">
													<img
														src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957412/portrait-lesbian-couple-posing-together_2_kw0ar7.jpg"
														alt=""
														className="h-full w-full object-cover"
													/>
												</div>
												<p className="font-semibold ml-3">
													Kwasi Adwoa
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div
        ref={Ref}
        className=" bg-white h-[200vh]">
        <p>Gift Cards</p>
        <p className="text-[24px]">Supercharge your gifting </p>
    </div> */}
				</>
			}
		/>
	);
};

export default LandingPage;

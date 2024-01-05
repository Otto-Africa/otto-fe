import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/404.json";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";

const Page404 = () => {
	const navigate = useNavigate();
	return (
		<Layout
			body={
				<div className="bg-white">
					<div className="h-[70vh] md:h-[90vh] w-full items-center place-content-center flex flex-col">
						<Lottie
							className="h-80"
							animationData={animationData}
						/>
						<p className="text-[36px] font-semibold">
							Page not found
						</p>
						<div
							className={`text-[18px] ${"bg-[#1b3359] hover:bg-[#1e2d46] text-white"} text-[16px] mt-8 text-center cursor-pointer  px-8 py-4 rounded-md w-fit`}
							onClick={() => {
								navigate("/");
							}}>
							{" "}
							Back to home
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default Page404;

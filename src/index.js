import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import { paths } from "./utils/routes";
import Page404 from "./pages/404";
import Business from "./pages/why-otto/business";
import Personal from "./pages/why-otto/personal";
import QRPayments from "./pages/about/qr-payments";
import GiftCards from "./pages/about/gift-cards";
import Blog from "./pages/blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<Routes>
				<Route
					path={paths.LANDING_PAGE}
					element={<LandingPage />}
				/>
				<Route
					path={paths.WHY_OTTO_BUSINESS}
					element={<Business />}
				/>
				<Route
					path={paths.WHY_OTTO_PERSONAL}
					element={<Personal />}
				/>
				<Route
					path={paths.QR_PAYMENTS}
					element={<QRPayments />}
				/>
				<Route
					path={paths.GIFT_CARDS}
					element={<GiftCards />}
				/>
				<Route
					path={paths.BLOG}
					element={<Blog />}
				/>

				<Route
					path="*"
					element={<Page404 />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//Pages
const Login = React.lazy(() => import("./Login/login"));
const Signup = React.lazy(() => import("./Signup/signup"));
const ForgotPass = React.lazy(() => import("./ForgotPass/forgotPass"));
const VerifyCode = React.lazy(() => import("./VerifyCode/verifycode"));
const CreatePassword = React.lazy(() => import("./CreatePass/createpass"));
const Home = React.lazy(() => import("./Home/home"));
const Settings = React.lazy(() => import("./Settings/settings"));

const RouterComponent = () => {
	return (
		<Router>
			<Suspense fallback={<div />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route path="/auth/forgot-password" element={<ForgotPass />} />
					<Route path="/auth/verify-code" element={<VerifyCode />} />
					<Route path="/auth/create-password" element={<CreatePassword />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default RouterComponent;

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//Pages
const Login = React.lazy(() => import("./Login/login"));

const RouterComponent = () => {
	return (
		<Router>
			<Suspense fallback={<div />}>
				<Routes>
					<Route path="/auth/login" element={<Login />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default RouterComponent;

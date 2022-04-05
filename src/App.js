import React from "react";
import globalStyle from "./globalStyles";
import "./App.css";
import { Global, ThemeProvider } from "@emotion/react";
import { ErrorBoundary } from "react-error-boundary";
import { theme } from "./theme";

const ErrorFallback = ({ error }) => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
		</div>
	);
};

const myErrorHandler = (error) => {
	console.log(error);
};

function App() {
	console.log(theme);
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyle} />
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;

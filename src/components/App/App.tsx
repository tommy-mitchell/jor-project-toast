import React from "react";
import ToastProvider from "@components/ToastProvider";
import ToastPlayground from "@components/ToastPlayground";
import Footer from "@components/Footer";
import useEscape from "@hooks/useEscape";

export default function App() {
	useEscape(() => {
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	}, []);

	return (
		<>
			<ToastProvider>
				<ToastPlayground />
			</ToastProvider>
			<Footer />
		</>
	);
}

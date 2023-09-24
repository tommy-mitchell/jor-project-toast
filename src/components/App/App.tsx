import React from "react";
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
			<ToastPlayground />
			<Footer />
		</>
	);
}

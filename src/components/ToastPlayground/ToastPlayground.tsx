import React from "react";
import type { ToastVariant } from "@components/Toast";
import { ToastContext } from "@components/ToastProvider";
import ToastShelf from "@components/ToastShelf";
import useEscape from "@hooks/useEscape";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	// TODO: custom hooks
	// useObjectState
	// useDefaultState -> resetable

	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState<ToastVariant>("notice");

	const { addToast, emptyToasts } = React.useContext(ToastContext);

	useEscape(() => {
		emptyToasts();
	}, []);

	return (
		<div className={styles.wrapper}>
			<Header />
			<ToastShelf />
			<ControlArea
				message={message}
				setMessage={setMessage}
				variant={variant}
				setVariant={setVariant}
				onPopToast={() => {
					addToast(message, variant);
					setMessage("");
					setVariant("notice");
				}}
			/>
		</div>
	);
}

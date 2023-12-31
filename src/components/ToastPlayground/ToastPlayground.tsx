import React from "react";
import type { ToastVariant } from "@components/Toast";
import { ToastContext } from "@components/ToastProvider";
import ToastShelf from "@components/ToastShelf";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState<ToastVariant>("notice");

	const { addToast } = React.useContext(ToastContext);

	const variantSelectRef = React.useRef<HTMLDivElement>(null);

	return (
		<div className={styles.wrapper}>
			<Header />
			<ToastShelf />
			<ControlArea
				ref={variantSelectRef}
				message={message}
				setMessage={setMessage}
				variant={variant}
				setVariant={setVariant}
				onPopToast={() => {
					addToast(message, variant);
					setMessage("");
					setVariant("notice");
					variantSelectRef.current!.querySelector<HTMLInputElement>("#variant-notice")?.focus();
				}}
			/>
		</div>
	);
}

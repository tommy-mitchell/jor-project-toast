import React from "react";
import Toast, { type ToastVariant } from "@components/Toast";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	const [message, setMessage] = React.useState("16 photos have been uploaded");
	const [variant, setVariant] = React.useState<ToastVariant>("success");

	return (
		<div className={styles.wrapper}>
			<Header />
			<Toast variant={variant}>{message}</Toast>
			<ControlArea message={message} setMessage={setMessage} variant={variant} setVariant={setVariant} />
		</div>
	);
}

import React from "react";
import Toast, { type ToastVariant } from "@components/Toast";
import useToggle from "@hooks/use-toggle";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState<ToastVariant>("notice");
	const [isPreviewVisible, toggleIsPreviewVisible] = useToggle(false);

	return (
		<div className={styles.wrapper}>
			<Header />
			{isPreviewVisible && <Toast variant={variant} onClose={toggleIsPreviewVisible}>{message}</Toast>}
			<ControlArea
				message={message}
				setMessage={setMessage}
				variant={variant}
				setVariant={setVariant}
				onPopToast={toggleIsPreviewVisible}
			/>
		</div>
	);
}

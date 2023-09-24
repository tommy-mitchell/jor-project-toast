import React from "react";
import type { ToastVariant } from "@components/Toast";
import ToastShelf, { type ToastItem } from "@components/ToastShelf";
import useEscape from "@hooks/use-escape.ts";
import { generateUniqueId } from "@utils/id.ts";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	// TODO: custom hooks
	// useObjectState
	// useDefaultState -> resetable

	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState<ToastVariant>("notice");
	const [toasts, setToasts] = React.useState<ToastItem[]>([]);

	useEscape(() => {
		setToasts([]);
	}, [setToasts]);

	return (
		<div className={styles.wrapper}>
			<Header />
			<ToastShelf
				toasts={toasts}
				removeToast={(id) => {
					setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
				}}
			/>
			<ControlArea
				message={message}
				setMessage={setMessage}
				variant={variant}
				setVariant={setVariant}
				onPopToast={() => {
					setToasts((toasts) => [
						...toasts,
						{
							id: generateUniqueId(),
							variant,
							message,
						},
					]);
					setMessage("");
					setVariant("notice");
				}}
			/>
		</div>
	);
}

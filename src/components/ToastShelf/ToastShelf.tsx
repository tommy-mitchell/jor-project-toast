import React from "react";
import Toast from "@components/Toast";
import { ToastContext } from "@components/ToastProvider";
import styles from "./toast-shelf.module.scss";

export default function ToastShelf() {
	const { toasts, dismissToast } = React.useContext(ToastContext);

	return (
		<ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
			{toasts.map(({ id, variant, message }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast
						variant={variant}
						onDismiss={() => dismissToast(id)}
					>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

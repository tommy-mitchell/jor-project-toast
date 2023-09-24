import React from "react";
import Toast from "@components/Toast";
import styles from "./toast-shelf.module.scss";

export default function ToastShelf() {
	return (
		<ol className={styles.wrapper}>
			<li className={styles.toastWrapper}>
				<Toast variant="notice">Example notice toast</Toast>
			</li>
			<li className={styles.toastWrapper}>
				<Toast variant="error">Example error toast</Toast>
			</li>
		</ol>
	);
}

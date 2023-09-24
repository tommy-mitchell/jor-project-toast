import React from "react";
import Header from "./Header.tsx";
import ControlArea from "./ControlArea.tsx";
import styles from "./toast-playground.module.scss";

export default function ToastPlayground() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<ControlArea />
		</div>
	);
}

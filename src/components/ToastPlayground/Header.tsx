import React from "react";
import toastImage from "@assets/toast.png";
import styles from "./toast-playground.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<img alt="Cute toast mascot" src={toastImage} />
			<h1>Toast Playground</h1>
		</header>
	);
}

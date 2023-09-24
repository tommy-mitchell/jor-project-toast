import React from "react";
import Button from "@components/Button";
import toastImage from "@assets/toast.png";
import styles from "./toast-playground.module.scss";

const variants = ["notice", "warning", "success", "error"];

export default function ToastPlayground() {
	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src={toastImage} />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>Message</label>
					<div className={styles.inputWrapper}>
						<textarea id="message" className={styles.messageInput} />
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<label htmlFor="variant-notice">
							<input id="variant-notice" type="radio" name="variant" value="notice" />
							notice
						</label>

						{/* TODO Other Variant radio buttons here */}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

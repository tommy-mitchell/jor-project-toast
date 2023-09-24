import React from "react";
import clsx from "clsx";
import Button from "@components/Button";
import type { ToastVariant } from "@components/Toast";
import styles from "./toast-playground.module.scss";

const variants: ToastVariant[] = ["notice", "warning", "success", "error"];

export default function ControlArea() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState<ToastVariant>("notice");

	return (
		<div className={styles.controlsWrapper}>
			<div className={styles.row}>
				<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>Message</label>
				<div className={styles.inputWrapper}>
					<textarea
						id="message"
						className={styles.messageInput}
						value={message}
						onChange={(event) => setMessage(event.target.value)}
					/>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.label}>Variant</div>
				<div className={clsx(styles.inputWrapper, styles.radioWrapper)}>
					{variants.map(variantType => (
						<label key={variantType} htmlFor={`variant-${variantType}`}>
							<input
								id={`variant-${variantType}`}
								type="radio"
								name="variant"
								value={variantType}
								checked={variant === variantType}
								onChange={() => setVariant(variantType)}
							/>
							{variantType}
						</label>
					))}
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.label} />
				<div className={clsx(styles.inputWrapper, styles.radioWrapper)}>
					<Button>Pop Toast!</Button>
				</div>
			</div>
		</div>
	);
}

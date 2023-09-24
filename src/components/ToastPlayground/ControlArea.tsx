import React from "react";
import clsx from "clsx";
import Button from "@components/Button";
import type { ToastVariant } from "@components/Toast";
import styles from "./toast-playground.module.scss";

const variants: ToastVariant[] = ["notice", "warning", "success", "error"];

export type ControlAreaProps = Readonly<{
	message: string;
	setMessage: (message: string) => void;
	variant: ToastVariant;
	setVariant: (variant: ToastVariant) => void;
	onPopToast: () => void;
}>;

export default function ControlArea({ message, setMessage, variant, setVariant, onPopToast }: ControlAreaProps) {
	return (
		<form
			className={styles.controlArea}
			onSubmit={(event) => {
				event.preventDefault();
				onPopToast();
			}}
		>
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
					<Button type="submit" disabled={!message}>Pop Toast!</Button>
				</div>
			</div>
		</form>
	);
}

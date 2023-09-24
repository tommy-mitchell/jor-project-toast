import React from "react";
import clsx from "clsx";
import { match } from "ts-pattern";
import Button from "@components/Button";
import type { ToastVariant } from "@components/Toast";
import useKeydown from "@hooks/useKeydown";
import Row from "./Row.tsx";
import styles from "./toast-playground.module.scss";

const variants: ToastVariant[] = ["notice", "warning", "success", "error"];

export type ControlAreaProps = Readonly<{
	message: string;
	setMessage: (message: string) => void;
	variant: ToastVariant;
	setVariant: (variant: ToastVariant) => void;
	onPopToast: () => void;
}>;

function ControlArea(props: ControlAreaProps, forwardedRef: React.Ref<HTMLDivElement>) {
	const { message, setMessage, variant, setVariant, onPopToast } = props;
	const variantSelectRef = React.useRef<HTMLDivElement>(null);

	useKeydown((event) => {
		if (!variantSelectRef.current?.contains(document.activeElement)) {
			return;
		}

		const handleSetVariant = (nextVariant: ToastVariant) => {
			event.stopPropagation();
			setVariant(nextVariant);
			variantSelectRef.current!.querySelector<HTMLInputElement>(`#variant-${nextVariant}`)?.focus();
		};

		match(event.code)
			.with("KeyN", () => handleSetVariant("notice"))
			.with("KeyW", () => handleSetVariant("warning"))
			.with("KeyS", () => handleSetVariant("success"))
			.with("KeyE", () => handleSetVariant("error"))
			.otherwise(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
	}, []);

	return (
		<form
			className={styles.controlArea}
			onSubmit={(event) => {
				event.preventDefault();
				onPopToast();
			}}
		>
			<Row className={styles.inputRow}>
				<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>Message</label>
				<div className={styles.inputWrapper}>
					<input
						id="message"
						type="text"
						className={styles.messageInput}
						maxLength={30}
						value={message}
						onChange={(event) => setMessage(event.target.value)}
					/>
				</div>
			</Row>
			<Row className={styles.radioRow}>
				<div className={styles.label}>Variant</div>
				<div
					ref={(instance) => {
						if (typeof forwardedRef === "function") {
							forwardedRef(instance);
						} else if (forwardedRef !== null) {
							// @ts-expect-error: `current` is readonly
							forwardedRef.current = instance;
						}

						// @ts-expect-error: `current` is readonly
						variantSelectRef.current = instance;
					}}
					className={clsx(styles.inputWrapper, styles.radioWrapper)}
				>
					{variants.map(option => (
						<label key={option} htmlFor={`variant-${option}`}>
							<input
								id={`variant-${option}`}
								type="radio"
								name="variant"
								value={option}
								checked={variant === option}
								onChange={() => setVariant(option)}
							/>
							{option}
						</label>
					))}
				</div>
			</Row>
			<Row>
				<div className={styles.label} />
				<div className={clsx(styles.inputWrapper, styles.radioWrapper)}>
					<Button type="submit" disabled={!message}>Pop Toast!</Button>
				</div>
			</Row>
		</form>
	);
}

export default React.forwardRef(ControlArea);

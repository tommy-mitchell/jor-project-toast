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

export default function ControlArea({ message, setMessage, variant, setVariant, onPopToast }: ControlAreaProps) {
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
			<Row>
				<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>Message</label>
				<div className={styles.inputWrapper}>
					<textarea
						id="message"
						className={styles.messageInput}
						value={message}
						onChange={(event) => setMessage(event.target.value)}
					/>
				</div>
			</Row>
			<Row>
				<div className={styles.label}>Variant</div>
				<div ref={variantSelectRef} className={clsx(styles.inputWrapper, styles.radioWrapper)}>
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

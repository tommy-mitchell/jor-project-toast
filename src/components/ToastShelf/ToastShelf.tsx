import type { ReadonlyDeep } from "type-fest";
import React from "react";
import Toast, { type ToastProps } from "@components/Toast";
import styles from "./toast-shelf.module.scss";

export type ToastItem = {
	id: string;
	variant: ToastProps["variant"];
	message: string;
};

export type ToastShelfProps = ReadonlyDeep<{
	toasts: ToastItem[];
	removeToast: (id: string) => void;
}>;

export default function ToastShelf({ toasts, removeToast }: ToastShelfProps) {
	return (
		<ol className={styles.wrapper}>
			{toasts.map(({ id, variant, message }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast
						variant={variant}
						onClose={() => removeToast(id)}
					>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

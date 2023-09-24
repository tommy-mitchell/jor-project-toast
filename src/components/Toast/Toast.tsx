import React from "react";
import clsx from "clsx";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";
import VisuallyHidden from "@components/VisuallyHidden";
import styles from "./toast.module.scss";

const iconsByVariant = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
} as const;

export type ToastVariant = keyof typeof iconsByVariant;

export type ToastProps = Readonly<{
	variant: ToastVariant;
	children: string;
	onDismiss: () => void;
}>;

export default function Toast({ variant, children, onDismiss }: ToastProps) {
	const Icon = iconsByVariant[variant];

	return (
		<div className={clsx(styles.toast, styles[variant])}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{variant + " - "}</VisuallyHidden>
				{children}
			</p>
			<button
				type="button"
				aria-label="Dismiss message"
				aria-live="off"
				className={styles.closeButton}
				onClick={onDismiss}
			>
				<X size={24} />
			</button>
		</div>
	);
}

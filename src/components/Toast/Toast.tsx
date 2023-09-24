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
	onClose: () => void;
}>;

export default function Toast({ variant, children, onClose }: ToastProps) {
	const Icon = iconsByVariant[variant];

	return (
		<div className={clsx(styles.toast, styles[variant])}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button type="button" className={styles.closeButton} onClick={onClose}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

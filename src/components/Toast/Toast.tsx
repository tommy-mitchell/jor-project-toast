import React from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";
import VisuallyHidden from "@components/VisuallyHidden";
import styles from "./toast.module.scss";

const iconsByVariant = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
} as const;

type Variant = keyof typeof iconsByVariant;

type ToastProps = Readonly<{
	variant: Variant;
	children: string;
}>;

export default function Toast(_: ToastProps) {
	return (
		<div className={`${styles.toast} ${styles.notice}`}>
			<div className={styles.iconContainer}>
				<Info size={24} />
			</div>
			<p className={styles.content}>16 photos have been uploaded</p>
			<button type="button" className={styles.closeButton}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

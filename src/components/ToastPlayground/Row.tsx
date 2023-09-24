import React from "react";
import styles from "./toast-playground.module.scss";

type RowProps = Readonly<{
	children: React.ReactNode;
}>;

export default function Row({ children }: RowProps) {
	return <div className={styles.row}>{children}</div>;
}

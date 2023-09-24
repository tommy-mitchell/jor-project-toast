import React from "react";
import { type ClassNameProp, cn } from "@helpers/cn";
import styles from "./toast-playground.module.scss";

// dprint-ignore
export type RowProps = ClassNameProp & Readonly<{
	children: React.ReactNode;
}>;

export default function Row({ className, children }: RowProps) {
	return <div className={cn(className, styles.row)}>{children}</div>;
}

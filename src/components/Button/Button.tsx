import React from "react";
import { cn, type ComponentPropsWithClassName } from "@helpers/cn";
import styles from "./button.module.scss";

type ButtonProps = ComponentPropsWithClassName<"button">;

export default function Button({ className, ...props }: ButtonProps) {
	return <button type="button" className={cn(className, styles.button)} {...props} />;
}

import React from "react";
import styles from "./visually-hidden.module.scss";

// dprint-ignore
type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & Readonly<{
	children?: string;
}>;

export default function VisuallyHidden({ children, ...props }: VisuallyHiddenProps) {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		if (import.meta.env.DEV) {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Alt") {
					setForceShow(true);
				}
			};

			const handleKeyUp = () => {
				setForceShow(false);
			};

			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("keyup", handleKeyUp);

			return () => {
				window.removeEventListener("keydown", handleKeyDown);
				window.removeEventListener("keyup", handleKeyUp);
			};
		}

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {};
	}, []);

	if (forceShow) {
		return <span className={styles.show}>{children}</span>;
	}

	return <span className={styles.visuallyHidden} {...props}>{children}</span>;
}

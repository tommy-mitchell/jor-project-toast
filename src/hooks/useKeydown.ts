import React from "react";

export default function useKeydown(callback: (event: KeyboardEvent) => void, deps: React.DependencyList) {
	React.useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			callback(event);
		};

		document.addEventListener("keydown", handleKeydown);
		return () => document.removeEventListener("keydown", handleKeydown);
	}, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

import useKeydown from "./use-keydown.ts";

export default function useEscape(callback: () => void, deps: React.DependencyList) {
	useKeydown((event) => {
		if (event.key === "Escape") {
			event.stopPropagation();
			callback();
		}
	}, deps);
}

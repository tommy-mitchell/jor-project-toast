import React from "react";

type ResettableState<T> = [T, React.Dispatch<React.SetStateAction<T>>, () => void];

export default function useResettableState<T>(initialState: T): ResettableState<T> {
	const [state, setState] = React.useState(initialState);

	const resetState = React.useCallback(() => {
		setState(initialState);
	}, [initialState]);

	return [state, setState, resetState];
}

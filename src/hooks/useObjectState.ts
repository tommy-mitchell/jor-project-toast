import React from "react";
import type { UnknownRecord } from "type-fest";
import useResettableState from "./useResettableState.ts";

type UpdateStateAction<StateType> = Partial<StateType> | ((state: StateType) => Partial<StateType>);
type UpdateState<StateType> = React.Dispatch<UpdateStateAction<StateType>>;

type ObjectState<StateType> = [
	state: StateType,
	setState: UpdateState<StateType>,
	resetState: () => void,
];

export default function useObjectState<StateType extends UnknownRecord>(
	initialState: StateType,
): ObjectState<StateType> {
	// TODO: map fields to individual setState functions
	const [state, setState, resetState] = useResettableState(initialState);

	const updateState: UpdateState<StateType> = React.useCallback((partialState) => {
		setState((previousState) => {
			const updatedState = typeof partialState === "function"
				? partialState(previousState)
				: partialState;

			return {
				...previousState,
				...updatedState,
			};
		});
	}, [setState]);

	return [state, updateState, resetState];
}

/*

Attempt:

const [{ message, variant }, setPlayground, resetPlayground] = useObjectState<ToastState>({
	message: "",
	variant: "notice",
});

const setMessage = React.useCallback((message: string) => {
	setPlayground({ message });
}, [setPlayground]);

const setVariant = React.useCallback((variant: ToastState["variant"]) => {
	setPlayground({ variant });
}, [setPlayground]);

*/

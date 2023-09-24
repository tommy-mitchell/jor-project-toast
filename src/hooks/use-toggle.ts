import React from "react";

type InitialValue = boolean | (() => boolean);

export default function useToggle(initialValue: InitialValue = false) {
	const [value, setValue] = React.useState(initialValue);

	function toggleValue() {
		setValue((currentValue) => !currentValue);
	}

	return [value, toggleValue] as const;
}

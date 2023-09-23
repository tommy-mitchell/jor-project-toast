import * as React from "react";
import type { EmptyObject } from "type-fest";
import type { PropsWithClassName } from "./cn.ts";

export function forwardRef<
	ElementType extends React.ElementType,
	CustomPropsType extends Record<string, unknown> = EmptyObject,
	ElementRefType = React.ElementRef<ElementType>,
	PropsType = PropsWithClassName<CustomPropsType & React.ComponentPropsWithoutRef<ElementType>>,
>(
	render: React.ForwardRefRenderFunction<ElementRefType, PropsType>,
) {
	return React.forwardRef<ElementRefType, PropsType>(render);
}

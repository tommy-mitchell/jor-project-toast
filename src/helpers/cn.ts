import { type ClassValue, clsx } from "clsx";
import { ensureArray } from "@utils/ensure-array";

export const cn = (input: ClassValue | ClassValue[], ...inputs: ClassValue[]) => (
	clsx(ensureArray(input), ...inputs)
);

export type ClassName = ClassValue | ClassValue[];

export type ClassNameProp = Readonly<{
	className?: ClassName;
}>;

export type PropsWithClassName<PropsType> = Omit<PropsType, "className"> & ClassNameProp;

export type ComponentPropsWithClassName<ComponentType extends React.ElementType> = PropsWithClassName<
	React.ComponentPropsWithoutRef<ComponentType>
>;

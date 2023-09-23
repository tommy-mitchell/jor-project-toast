import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ensureArray } from "@utils/ensure-array";

export const cn = (input: ClassValue | ClassValue[], ...inputs: ClassValue[]) => (
	twMerge(clsx(ensureArray(input), ...inputs))
);

export const cnx = (base: string, input: ClassValue | ClassValue[], ...inputs: ClassValue[]) => (
	twMerge(base, clsx(ensureArray(input), ...inputs))
);

export type ClassName = ClassValue | ClassValue[];

export type ClassNameProp = Readonly<{
	className?: ClassName;
}>;

export type PropsWithClassName<PropsType> = Omit<PropsType, "className"> & ClassNameProp;

import React from "react";
import type { ToastProps } from "@components/Toast";
import useEscape from "@hooks/useEscape";
import { generateUniqueId } from "@utils/id";

export type ToastState = {
	variant: ToastProps["variant"];
	message: string;
};

export type ToastItem = ToastState & {
	id: string;
};

type ToastContextValue = Readonly<{
	toasts: ToastItem[];
	addToast: (message: string, variant: ToastProps["variant"]) => void;
	dismissToast: (id: string) => void;
}>;

export const ToastContext = React.createContext<ToastContextValue>({} as ToastContextValue);

type ToastProviderProps = Readonly<{
	children: React.ReactNode;
}>;

export default function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = React.useState<ToastItem[]>([]);

	useEscape(() => {
		setToasts([]);
	}, []);

	const value = React.useMemo<ToastContextValue>(() => ({
		toasts,
		addToast: (message, variant) => {
			setToasts((toasts) => [
				...toasts,
				{ id: generateUniqueId(), variant, message },
			]);
		},
		dismissToast: (id) => {
			setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
		},
	}), [toasts, setToasts]);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

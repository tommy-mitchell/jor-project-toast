import React from "react";
import type { ToastProps } from "@components/Toast";
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
	emptyToasts: () => void;
}>;

export const ToastContext = React.createContext<ToastContextValue>({} as ToastContextValue);

type ToastProviderProps = Readonly<{
	children: React.ReactNode;
}>;

export default function ToastProvider({ children }: ToastProviderProps) {
	const [toasts, setToasts] = React.useState<ToastItem[]>([]);

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
		emptyToasts: () => {
			setToasts([]);
		},
	}), [toasts, setToasts]);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

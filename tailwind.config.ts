import type { Config } from "tailwindcss";
import { hocus, varColors } from "./tailwind.plugins.ts";

export default {
	content: [
		"./index.html",
		"./src/**/*.tsx",
	],
	theme: {
		extend: {
			// TODO: add as variant to get min-h, max-h
			height: {
				"screen-d": "100dvh",
				"screen-s": "100svh",
				"screen-l": "100lvh",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [
		hocus,
		varColors,
	],
} satisfies Config;

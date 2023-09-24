import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import supportedBrowsers from "vite-plugin-browserslist-useragent";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
	base: "/jor-project-toast/",
	css: {
		modules: {
			localsConvention: "camelCase",
		},
	},
	plugins: [
		react(),
		reactClickToComponent(),
		checker({
			typescript: true,
			overlay: {
				initialIsOpen: false,
				position: "br",
			},
		}),
		tsconfigPaths(),
		supportedBrowsers(),
		sassDts({
			sourceDir: fileURLToPath(new URL("src", import.meta.url)),
		}),
	],
});

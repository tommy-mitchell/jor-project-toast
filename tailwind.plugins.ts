import plugin from "tailwindcss/plugin";

export const hocus = plugin(({ addVariant }) => {
	addVariant("hocus", ["&:hover", "&:focus"]);
	addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
	addVariant("group-hocus-visible", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);
});

// https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574?permalink_comment_id=4682185#gistcomment-4682185
export const varColors = plugin(({ addBase, theme }) => {
	const colors: Record<string, string> = theme("colors");
	const variables: Record<string, string> = {};

	for (const [color, hex] of Object.entries(colors)) {
		variables[`--tw-color-${color}`] = hex;
	}

	addBase({
		// eslint-disable-next-line @typescript-eslint/naming-convention
		":root": variables,
	});
});

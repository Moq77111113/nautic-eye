import tw from "@nautic-eye/ui/tailwind.config";
import type { Config } from "tailwindcss";

const config = {
	presets: [tw],
	content: ["./app/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;

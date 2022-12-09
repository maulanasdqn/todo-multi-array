import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Unocss from "@unocss/vite";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()],
    }),
  ],
});

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-50
        bg-slate-900 dark:bg-slate-800
        text-green-500
        p-3 rounded-full
        shadow-lg
        hover:scale-110 transition
      "
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

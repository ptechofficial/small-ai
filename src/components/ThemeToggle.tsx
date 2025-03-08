
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:bg-transparent hover:text-smallai-purple"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-smallai-purple" />
      ) : (
        <Moon className="h-5 w-5 text-smallai-purple" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

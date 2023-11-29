"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeMenuItems } from "@/constants/constants";
import { useTheme } from "@/context/ThemeProvider";

export function ThemeDropdownMenu() {
  const [systemTheme, setSystemTheme] = React.useState("light");
  const [position, setPosition] = React.useState("bottom");
  const { mode, setMode } = useTheme();

  const ThemeChangeHandler = (theme: string) => {
    localStorage.setItem("theme", theme);
    setMode(theme);
  };

  React.useEffect(() => {
    const isThemeDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (isThemeDarkMode) {
      setSystemTheme("dark");
    } else {
      setSystemTheme("light");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="dark:bg-white">
          {mode === "light" ? (
            <FontAwesomeIcon icon={faMoon} className="text-lg" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-lg" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42 mr-10">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {ThemeMenuItems.map((item, idx) => (
            <DropdownMenuItem
              key={idx}
              className="cursor-pointer"
              onClick={() =>
                ThemeChangeHandler(
                  item.theme === "System Mode" ? systemTheme : item.theme
                )
              }
            >
              <span>
                <FontAwesomeIcon icon={item.icon} className="text-lg mr-2" />
              </span>
              <span className="ml-2 text-lg font-semibold">{item.text}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

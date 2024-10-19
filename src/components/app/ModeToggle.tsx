"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Select onValueChange={(val) => setTheme(val)} defaultValue={theme}>
      <SelectTrigger className="text-xs">
        <SelectValue defaultValue={theme} />
      </SelectTrigger>
      <SelectContent className="!text-xs">
        <SelectItem value="light" onClick={() => setTheme("light")}>
          Claro
        </SelectItem>
        <SelectItem value="dark" onClick={() => setTheme("dark")}>
          Oscuro
        </SelectItem>
        <SelectItem value="system" onClick={() => setTheme("system")}>
          Sistema
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

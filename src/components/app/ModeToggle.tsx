"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleChange = useCallback(
    (val: string) => {
      setTheme(val);
    },
    [setTheme]
  );

  return (
    <Select onValueChange={handleChange} defaultValue={theme || "system"}>
      <SelectTrigger className="text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="!text-xs">
        <SelectItem value="light">Claro</SelectItem>
        <SelectItem value="dark">Oscuro</SelectItem>
        <SelectItem value="system">Sistema</SelectItem>
      </SelectContent>
    </Select>
  );
}

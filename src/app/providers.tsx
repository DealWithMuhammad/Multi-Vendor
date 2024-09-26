"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MantineProvider>{children}</MantineProvider>
    </ThemeProvider>
  );
};

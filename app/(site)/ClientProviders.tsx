// app/components/ClientProviders.tsx
"use client";

import { ThemeProvider } from "next-themes";
import ToasterContext from "../context/ToastContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <ToasterContext />
      {children}
    </ThemeProvider>
  );
}

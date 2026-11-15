import type { ReactNode } from "react";
import { PortalLayout } from "@/components/portal-layout";

export default function LicenseApplicationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <PortalLayout>{children}</PortalLayout>;
}
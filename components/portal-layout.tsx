"use client";
import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { useSession } from "@/stores/session";

export function PortalLayout({ children }: { children: ReactNode }) {
  // const {user} = useSession()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger className="hover:bg-sidebar text-primary cursor-pointer" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <h1 className="lg:text-2xl text-lg text-green-900">
              National Horticulture Traceability System
            </h1>
          </div>
        </header>
        <main className="min-h-screen flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

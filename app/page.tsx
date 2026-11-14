import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { greeting } from "@/lib/time";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger className='hover:bg-sidebar text-primary cursor-pointer' />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <h1 className="lg:text-2xl text-lg text-green-900">
              National Horticulture Traceability System
            </h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="rounded-xl bg-linear-to-r from-green-900 to-green-700 aspect-video h-1/8 flex items-center">
            <div className="p-4">
              <h1 className="text-3xl font-bold text-white">
                {`${greeting()}`}, Test User.
              </h1>
              <p className="text-lg font-light text-slate-400">
                Let's pick up where you left off.
              </p>
            </div>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-primary/10 p-4 flex flex-col items-center justify-center text-green-900">
              <h1 className="text-4xl font-bold">5</h1>
              <p className="text-2xl">licenses</p>
            </div>
            <div className="aspect-video rounded-xl bg-primary/10 p-4 flex flex-col items-center justify-center text-green-900">
              <h1 className="text-4xl font-bold">5</h1>
              <p className="text-2xl text-green-900">pending renewals</p>
            </div>
            <div className="aspect-video rounded-xl bg-primary/10 p-4 flex flex-col items-center justify-center text-green-900">
              <h1 className="text-4xl font-bold">2</h1>
              <p className="text-2xl">expired certificates</p>
            </div>
          </div>
          <div className="min-h-screen flex-1  md:min-h-min grid md:grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-xl" />
            <div className="bg-primary/10 rounded-xl" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

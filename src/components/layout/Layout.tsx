import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <header className="sticky top-0 z-40 flex h-14 items-center border-b bg-card px-4 shadow-sm">
            <SidebarTrigger />
            <div className="flex items-center gap-2 ml-4">
              <h1 className="text-lg font-semibold text-foreground">Hospital Management System</h1>
            </div>
          </header>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
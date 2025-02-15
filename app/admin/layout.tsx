import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Settings,
  ShoppingBag,
  Bell,
  ShieldAlert,
  type LucideIcon,
  PlusCircle,
  List,
  BarChart,
  Award,
} from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { NotificationDrawer } from "@/components/notification-drawer"
import User_Role_Check from "@/actions/User_Role_Check"

interface AdminLayoutProps {
  children: ReactNode
}

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
  subItems?: NavItem[]
}

const navigationItems: NavItem[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    href: "/admin/projects",
    label: "Projects",
    icon: ShoppingBag,
    subItems: [
      {
        href: "/admin/projects/create",
        label: "Create Project",
        icon: PlusCircle,
      },
      {
        href: "/admin/projects/list",
        label: "Project List",
        icon: List,
      },
      {
        href: "/admin/projects/analytics",
        label: "Project Analytics",
        icon: BarChart,
      },
    ],
  },
  {
    href: "/admin/certificates",
    label: "Certificates",
    icon: Award,
    subItems: [
      {
        href: "/admin/certificates/create",
        label: "Add Certificate",
        icon: PlusCircle,
      },
      {
        href: "/admin/certificates",
        label: "Certificate List",
        icon: List,
      },
    ],
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
]

const NavLink = ({ href, label, icon: Icon, subItems }: NavItem) => (
  <li>
    <Link
      href={href}
      className="flex items-center p-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Link>
    {subItems && (
      <ul className="ml-6 mt-2 space-y-1">
        {subItems.map((subItem) => (
          <NavLink key={subItem.href} {...subItem} />
        ))}
      </ul>
    )}
  </li>
)

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await User_Role_Check()

  if (!session.success || !session.user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 p-8">
          <ShieldAlert className="h-16 w-16 mx-auto text-muted-foreground" />
          <h1 className="text-2xl font-bold">Access Restricted</h1>
          <p className="text-muted-foreground">You don't have permission to view this page.</p>
          <Link href="/" className="inline-block mt-4 text-sm text-primary hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen bg-background">
        <aside className="w-64 border-r border-border">
          <nav className="p-4 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Admin</h2>
              <ModeToggle />
            </div>

            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto">
          <header className="border-b border-border p-4 flex justify-between items-center sticky top-0 bg-background z-10">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <NotificationDrawer />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}


import { Calendar, Home, Inbox, Search, Settings, ChevronDown } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
  {
    title: "Billers",
    url: "#",
    icon: Home,
    subItems: [
      { title: "View Billers", url: "#" },
      { title: "Add Biller", url: "#" }
    ]
  },
  {
    title: "Invoices",
    url: "#",
    icon: Inbox,
    subItems: [
      { title: "View Invoices", url: "#" },
      { title: "Generate Invoice", url: "#" }
    ]
  },
  {
    title: "Disputes",
    url: "#",
    icon: Calendar,
    subItems: [
      { title: "Open Disputes", url: "#" },
      { title: "Resolve Disputes", url: "#" }
    ]
  },
  {
    title: "Users",
    url: "#",
    icon: Search,
    subItems: [
      { title: "Manage Users", url: "#" },
      { title: "Add User", url: "#" }
    ]
  },
  {
    title: "Reports",
    url: "#",
    icon: Settings,
    subItems: [
      { title: "View Reports", url: "#" },
      { title: "Generate Reports", url: "#" }
    ]
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Developer Portal</SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <Collapsible key={item.title} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 text-lg">
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild>
                          <a href={subItem.url}>
                            <span className='text-base'>{subItem.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

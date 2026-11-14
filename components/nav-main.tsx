"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function NavMain({
  items,
  navName,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  navName: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-bold">{navName}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
            render={<SidebarMenuItem />}
          >
            <CollapsibleTrigger
              render={<SidebarMenuButton tooltip={item.title} />}
              className={
                item.isActive
                  ? "bg-green-900 text-white"
                  : "hover:bg-green-900 hover:text-white"
              }
            >
              {item.icon}
              <span>{item.title}</span>
              {item.items && (
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90"
                />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton
                      className={
                        item.isActive
                          ? "bg-green-900 text-white"
                          : "hover:bg-green-900 hover:text-white"
                      }
                      render={<a href={subItem.url} />}
                    >
                      <span>{subItem.title}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

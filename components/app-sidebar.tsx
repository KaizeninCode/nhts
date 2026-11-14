"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LayoutBottomIcon,
  AudioWave01Icon,
  CommandIcon,
  ComputerTerminalIcon,
  RoboticIcon,
  BookOpen02Icon,
  Settings05Icon,
  CropIcon,
  PieChartIcon,
  MapsIcon,
  FolderManagementIcon,
  Home04Icon,
  AddInvoiceIcon,
  LicenseIcon,
  Certificate01Icon,
  BadgeCheckIcon,
  Audit01Icon,
  FileVerifiedIcon,
  FileBadgeIcon,
  DeliveryReturn02Icon,
  IdNotVerifiedIcon,
} from "@hugeicons/core-free-icons";

// This is sample data.
const data = {
  user: {
    name: "Test User",
    email: "example@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <HugeiconsIcon icon={AudioWave01Icon} strokeWidth={2} />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <HugeiconsIcon icon={CommandIcon} strokeWidth={2} />,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: <HugeiconsIcon icon={Home04Icon} strokeWidth={2} />,
      // isActive: true,
      
    },
    {
      title: "Farm Management",
      url: "/farm-management",
      icon: <HugeiconsIcon icon={FolderManagementIcon} strokeWidth={2} />,
      items: [
        {
          title: "Farmer",
          url: "/farm-management/farmer",
        },
        {
          title: "Site Selection",
          url: "/farm-management/site-selection",
        },
        {
          title: "Land Preparation",
          url: "/farm-management/land-preparation",
        },
        {
          title: "Planting",
          url: "/farm-management/planting",
        },
        {
          title: "Scouting",
          url: "/farm-management/scouting",
        },
        {
          title: "Spraying",
          url: "/farm-management/spraying",
        },
        {
          title: "Harvest",
          url: "/farm-management/harvest",
        },
        {
          title: "Sorting",
          url: "/farm-management/sorting",
        },
        {
          title: "Incoming Shipment",
          url: "/farm-management/incoming-shipment",
        },
        {
          title: "Packing Operations",
          url: "/farm-management/packing-operations",
        },
        {
          title: "Shipment",
          url: "/farm-management/shipment",
        },
        {
          title: "Recalling",
          url: "/farm-management/recalling",
        },
        {
          title: "Post Recall Inspection",
          url: "/farm-management/post-recall-inspection",
        },
        {
          title: "Product Transfer",
          url: "/farm-management/product-transfer",
        },
        {
          title: "Product Reception",
          url: "/farm-management/product-reception",
        },
        
      ],
    },
    {
      title: "Registration",
      url: "#",
      icon: <HugeiconsIcon icon={AddInvoiceIcon} strokeWidth={2} />,
      items: [
        {
          title: "Packhouse/WareHouse/Store",
          url: "#",
        },
        {
          title: "Packhouse Lease",
          url: "#",
        },
        {
          title: "Conference Space",
          url: "#",
        },
        {
          title: "Packhouse Change",
          url: "#",
        },
        {
          title: "Plantation Grower Association",
          url: "#",
        },
      ],
    },
    {
      title: "Licenses",
      url: "#",
      icon: <HugeiconsIcon icon={LicenseIcon} strokeWidth={2} />,
      items: [
        {
          title: "Export",
          url: "#",
        },
        
        {
          title: "Import",
          url: "#",
        },
        
      ],
    },

    {
      title: "Certificates",
      url: "#",
      icon: <HugeiconsIcon icon={Certificate01Icon} strokeWidth={2} />,
      items: [
        {
          title: "Nursery Certificate",
          url: "#",
        },
        {
          title: "Marketing Agent",
          url: "#",
        },
        {
          title: "Clearing & Forwarding Agent",
          url: "#",
        },
        {
          title: "Ship Chandler",
          url: "#",
        },
      ],
    },

    {
      title: "Permits",
      url: "#",
      icon: <HugeiconsIcon icon={BadgeCheckIcon} strokeWidth={2} />,
      items: [
        {
          title: "Export",
          url: "#",
          
        },
        {
          title: "Import",
          url: "#",
          
        },
        
      ],
    },

    {
      title: "Inspection",
      url: "#",
      icon: <HugeiconsIcon icon={Audit01Icon} strokeWidth={2} />,
      items: [
        {
          title: "Fruit Inspection",
          url: "#",
        }
        
      ],
    },
    {
      title: "License Renewals",
      url: "#",
      icon: <HugeiconsIcon icon={FileVerifiedIcon} strokeWidth={2} />,
      items: [
        {
          title: "Export License Renewal",
          url: "#",
        },
        {
          title: "Import License Renewal",
          url: "#",
        },
        
      ],
    },
    {
      title: "Certificate Renewals",
      url: "#",
      icon: <HugeiconsIcon icon={FileBadgeIcon} strokeWidth={2} />,
      items: [
        {
          title: "Nursery Certificate",
          url: "#",
        },
        {
          title: "Marketing Agent",
          url: "#",
        },
        {
          title: "Clearing & Forwarding Agent",
          url: "#",
        },
        {
          title: "Ship Chandlers",
          url: "#",
        },
        
      ],
    },
    {
      title: "Returns",
      url: "#",
      icon: <HugeiconsIcon icon={DeliveryReturn02Icon} strokeWidth={2} />,
      items: [
        {
          title: "Monthly Returns",
          url: "#",
        },
        
        
      ],
    },
    
  ],
  reports: [
    {
      title: "Farm Management",
      url: "#",
      icon: <HugeiconsIcon icon={FolderManagementIcon} strokeWidth={2} />,
      items: [
        {
          title: "Farmer Module",
          url: "#",
        },
        {
          title: "Site Selection",
          url: "#",
        },
        {
          title: "Land Preparation",
          url: "#",
        },
        {
          title: "Planting",
          url: "#",
        },
        {
          title: "Scouting",
          url: "#",
        },
        {
          title: "Spraying",
          url: "#",
        },
        {
          title: "Harvest",
          url: "#",
        },
        {
          title: "Sorting",
          url: "#",
        },
        {
          title: "Incoming Shipment",
          url: "#",
        },
        {
          title: "Packing Operations",
          url: "#",
        },
        {
          title: "Shipment",
          url: "#",
        },
        {
          title: "Recalling",
          url: "#",
        },
        {
          title: "Post Recall Inspection",
          url: "#",
        },
        {
          title: "Product Transfer",
          url: "#",
        },
        {
          title: "Product Reception",
          url: "#",
        },
        
      ],
    },
    {
      title: "Registration",
      url: "#",
      icon: <HugeiconsIcon icon={AddInvoiceIcon} strokeWidth={2} />,
      items: [
        {
          title: "Packhouse/WareHouse/Store",
          url: "#",
        },
        {
          title: "Packhouse Lease",
          url: "#",
        },
        {
          title: "Conference Space",
          url: "#",
        },
        {
          title: "Packhouse Change",
          url: "#",
        },
        {
          title: "Plantation Grower Association",
          url: "#",
        },
      ],
    },
    {
      title: "Licenses",
      url: "#",
      icon: <HugeiconsIcon icon={LicenseIcon} strokeWidth={2} />,
      items: [
        {
          title: "Applications",
          url: "#",
        },
        {
          title: "Application Reports",
          url: "#",
        },
        {
          title: "Renewals",
          url: "#",
        },
        {
          title: "Renewal Reports",
          url: "#",
        },
      ],
    },

    {
      title: "Certificates",
      url: "#",
      icon: <HugeiconsIcon icon={Certificate01Icon} strokeWidth={2} />,
      items: [
        {
          title: "Registration",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
        // {
        //   title: "Tutorials",
        //   url: "#",
        // },
        // {
        //   title: "Changelog",
        //   url: "#",
        // },
      ],
    },

    {
      title: "Permits",
      url: "#",
      icon: <HugeiconsIcon icon={BadgeCheckIcon} strokeWidth={2} />,
      items: [
        {
          title: "Export",
          url: "#",
          items: [
            {
              title: "Apply",
              url: "#",
            },
            {
              title: "Report",
              url: "#",
            },
          ],
        },
        {
          title: "Import",
          url: "#",
          items: [
            {
              title: "Apply",
              url: "#",
            },
            {
              title: "Report",
              url: "#",
            },
          ],
        },
        
      ],
    },

    {
      title: "Inspection",
      url: "#",
      icon: <HugeiconsIcon icon={Audit01Icon} strokeWidth={2} />,
      items: [
        {
          title: "Fruit Inspection Request",
          url: "#",
        }
        
      ],
    },
    {
      title: "License Renewals",
      url: "#",
      icon: <HugeiconsIcon icon={FileVerifiedIcon} strokeWidth={2} />,
      items: [
        {
          title: "Export License Renewal",
          url: "#",
        },
        {
          title: "Import License Renewal",
          url: "#",
        },
        
      ],
    },
    {
      title: "Certificate Renewals",
      url: "#",
      icon: <HugeiconsIcon icon={FileBadgeIcon} strokeWidth={2} />,
      items: [
        {
          title: "Nursery Certificate",
          url: "#",
        },
        {
          title: "Marketing Agent",
          url: "#",
        },
        {
          title: "Clearing & Forwarding Agent",
          url: "#",
        },
        {
          title: "Ship Chandlers",
          url: "#",
        },
        
      ],
    },
    {
      title: "Returns",
      url: "#",
      icon: <HugeiconsIcon icon={DeliveryReturn02Icon} strokeWidth={2} />,
      items: [
        {
          title: "Monthly Returns",
          url: "#",
        },
        
        
      ],
    },
    {
      title: "Failed Report",
      url: "#",
      icon: <HugeiconsIcon icon={IdNotVerifiedIcon} strokeWidth={2} />,
      items: [
        {
          title: "Failed Shipment",
          url: "#",
        },
        {
          title: "Failed Farmer Report",
          url: "#",
        },
        {
          title: "Failed Incoming Shipment",
          url: "#",
        },
        
        
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain navName = 'MODULES' items={data.navMain} />
        <NavMain navName='REPORTS' items={data.reports} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

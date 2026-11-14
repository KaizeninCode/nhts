"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { greeting } from "@/lib/time";
import { Separator } from "@/components/ui/separator";

import * as React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const invoices = [
  {
    name: "John Kamau",
    code: "NHTS-4401-2026",
    phone: "+254711223344",
    email: "johnkamau@example.email",
    category: "Category 1",
    ownership: "Ownership 1",
  },
  {
    name: "Peter Kiprono",
    code: "NHTS-4402-2026",
    phone: "+254722334455",
    email: "peterkiprono@example.email",
    category: "Category 2",
    ownership: "Ownership 2",
  },
  {
    name: "Stephen Olunga",
    code: "NHTS-4403-2026",
    phone: "+254733445566",
    email: "stephenolunga@example.email",
    category: "Category 1",
    ownership: "Ownership 1",
  },
  {
    name: "Abdullahi Abdallah",
    code: "NHTS-4404-2026",
    phone: "+254744556677",
    email: "abdullahiabdallah@example.email",
    category: "Category 2",
    ownership: "Ownership 2",
  },
  {
    name: "John James Oloo",
    code: "NHTS-4405-2026",
    phone: "+254755667788",
    email: "jjoloo@example.email",
    category: "Category 1",
    ownership: "Ownership 1",
  },
  {
    name: "Mercy Muthoni",
    code: "NHTS-4406-2026",
    phone: "+254766778899",
    email: "mercymuthoni@example.email",
    category: "Category 2",
    ownership: "Ownership 2",
  },
  {
    name: "Peris Anyango",
    code: "NHTS-4407-2026",
    phone: "+254777889900",
    email: "perisanyango@example.email",
    category: "Category 2",
    ownership: "Ownership 1",
  },
];

const FarmersPage = () => {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="rounded-xl bg-linear-to-r from-green-900 to-green-700 h-1/8 flex items-center">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-white">
              FARMER MANAGEMENT MODULE
            </h1>
            {/* <p className="text-lg font-light text-slate-400">
              Let's pick up where you left off.
            </p> */}
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

        <div className="flex justify-between items-center">
          <Sheet>
            <SheetTrigger
              render={
                <button className="px-2 py-1 rounded-md text-white bg-green-900">
                  Create New
                </button>
              }
            />
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Create a New Farmer Record</SheetTitle>
                <SheetDescription>
                  Create a new farmer record here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-auto">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" className="rounded-lg"/>
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Email</Label>
                  <Input id="sheet-demo-username" className="rounded-lg"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Phone</Label>
                  <Input id="sheet-demo-username" className="rounded-lg"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Category</Label>
                  <Input id="sheet-demo-username" className="rounded-lg"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Ownership</Label>
                  <Input id="sheet-demo-username" className="rounded-lg"/>
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Create</Button>
                <SheetClose render={<Button variant="outline">Close</Button>} />
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <input
            type="text"
            className="rounded-md px-2 py-1 bg-primary/10 border w-1/3"
            placeholder="Search"
          />
        </div>

        <Table>
          {/* <TableCaption>{t.caption}</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Ownership</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.name}>
                <TableCell>{invoice.name}</TableCell>
                <TableCell>{invoice.code}</TableCell>
                <TableCell>{invoice.phone}</TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell>{invoice.category}</TableCell>
                <TableCell>{invoice.ownership}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FarmersPage;

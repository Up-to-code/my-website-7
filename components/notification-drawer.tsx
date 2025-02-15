"use client"
import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function NotificationDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Open notifications</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>View your recent notifications here.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="border-b pb-2">
            <h3 className="font-medium">New user registered</h3>
            <p className="text-sm text-muted-foreground">John Doe just signed up.</p>
          </div>
          <div className="border-b pb-2">
            <h3 className="font-medium">Order completed</h3>
            <p className="text-sm text-muted-foreground">Order #1234 has been fulfilled.</p>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


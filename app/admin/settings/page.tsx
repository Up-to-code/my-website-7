"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "My Awesome Site",
    adminEmail: "admin@example.com",
    darkMode: false,
    notifications: true,
    maintenanceMode: false,
    siteDescription: "Welcome to our amazing website!",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggle = (name: string) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name as keyof typeof settings] }))
  }

  const saveSettings = () => {
    // Here you would typically save the settings to your backend
    console.log("Saving settings:", settings)
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="site-name">Site Name</Label>
          <Input id="site-name" name="siteName" value={settings.siteName} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="admin-email">Admin Email</Label>
          <Input id="admin-email" name="adminEmail" type="email" value={settings.adminEmail} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="site-description">Site Description</Label>
          <Textarea
            id="site-description"
            name="siteDescription"
            value={settings.siteDescription}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
          <Label htmlFor="dark-mode">Enable Dark Mode</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="notifications"
            checked={settings.notifications}
            onCheckedChange={() => handleToggle("notifications")}
          />
          <Label htmlFor="notifications">Enable Email Notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="maintenance-mode"
            checked={settings.maintenanceMode}
            onCheckedChange={() => handleToggle("maintenanceMode")}
          />
          <Label htmlFor="maintenance-mode">Enable Maintenance Mode</Label>
        </div>
        <Button onClick={saveSettings}>Save Settings</Button>
      </div>
    </div>
  )
}


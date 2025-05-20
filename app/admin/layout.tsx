"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { LayoutDashboard, ImageIcon, Scissors, Users, Calendar, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden p-4 border-b flex items-center justify-between bg-background">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5" />
          <span className="font-bold">CHROMA Admin</span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Sidebar */}
      <div
        id="admin-sidebar"
        className="w-64 border-r bg-background flex-shrink-0 fixed inset-y-0 left-0 z-50 md:static md:translate-x-0 -translate-x-full md:block transition-transform duration-200 ease-in-out"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5" />
              <span className="font-bold">CHROMA Admin</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/gallery"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <ImageIcon className="h-5 w-5" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/services"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <Scissors className="h-5 w-5" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/clients"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <Users className="h-5 w-5" />
                  <span>Clients</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/appointments"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Appointments</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      document.getElementById("admin-sidebar")?.classList.toggle("-translate-x-full")
                    }
                  }}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Link href="/" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

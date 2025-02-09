"use client"

import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { LayoutDashboard, Users, Wallet, FileText, Settings, Bell, Menu, X } from "lucide-react"

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Candidates", icon: Users, href: "/dashboard/candidates" },
    { name: "Earnings", icon: Wallet, href: "/dashboard/earnings" },
    { name: "Transactions", icon: FileText, href: "/dashboard/transactions" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-black text-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-full flex flex-col border-r border-slate-800">
          {/* Logo */}
          <div className="p-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-4 py-3 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-colors ${
                  location.pathname === item.href ? "bg-slate-800/50" : ""
                }`}
              >
                <item.icon className="w-5 h-5 mr-3 text-slate-400 group-hover:text-cyan-400" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Profile */}
          <div className="p-4 border-t border-slate-800">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25"></div>
              <div className="relative p-4 bg-slate-900 rounded-lg">
                <div className="flex items-center">
                  <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <div className="text-sm font-medium">Sarah Chen</div>
                    <div className="text-xs text-slate-400">Tech Influencer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="group relative p-4 rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full"></div>
          <div className="absolute inset-0.5 bg-black rounded-full"></div>
          <span className="relative z-10">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </span>
        </button>
      </div>

      {/* Main content */}
      <main className="md:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-slate-800">
          <div className="flex items-center justify-between h-16 px-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              Dashboard
            </h1>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full"></span>
              </button>

              {/* Quick actions */}
              <button className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Share My Link
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout


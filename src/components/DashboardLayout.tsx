"use client"

import { useState, useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  Wallet,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
  Share2,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  LogOut, // Add this import
} from "lucide-react"
import { useNavigate } from "react-router-dom" // Add this import

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate() // Add this

  const navigation = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Candidates", icon: Users, href: "/dashboard/candidates" },
    { name: "Earnings", icon: Wallet, href: "/dashboard/earnings" },
    { name: "Transactions", icon: FileText, href: "/dashboard/transactions" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    { name: "Repository", icon: FolderOpen, href: "/dashboard/repository" },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens/state
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-black text-slate-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        } bg-slate-900/95 backdrop-blur-xl transform transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col border-r border-slate-800">
          {/* Logo and collapse button */}
          <div className="p-4 flex items-center justify-between">
            <div
              className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text ${isSidebarCollapsed ? "hidden" : "block"}`}
            >
              Hirecentive Social
            </div>
            <div
              className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text ${isSidebarCollapsed ? "block" : "hidden"}`}
            >
              Hc
            </div>
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.href
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <item.icon
                  className={`${
                    location.pathname === item.href ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"
                  } mr-3 flex-shrink-0 h-6 w-6`}
                />
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Profile */}
          <div className={`p-4 border-t border-slate-800 ${isSidebarCollapsed ? "flex justify-center" : ""}`}>
            <Link to="/dashboard/profile" className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className={`relative ${isSidebarCollapsed ? "" : "p-2 bg-slate-900 rounded-lg"} flex items-center`}>
                <div className={`w-10 h-10 rounded-full border-2 border-cyan-400 overflow-hidden flex-shrink-0`}>
                  <img src="https://i.pravatar.cc/100?img=47" alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                {!isSidebarCollapsed && (
                  <div className="ml-3">
                    <div className="text-sm font-medium text-slate-200">Sarah Chen</div>
                    <div className="text-xs text-slate-400">Tech Influencer</div>
                  </div>
                )}
              </div>
            </Link>
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
      <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "md:ml-16" : "md:ml-64"}`}>
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-slate-800">
          <div className="flex items-center justify-between h-16 px-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              Dashboard
            </h1>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <Link
                to="/dashboard/notifications"
                className="relative p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full"></span>
              </Link>

              {/* Share */}
              <Link to="/dashboard/share" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Share2 className="w-6 h-6" />
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
                {!isSidebarCollapsed && <span className="sr-only md:not-sr-only md:hidden lg:inline-block">Logout</span>}
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


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
  LogOut,
  DollarSign,
  Zap
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Candidates", icon: Users, href: "/dashboard/candidates" },
    { name: "Earnings", icon: Wallet, href: "/dashboard/earnings" },
    { name: "Redeem", icon: DollarSign, href: "/dashboard/redeem" },
    { name: "Transactions", icon: FileText, href: "/dashboard/transactions" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    { name: "Repository", icon: FolderOpen, href: "/dashboard/repository" },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
      // Auto-collapse sidebar on small screens
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setIsSidebarCollapsed(true)
      }
    }

    // Run once on initial load
    handleResize()
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens/state
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-50 flex">
      {/* Unified dividing line that spans across the entire interface */}
      <div className="fixed top-16 left-0 right-0 z-50 h-[1px] bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/30 to-amber-400/30"></div>
      
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        } bg-slate-900/95 backdrop-blur-xl transform transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } border-r border-slate-800/70`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and collapse button */}
          <div className="h-16 flex items-center bg-gradient-to-r from-slate-900 to-slate-800/80">
            <div className="w-full flex items-center justify-between px-2">
              <Link to="/dashboard" className="flex items-center group relative">
                <div className="relative">
                  {!isSidebarCollapsed && (
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 text-transparent bg-clip-text whitespace-nowrap">
                      Hirecentive Social
                    </div>
                  )}
                  {isSidebarCollapsed && (
                    <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 text-transparent bg-clip-text pl-0.5">
                      HC
                    </div>
                  )}
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </Link>
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-1.5 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 hover:text-fuchsia-400 transition-colors flex-shrink-0 ml-3"
              >
                {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-2 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-gradient-to-r from-slate-800/90 to-slate-800/50 text-white shadow-md border-l-2 border-cyan-400"
                    : "text-slate-300 hover:bg-slate-800/40 hover:text-white hover:border-l-2 hover:border-fuchsia-400/70"
                } ${isSidebarCollapsed ? "justify-center" : ""}`}
              >
                <item.icon
                  className={`${
                    location.pathname === item.href ? "text-cyan-400" : "text-slate-400 group-hover:text-fuchsia-400"
                  } ${isSidebarCollapsed ? "w-6 h-6" : "w-5 h-5 mr-3 flex-shrink-0"}`}
                />
                {!isSidebarCollapsed && <span>{item.name}</span>}
                {isSidebarCollapsed && (
                  <span className="sr-only">{item.name}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* Profile */}
          <div className={`p-4 border-t border-slate-800/70 ${isSidebarCollapsed ? "flex justify-center" : ""}`}>
            <Link to="/dashboard/profile" className="group relative block w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className={`relative ${isSidebarCollapsed ? "flex justify-center" : "p-2 bg-slate-900 rounded-lg flex items-center"}`}>
                <div className={`w-10 h-10 rounded-full border-2 border-fuchsia-500 overflow-hidden flex-shrink-0`}>
                  <img src="https://i.pravatar.cc/100?img=47" alt="Sarah Chen" className="w-full h-full object-cover" />
                </div>
                {!isSidebarCollapsed && (
                  <div className="ml-3">
                    <div className="text-sm font-medium text-cyan-300">Sarah Chen</div>
                    <div className="text-xs text-fuchsia-300/70">Tech Influencer</div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="group relative p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-full"></div>
          <div className="absolute inset-0.5 bg-black rounded-full"></div>
          <span className="relative z-10">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-fuchsia-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </span>
        </button>
      </div>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "md:ml-16" : "md:ml-64"}`}>
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-slate-900/90 to-black/90 backdrop-blur-xl">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 relative">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center md:hidden">
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 text-transparent bg-clip-text whitespace-nowrap">
                  Hirecentive Social
                </div>
              </Link>
              <Link 
                to="/dashboard" 
                className="relative group hidden md:flex items-center"
                aria-label="Go to Dashboard"
              >
                <div className="relative">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 text-transparent bg-clip-text">
                    Dashboard
                  </h1>
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Notifications */}
              <Link
                to="/dashboard/notifications"
                className="relative group"
                aria-label="Notifications"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative px-3 py-2 bg-slate-800/60 rounded-lg text-cyan-400 group-hover:text-white transition-colors flex items-center">
                  <Bell className="w-5 h-5 sm:w-5 sm:h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                </div>
              </Link>
              
              {/* Share */}
              <Link 
                to="/dashboard/share" 
                className="relative group"
                aria-label="Share"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative px-3 py-2 bg-slate-800/60 rounded-lg text-amber-400 group-hover:text-white transition-colors flex items-center">
                  <Share2 className="w-5 h-5 sm:w-5 sm:h-5" />
                </div>
              </Link>
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="relative group"
                aria-label="Logout"
                title="Logout"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-red-400 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                <div className="relative px-3 py-2 bg-slate-800/60 rounded-lg text-red-400 group-hover:text-white transition-colors flex items-center">
                  <LogOut className="w-5 h-5 sm:w-5 sm:h-5" />
                  <span className="sr-only md:not-sr-only hidden lg:inline-block ml-2">Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-transparent to-slate-950/50">
          <Outlet />
        </div>
      </main> 
    </div>
  )
}

export default DashboardLayout


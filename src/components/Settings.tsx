"use client"
import { Link } from "react-router-dom"
import { User, Bell, Shield, CreditCard, HelpCircle, ChevronRight } from "lucide-react"

const SettingsPage = () => {
  const settingsOptions = [
    { title: "Account", icon: User, link: "/dashboard/settings/account" },
    { title: "Notifications", icon: Bell, link: "/dashboard/settings/notifications" },
    { title: "Privacy and Security", icon: Shield, link: "/dashboard/settings/privacy" },
    { title: "Billing", icon: CreditCard, link: "/dashboard/settings/billing" },
    { title: "Help and Support", icon: HelpCircle, link: "/dashboard/settings/support" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Settings
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          {settingsOptions.map((option, index) => (
            <Link
              key={index}
              to={option.link}
              className="flex items-center justify-between p-4 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-4">
                <option.icon className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-200">{option.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SettingsPage


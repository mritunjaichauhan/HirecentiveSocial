"use client"
import { Bell, CheckCircle, AlertCircle, Info, MessageCircle } from "lucide-react"

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Your candidate Rahul Kumar has been successfully placed!",
      time: "2 hours ago",
    },
    { id: 2, type: "warning", message: "Pending withdrawal request for ₹15,000", time: "1 day ago" },
    { id: 3, type: "info", message: "New feature: You can now export your earnings report", time: "3 days ago" },
    { id: 4, type: "message", message: "New message from TechCorp India regarding a placement", time: "1 week ago" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6 text-emerald-400" />
      case "warning":
        return <AlertCircle className="w-6 h-6 text-amber-400" />
      case "info":
        return <Info className="w-6 h-6 text-cyan-400" />
      case "message":
        return <MessageCircle className="w-6 h-6 text-violet-400" />
      default:
        return <Bell className="w-6 h-6 text-slate-400" />
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Notifications
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start space-x-4 p-4 border-b border-slate-700 last:border-b-0"
            >
              {getIcon(notification.type)}
              <div className="flex-1">
                <p className="text-slate-200">{notification.message}</p>
                <p className="text-sm text-slate-400 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors">
          Load More
        </button>
      </div>
    </div>
  )
}

export default NotificationsPage


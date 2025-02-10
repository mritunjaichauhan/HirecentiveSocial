"use client"

import type React from "react"
import { useState } from "react"
import { Save } from "lucide-react"

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  })

  const handleToggle = (type: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Notification settings updated:", notifications)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Notification Settings
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-200 capitalize">{key} Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={value}
                    onChange={() => handleToggle(key as keyof typeof notifications)}
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-400/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-md text-white font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings


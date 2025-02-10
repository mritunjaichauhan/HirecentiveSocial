"use client"

import type React from "react"
import { useState } from "react"
import { Save, Lock } from "lucide-react"

const PrivacySettings = () => {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    twoFactorAuth: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target
    setPrivacySettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Privacy settings updated:", privacySettings)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Privacy and Security Settings
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="profileVisibility" className="block text-sm font-medium text-slate-400 mb-1">
                Profile Visibility
              </label>
              <select
                id="profileVisibility"
                name="profileVisibility"
                value={privacySettings.profileVisibility}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="connections">Connections Only</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-200">Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  className="sr-only peer"
                  checked={privacySettings.twoFactorAuth}
                  onChange={handleChange}
                />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-400/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
              </label>
            </div>
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
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-cyan-400" />
            Password Change
          </h3>
          <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-white font-medium transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacySettings


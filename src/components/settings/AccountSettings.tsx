"use client"

import type React from "react"
import { useState } from "react"
import { Save } from "lucide-react"

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    phone: "+91 98765 43210",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Account Settings
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
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
    </div>
  )
}

export default AccountSettings



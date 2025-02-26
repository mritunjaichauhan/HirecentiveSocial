"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Edit2, Save, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [copiedSocial, setCopiedSocial] = useState<string | null>(null)
  const [profile, setProfile] = useState({
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    occupation: "Tech Influencer",
    bio: "Passionate about connecting tech talent with innovative companies. Building the future of recruitment one placement at a time.",
  })

  const socialLinks = {
    facebook: "https://hirecentive.com/ref/facebook/user123",
    twitter: "https://hirecentive.com/ref/twitter/user123",
    linkedin: "https://hirecentive.com/ref/linkedin/user123",
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically send the updated profile to your backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopySocial = (platform: string) => {
    navigator.clipboard.writeText(socialLinks[platform as keyof typeof socialLinks])
    setCopiedSocial(platform)
    setTimeout(() => setCopiedSocial(null), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
          My Profile
        </h2>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors flex items-center"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </button>
        )}
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center text-white text-2xl font-bold">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-200 px-2 py-1 rounded"
                />
              ) : (
                <h3 className="text-xl font-semibold text-slate-200">{profile.name}</h3>
              )}
              {isEditing ? (
                <input
                  type="text"
                  name="occupation"
                  value={profile.occupation}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-400 px-2 py-1 rounded mt-1"
                />
              ) : (
                <p className="text-slate-400">{profile.occupation}</p>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-200 px-2 py-1 rounded flex-1"
                />
              ) : (
                <span className="text-slate-200">{profile.email}</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-200 px-2 py-1 rounded flex-1"
                />
              ) : (
                <span className="text-slate-200">{profile.phone}</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-200 px-2 py-1 rounded flex-1"
                />
              ) : (
                <span className="text-slate-200">{profile.location}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Bio</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-200 px-2 py-1 rounded"
              rows={4}
            />
          ) : (
            <p className="text-slate-400">{profile.bio}</p>
          )}
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Share on Social Media</h3>
          <div className="space-y-4">
            {Object.entries(socialLinks).map(([platform, link]) => (
              <div key={platform} className="flex items-center space-x-4">
                <button className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors">
                  {platform === 'facebook' && <Facebook className="w-6 h-6" />}
                  {platform === 'twitter' && <Twitter className="w-6 h-6" />}
                  {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                </button>
                <input
                  type="text"
                  value={link}
                  readOnly
                  className="flex-1 bg-slate-800 text-slate-200 px-2 py-1 rounded outline-none"
                />
                <button
                  onClick={() => handleCopySocial(platform)}
                  className="p-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors"
                >
                  {copiedSocial === platform ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

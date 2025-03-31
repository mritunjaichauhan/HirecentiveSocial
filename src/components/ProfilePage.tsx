"use client"

import type React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Edit2,
  Save,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Instagram,
  Globe,
  GitlabIcon as GitHub,
  Plus,
  Trash2,
  Youtube,
  Music,
  Youtube as TikTok,  // Using Youtube as TikTok temporarily
  MessageCircle,
  AtSign,
  Camera,
  BookOpen,
  Send,
} from "lucide-react"

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
    socialMedia: {
      facebook: "https://facebook.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      instagram: "https://instagram.com/sarahchen",
      github: "https://github.com/sarahchen",
      website: "https://sarahchen.com",
    },
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

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [name]: value,
      },
    }))
  }

  const handleCopySocial = (platform: string) => {
    navigator.clipboard.writeText(socialLinks[platform as keyof typeof socialLinks])
    setCopiedSocial(platform)
    setTimeout(() => setCopiedSocial(null), 2000)
  }

  // Social media icon mapping
  const socialIcons = {
    facebook: <Facebook className="w-5 h-5 text-blue-500" />,
    twitter: <Twitter className="w-5 h-5 text-blue-400" />,
    linkedin: <Linkedin className="w-5 h-5 text-blue-600" />,
    instagram: <Instagram className="w-5 h-5 text-pink-500" />,
    github: <GitHub className="w-5 h-5 text-slate-300" />,
    youtube: <Youtube className="w-5 h-5 text-red-500" />,
    tiktok: <TikTok className="w-5 h-5 text-slate-200" />,
    snapchat: <Camera className="w-5 h-5 text-yellow-400" />,
    pinterest: <Camera className="w-5 h-5 text-red-400" />,
    medium: <BookOpen className="w-5 h-5 text-slate-200" />,
    discord: <MessageCircle className="w-5 h-5 text-indigo-400" />,
    slack: <MessageCircle className="w-5 h-5 text-orange-400" />,
    telegram: <Send className="w-5 h-5 text-blue-400" />,
    whatsapp: <MessageCircle className="w-5 h-5 text-green-500" />,
    website: <Globe className="w-5 h-5 text-green-500" />,
  }

  // Social media display names
  const socialNames = {
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    github: "GitHub",
    youtube: "YouTube",
    tiktok: "TikTok",
    snapchat: "Snapchat",
    pinterest: "Pinterest",
    medium: "Medium",
    discord: "Discord",
    slack: "Slack",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    website: "Website",
  }

  // State for new social media profile
  const [newProfile, setNewProfile] = useState({
    platform: '',
    url: ''
  })
  
  const handleNewProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddProfile = () => {
    if (newProfile.platform && newProfile.url) {
      setProfile(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [newProfile.platform.toLowerCase()]: newProfile.url
        }
      }))
      // Reset the form
      setNewProfile({
        platform: '',
        url: ''
      })
    }
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
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Profile Image and Basic Info */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center text-white text-3xl font-bold">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              {isEditing ? (
                <input
                  type="text"
                  name="occupation"
                  value={profile.occupation}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-400 px-2 py-1 rounded mt-3 text-center w-full"
                />
              ) : (
                <p className="text-slate-400 mt-3 text-center">{profile.occupation}</p>
              )}
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-4">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="bg-slate-800 text-slate-200 px-2 py-1 rounded w-full text-xl font-semibold"
                />
              ) : (
                <h3 className="text-xl font-semibold text-slate-200">{profile.name}</h3>
              )}

              <div className="space-y-3">
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

              <div className="pt-4 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-slate-200 mb-2">Bio</h4>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    className="w-full bg-slate-800 text-slate-200 px-2 py-1 rounded"
                    rows={3}
                  />
                ) : (
                  <p className="text-slate-400">{profile.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Profiles */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Social Media Profiles</h3>
          </div>

          {/* Inline Add Profile Form */}
          <div className="mb-4 p-3 bg-slate-800/60 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                name="platform"
                value={newProfile.platform}
                onChange={handleNewProfileChange}
                className="bg-slate-700 text-slate-200 px-3 py-2 rounded flex-1 sm:w-1/3"
              >
                <option value="">Select Platform</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="github">GitHub</option>
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
                <option value="snapchat">Snapchat</option>
                <option value="pinterest">Pinterest</option>
                <option value="medium">Medium</option>
                <option value="discord">Discord</option>
                <option value="telegram">Telegram</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="website">Personal Website</option>
                <option value="other">Other</option>
              </select>

              {newProfile.platform && newProfile.platform !== 'other' && (
                <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full">
                  {socialIcons[newProfile.platform as keyof typeof socialIcons] || <Globe className="w-5 h-5 text-slate-400" />}
                </div>
              )}

              {newProfile.platform === 'other' && (
                <input
                  type="text"
                  name="customPlatform"
                  placeholder="Enter platform name"
                  onChange={(e) => setNewProfile(prev => ({ ...prev, platform: e.target.value.toLowerCase() }))}
                  className="bg-slate-700 text-slate-200 px-3 py-2 rounded flex-1"
                />
              )}

              <input
                type="url"
                name="url"
                value={newProfile.url}
                onChange={handleNewProfileChange}
                placeholder="https://..."
                className="bg-slate-700 text-slate-200 px-3 py-2 rounded flex-grow"
              />

              <button
                onClick={handleAddProfile}
                disabled={!newProfile.platform || !newProfile.url}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center ${
                  newProfile.platform && newProfile.url
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white hover:from-cyan-500 hover:to-violet-600"
                    : "bg-slate-700 text-slate-400"
                } transition-colors`}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(profile.socialMedia).map(([platform, url]) => (
              <div key={platform} className="flex items-center space-x-2">
                {isEditing ? (
                  <>
                    <span className="flex-shrink-0">{socialIcons[platform as keyof typeof socialIcons] || <Globe className="w-5 h-5 text-slate-400" />}</span>
                    <input
                      type="url"
                      name={platform}
                      value={url}
                      onChange={handleSocialChange}
                      className="bg-slate-800 text-slate-200 px-2 py-1 rounded flex-1"
                      placeholder={`${socialNames[platform as keyof typeof socialNames] || platform} URL`}
                    />
                    <button 
                      onClick={() => {
                        setProfile(prev => {
                          const updatedSocialMedia = { ...prev.socialMedia };
                          delete updatedSocialMedia[platform];
                          return {
                            ...prev,
                            socialMedia: updatedSocialMedia
                          };
                        });
                      }}
                      className="p-1.5 bg-red-900/30 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <div className="flex items-center space-x-2 w-full group">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-200 hover:text-cyan-400 transition-colors flex-1"
                    >
                      <span className="flex-shrink-0">{socialIcons[platform as keyof typeof socialIcons] || <Globe className="w-5 h-5 text-slate-400" />}</span>
                      <span className="truncate">{url}</span>
                    </a>
                    <button 
                      onClick={() => {
                        if (confirm(`Remove ${socialNames[platform as keyof typeof socialNames] || platform} profile?`)) {
                          setProfile(prev => {
                            const updatedSocialMedia = { ...prev.socialMedia };
                            delete updatedSocialMedia[platform];
                            return {
                              ...prev,
                              socialMedia: updatedSocialMedia
                            };
                          });
                        }
                      }}
                      className="p-1.5 bg-transparent text-slate-500 opacity-0 group-hover:opacity-100 rounded-lg hover:bg-red-900/30 hover:text-red-400 transition-all"
                      title={`Remove ${socialNames[platform as keyof typeof socialNames] || platform} profile`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
            {Object.keys(profile.socialMedia).length === 0 && (
              <div className="col-span-2 text-center py-6 text-slate-400">
                {isEditing ? "Click 'Add Profile' to add your social media accounts" : "No social media profiles added"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage


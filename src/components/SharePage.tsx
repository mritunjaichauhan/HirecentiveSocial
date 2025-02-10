"use client"

import { useState } from "react"
import { Share2, Copy, Check, Facebook, Twitter, Linkedin } from "lucide-react"

const SharePage = () => {
  const [copied, setCopied] = useState(false)
  const referralLink = "https://hirecentive.com/ref/user123"

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Share Your Referral Link
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-4 mb-6">
            <Share2 className="w-6 h-6 text-cyan-400" />
            <p className="text-slate-200">Share your unique referral link and earn rewards!</p>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-transparent text-slate-200 outline-none"
            />
            <button
              onClick={handleCopy}
              className="p-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Share on Social Media</h3>
          <div className="flex space-x-4">
            <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="p-3 bg-sky-500 rounded-full text-white hover:bg-sky-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </button>
            <button className="p-3 bg-blue-700 rounded-full text-white hover:bg-blue-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Referral Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Total Referrals</p>
              <p className="text-2xl font-bold text-slate-200">24</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Successful Placements</p>
              <p className="text-2xl font-bold text-slate-200">18</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Earnings from Referrals</p>
              <p className="text-2xl font-bold text-slate-200">₹36,000</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Pending Referrals</p>
              <p className="text-2xl font-bold text-slate-200">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePage


"use client"

import { useState } from "react"
import { Users, TrendingUp, Briefcase } from "lucide-react"

const GigWorkersPlacements = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filters = [
    { value: "today", label: "Today" },
    { value: "7days", label: "7 Days" },
    { value: "1month", label: "1 Month" },
    { value: "2months", label: "2 Months" },
    { value: "6months", label: "6 Months" },
    { value: "1year", label: "1 Year" },
    { value: "3years", label: "3 Years" },
    { value: "5years", label: "5 Years" },
    { value: "all", label: "All Time" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Gig Workers Placed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Total Placements</h3>
            <Users className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">378</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Growth Rate</h3>
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">+12.3%</p>
          <p className="text-sm text-slate-400">Compared to last quarter</p>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Top Gig Categories</h3>
        <div className="space-y-4">
          {[
            { category: "Delivery Services", count: 98 },
            { category: "Freelance Writing", count: 76 },
            { category: "Graphic Design", count: 62 },
            { category: "Web Development", count: 54 },
            { category: "Virtual Assistance", count: 47 },
          ].map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-slate-400 mr-2" />
                <span className="text-slate-300">{item.category}</span>
              </div>
              <span className="text-slate-100 font-semibold">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Filter Bar */}
      <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedFilter === filter.value
                ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GigWorkersPlacements


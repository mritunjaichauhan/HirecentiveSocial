"use client"

import { useState } from "react"
import { Search, Download, Filter } from "lucide-react"

const Candidates = () => {
  const [filterType, setFilterType] = useState("all")

  const candidates = [
    {
      id: "CAN001",
      name: "Rahul Kumar",
      type: "Full-Time",
      company: "TechCorp India",
      position: "Software Engineer",
      status: "Placed",
      date: "2024-02-05",
    },
    {
      id: "CAN002",
      name: "Priya Shah",
      type: "Gig Work",
      company: "DeliverEase",
      position: "Delivery Executive",
      status: "In Process",
      date: "2024-02-04",
    },
    {
      id: "CAN003",
      name: "Amit Patel",
      type: "Full-Time",
      company: "RetailPlus",
      position: "Store Manager",
      status: "Interviewing",
      date: "2024-02-03",
    },
    {
      id: "CAN004",
      name: "Sneha Reddy",
      type: "Full-Time",
      company: "CloudTech Solutions",
      position: "Data Analyst",
      status: "Placed",
      date: "2024-02-02",
    },
    {
      id: "CAN005",
      name: "Karthik R",
      type: "Gig Work",
      company: "QuickServe",
      position: "Freelance Designer",
      status: "In Process",
      date: "2024-02-01",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
          Candidates
        </h1>

        <div className="flex items-center gap-4">
          <button className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
            <div className="absolute inset-0.5 bg-black rounded-lg"></div>
            <span className="relative z-10 flex items-center gap-2 text-slate-300">
              <Download className="w-4 h-4" />
              Export CSV
            </span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by candidate name, company, or position..."
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50 placeholder-slate-400"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-4">
              <select
                className="px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-Time</option>
                <option value="gig">Gig Work</option>
              </select>

              <select className="px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50">
                <option>All Status</option>
                <option>Placed</option>
                <option>In Process</option>
                <option>Interviewing</option>
              </select>

              <button className="px-4 py-2 bg-black/50 border border-slate-800 rounded-lg hover:border-cyan-400 transition-colors text-slate-50 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4 text-sm font-medium text-slate-400">ID</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Date</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Name</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Type</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Company</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Position</th>
                  <th className="pb-4 text-sm font-medium text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {candidates.map((candidate, index) => (
                  <tr key={index} className="border-t border-slate-800">
                    <td className="py-4 text-slate-300">{candidate.id}</td>
                    <td className="py-4 text-slate-300">{candidate.date}</td>
                    <td className="py-4 text-slate-300">{candidate.name}</td>
                    <td className="py-4 text-slate-300">{candidate.type}</td>
                    <td className="py-4 text-slate-300">{candidate.company}</td>
                    <td className="py-4 text-slate-300">{candidate.position}</td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          candidate.status === "Placed"
                            ? "bg-emerald-400/10 text-emerald-400"
                            : candidate.status === "In Process"
                              ? "bg-amber-400/10 text-amber-400"
                              : "bg-violet-400/10 text-violet-400"
                        }`}
                      >
                        {candidate.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-400">Showing 5 of 25 candidates</div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-black/50 border border-slate-800 rounded-lg hover:border-cyan-400 transition-colors text-slate-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-black/50 border border-slate-800 rounded-lg hover:border-cyan-400 transition-colors text-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Candidates


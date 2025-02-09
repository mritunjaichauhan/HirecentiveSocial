import { Users, TrendingUp, Calendar } from "lucide-react"

const TotalRegistrations = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Total Registrations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Total Registrations</h3>
            <Users className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">1,234</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Growth Rate</h3>
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">+8.7%</p>
          <p className="text-sm text-slate-400">Compared to last month</p>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Registration Timeline</h3>
        <div className="space-y-4">
          {[
            { month: "May 2023", count: 156 },
            { month: "April 2023", count: 143 },
            { month: "March 2023", count: 132 },
            { month: "February 2023", count: 121 },
            { month: "January 2023", count: 112 },
          ].map((item) => (
            <div key={item.month} className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-slate-400 mr-2" />
                <span className="text-slate-300">{item.month}</span>
              </div>
              <span className="text-slate-100 font-semibold">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TotalRegistrations



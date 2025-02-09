import { IndianRupee, TrendingUp } from "lucide-react"

const ThisMonthEarnings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        This Month's Earnings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Total Earnings</h3>
            <IndianRupee className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">₹85,400</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Growth Rate</h3>
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">+5.7%</p>
          <p className="text-sm text-slate-400">Compared to last month</p>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Earnings Breakdown</h3>
        <div className="space-y-4">
          {[
            { category: "Full-Time Placements", amount: "₹65,000", percentage: "76%" },
            { category: "Gig Worker Placements", amount: "₹15,400", percentage: "18%" },
            { category: "Referral Bonuses", amount: "₹5,000", percentage: "6%" },
          ].map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <div>
                <span className="text-slate-300">{item.category}</span>
                <div className="text-sm text-slate-400">{item.percentage}</div>
              </div>
              <span className="text-slate-100 font-semibold">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThisMonthEarnings



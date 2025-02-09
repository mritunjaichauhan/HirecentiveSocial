import { IndianRupee, TrendingUp, Calendar } from "lucide-react"

const LifetimeEarnings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Lifetime Earnings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Total Earnings</h3>
            <IndianRupee className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">₹4,85,400</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-200">Growth Rate</h3>
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-slate-100">+15.3%</p>
          <p className="text-sm text-slate-400">Compared to last year</p>
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Earnings Timeline</h3>
        <div className="space-y-4">
          {[
            { year: 2023, amount: "₹2,10,000" },
            { year: 2022, amount: "₹1,75,400" },
            { year: 2021, amount: "₹1,00,000" },
          ].map((item) => (
            <div key={item.year} className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-slate-400 mr-2" />
                <span className="text-slate-300">{item.year}</span>
              </div>
              <span className="text-slate-100 font-semibold">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LifetimeEarnings


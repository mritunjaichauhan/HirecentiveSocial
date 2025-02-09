import { IndianRupee, ArrowDownToLine } from "lucide-react"

const AvailableToWithdraw = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Available to Withdraw
      </h2>
      <div className="bg-slate-800 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-200">Total Available</h3>
          <IndianRupee className="w-6 h-6 text-emerald-400" />
        </div>
        <p className="text-3xl font-bold text-slate-100">₹53,400</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Withdrawal Options</h3>
        <div className="space-y-4">
          {[
            { method: "Bank Transfer", minAmount: "₹1,000", processingTime: "2-3 business days" },
            { method: "UPI", minAmount: "₹100", processingTime: "Instant" },
            { method: "PayTM Wallet", minAmount: "₹500", processingTime: "Instant" },
          ].map((option) => (
            <div key={option.method} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div>
                <div className="text-slate-200 font-semibold">{option.method}</div>
                <div className="text-sm text-slate-400">Min: {option.minAmount}</div>
              </div>
              <div className="text-sm text-slate-300">{option.processingTime}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="group relative px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
          <div className="absolute inset-0.5 bg-slate-800 rounded-lg"></div>
          <span className="relative z-10 flex items-center gap-2 text-slate-100">
            <ArrowDownToLine className="w-5 h-5" />
            Withdraw Funds
          </span>
        </button>
      </div>
    </div>
  )
}

export default AvailableToWithdraw


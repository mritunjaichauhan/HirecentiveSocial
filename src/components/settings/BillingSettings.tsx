"use client"
import { CreditCard, Download } from "lucide-react"

const BillingSettings = () => {
  const transactions = [
    { id: 1, date: "2023-05-01", amount: "₹5,000", status: "Paid" },
    { id: 2, date: "2023-04-01", amount: "₹5,000", status: "Paid" },
    { id: 3, date: "2023-03-01", amount: "₹5,000", status: "Paid" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Billing Settings
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-cyan-400" />
            Payment Method
          </h3>
          <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg mb-4">
            <div>
              <p className="text-slate-200 font-medium">Visa ending in 4242</p>
              <p className="text-slate-400 text-sm">Expires 12/2024</p>
            </div>
            <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-white text-sm transition-colors">
              Update
            </button>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-md text-white font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors">
            Add New Payment Method
          </button>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Billing History</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between bg-slate-800 p-4 rounded-lg">
                <div>
                  <p className="text-slate-200 font-medium">{transaction.date}</p>
                  <p className="text-slate-400 text-sm">{transaction.amount}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                    {transaction.status}
                  </span>
                  <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingSettings


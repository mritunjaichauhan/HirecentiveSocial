import { Clock } from "lucide-react"

const PendingWithdrawal = () => {
  const pendingTransactions = [
    { id: "TXN001", amount: "₹15,000", date: "2023-05-15", status: "Processing" },
    { id: "TXN002", amount: "₹10,000", date: "2023-05-14", status: "Pending Approval" },
    { id: "TXN003", amount: "₹7,000", date: "2023-05-13", status: "Processing" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Pending Withdrawals
      </h2>
      <div className="bg-slate-800 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-200">Total Pending</h3>
          <Clock className="w-6 h-6 text-amber-400" />
        </div>
        <p className="text-3xl font-bold text-slate-100">₹32,000</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Pending Transactions</h3>
        <div className="space-y-4">
          {pendingTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div>
                <div className="text-slate-200 font-semibold">{transaction.amount}</div>
                <div className="text-sm text-slate-400">{transaction.date}</div>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    transaction.status === "Processing"
                      ? "bg-violet-400/10 text-violet-400"
                      : transaction.status === "Pending Approval"
                        ? "bg-amber-400/10 text-amber-400"
                        : "bg-emerald-400/10 text-emerald-400"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PendingWithdrawal


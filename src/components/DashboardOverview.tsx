import { Link } from "react-router-dom"
import { Users, Briefcase, IndianRupee, Wallet, Clock, Building2 } from "lucide-react"

const DashboardOverview = () => {
  const earnings = [
    {
      title: "Lifetime Earnings",
      value: "₹4,85,400",
      icon: IndianRupee,
      color: "from-emerald-400 to-cyan-400",
      link: "/dashboard/lifetime-earnings",
    },
    {
      title: "This Month Earnings",
      value: "₹85,400",
      icon: Wallet,
      color: "from-violet-400 to-purple-400",
      link: "/dashboard/this-month-earnings",
    },
    {
      title: "Pending Withdrawal",
      value: "₹32,000",
      icon: Clock,
      color: "from-amber-400 to-orange-400",
      link: "/dashboard/pending-withdrawal",
    },
    {
      title: "Available to Withdraw",
      value: "₹53,400",
      icon: IndianRupee,
      color: "from-cyan-400 to-blue-400",
      link: "/dashboard/available-to-withdraw",
    },
  ]

  const metrics = [
    {
      title: "Total Registrations",
      value: "1,234",
      icon: Users,
      color: "from-pink-400 to-rose-400",
      link: "/dashboard/total-registrations",
    },
    {
      title: "Full-Time Placements",
      value: "856",
      icon: Briefcase,
      color: "from-emerald-400 to-green-400",
      link: "/dashboard/full-time-placements",
    },
    {
      title: "Gig Workers Placed",
      value: "378",
      icon: Building2,
      color: "from-blue-400 to-indigo-400",
      link: "/dashboard/gig-workers-placed",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Earnings Section */}
      <section>
        <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
          Earnings Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnings.map((stat, index) => (
            <Link key={index} to={stat.link} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="font-bold text-2xl text-slate-50">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Placement Metrics */}
      <section>
        <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
          Placement Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Link key={index} to={metric.link} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${metric.color} bg-opacity-10`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="font-bold text-2xl text-slate-50">{metric.value}</div>
                <div className="text-sm text-slate-400 mt-1">{metric.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Transactions section remains unchanged */}
    </div>
  )
}

export default DashboardOverview


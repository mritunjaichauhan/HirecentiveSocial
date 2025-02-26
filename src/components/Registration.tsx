"use client"
import { Link } from "react-router-dom"
import { Users, Building2, User } from "lucide-react"
import ParticleCanvas from "./ParticleCanvas"

const Registration = () => {
  const registrationTypes = [
    {
      title: "Influencer",
      icon: Users,
      description: "Connect tech talent with innovative companies",
      link: "/register/influencer",
    },
    {
      title: "Company",
      icon: Building2,
      description: "Find the best talent for your organization",
      link: "/register/company",
    },
    {
      title: "Candidate",
      icon: User,
      description: "Discover exciting job opportunities",
      link: "/register/candidate",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-slate-50 p-4 overflow-hidden">
      {/* Background Particle Canvas */}
      <ParticleCanvas />

      {/* Pulsating Auras */}
      <div className="absolute inset-0 opacity-40">
        {/* Pulsating purple aura on top left */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
        {/* Pulsating blue aura on bottom right */}
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
            Choose Your Registration Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationTypes.map((type, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <type.icon className="w-16 h-16 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center text-slate-200">{type.title}</h3>
                    <p className="text-slate-400 text-center mb-6">{type.description}</p>
                  </div>
                  <Link
                    to={type.link}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors text-center"
                  >
                    Register as {type.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Registration


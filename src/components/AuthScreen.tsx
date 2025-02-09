import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AuthScreen = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-slate-50 p-4">
      <div className="w-full max-w-md">
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                if (emailInput === "test@example.com" && passwordInput === "12345") {
                  navigate("/dashboard")
                } else {
                  alert("Invalid credentials")
                }
              }}
            >
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
                    placeholder="Enter your password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-slate-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button className="ml-1 text-cyan-400 hover:underline" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen


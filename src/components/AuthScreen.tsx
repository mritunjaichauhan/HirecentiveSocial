"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AuthScreen = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [otpArray, setOtpArray] = useState(Array(6).fill(""))
  const [step, setStep] = useState("email") // 'email' or 'otp'
  const [combinedOtp, setCombinedOtp] = useState("")

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the OTP to the user's email
    setStep("otp")
  }

  const handleOtpChange = (index: number, value: string) => {
    const newOtpArray = [...otpArray]
    newOtpArray[index] = value
    setOtpArray(newOtpArray)
    
    // Combine OTP digits
    const newCombinedOtp = newOtpArray.join("")
    setCombinedOtp(newCombinedOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const newOtpArray = [...otpArray]
      newOtpArray[index] = ""
      setOtpArray(newOtpArray)
      setCombinedOtp(newOtpArray.join(""))

      // Focus previous input on backspace
      if (index > 0) {
        const prevInput = document.querySelector(`input[name=otp-${index - 1}]`) as HTMLInputElement
        if (prevInput) {
          prevInput.focus()
          prevInput.select()
        }
      }
    }
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (combinedOtp === "123456") {
      navigate("/dashboard")
    } else {
      alert("Invalid OTP")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-slate-50 p-4">
      <div className="w-full max-w-md">
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              {step === "email" ? "Enter Your Email" : "Enter OTP"}
            </h2>
            {step === "email" ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors flex items-center justify-center"
                >
                  <span>Send OTP</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-slate-300 mb-1">
                    One-Time Password
                  </label>
                  <div className="flex justify-between">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        name={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={otpArray[index]}
                        className="w-12 h-12 text-center bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50 text-xl"
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-slate-50 font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors flex items-center justify-center"
                >
                  <span>Verify OTP</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
            {step === "otp" && (
              <p className="mt-4 text-center text-sm text-slate-400">
                Didn't receive the OTP?{" "}
                <button className="text-cyan-400 hover:underline" onClick={() => setStep("email")}>
                  Resend
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen


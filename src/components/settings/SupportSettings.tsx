"use client"
import { HelpCircle, MessageCircle, FileText, ExternalLink } from "lucide-react"

const SupportSettings = () => {
  const supportOptions = [
    { title: "FAQs", icon: HelpCircle, description: "Find answers to common questions", link: "#" },
    { title: "Live Chat", icon: MessageCircle, description: "Chat with our support team", link: "#" },
    { title: "Documentation", icon: FileText, description: "Read our detailed documentation", link: "#" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Help and Support
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="block p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <option.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-slate-200">{option.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{option.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Contact Us</h3>
          <p className="text-slate-400 mb-4">
            If you can't find the answer you're looking for, please don't hesitate to reach out to our support team.
          </p>
          <a
            href="mailto:support@hirecentive.com"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-md text-white font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors"
          >
            Contact Support
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SupportSettings



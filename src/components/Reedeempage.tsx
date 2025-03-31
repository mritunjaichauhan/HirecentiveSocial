"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  Gift,
  RefreshCw,
  BanknoteIcon as Bank,
  Save,
  Edit,
  Check,
  AlertTriangle,
  Shield,
  AlertCircle,
} from "lucide-react"

// Mock data for payout history
const payoutHistory = [
  {
    id: 1,
    date: "2023-11-15",
    amount: 500,
    status: "Completed",
    reference: "PAY-2023111501",
    accountEnding: "****6789",
  },
  {
    id: 2,
    date: "2023-10-22",
    amount: 300,
    status: "Completed",
    reference: "PAY-2023102201",
    accountEnding: "****6789",
  },
  {
    id: 3,
    date: "2023-09-05",
    amount: 750,
    status: "Completed",
    reference: "PAY-2023090501",
    accountEnding: "****6789",
  },
  {
    id: 4,
    date: "2023-08-18",
    amount: 200,
    status: "Completed",
    reference: "PAY-2023081801",
    accountEnding: "****6789",
  },
]

const RedeemPage = () => {
  const [payoutAmount, setPayoutAmount] = useState("")
  const [editingBankDetails, setEditingBankDetails] = useState(false)
  const [verificationStep, setVerificationStep] = useState(0) // 0: not started, 1: initiated, 2: entering deposits, 3: verified
  const [microDeposits, setMicroDeposits] = useState({ deposit1: "", deposit2: "" })
  const [showVerificationForm, setShowVerificationForm] = useState(false)
  const availableBalance = 1250 // Mock available balance
  // Mock expected micro-deposit amounts
  const [expectedDeposits, setExpectedDeposits] = useState({ deposit1: "", deposit2: "" })
  const [verificationError, setVerificationError] = useState("")

  // Bank details state
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "John Doe",
    accountNumber: "XXXX-XXXX-XXXX-6789",
    bankName: "Chase Bank",
    routingNumber: "XXXXX0123",
    accountType: "Checking",
    verified: false,
    verificationDate: null,
  })

  // Form state for editing bank details
  const [formBankDetails, setFormBankDetails] = useState({ ...bankDetails })

  const handlePayoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payout logic here
    alert(`Payout request submitted for $${payoutAmount}`)
    setPayoutAmount("")
  }

  const handleBankDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updatedDetails = { ...formBankDetails, verified: false, verificationDate: null }
    setBankDetails(updatedDetails)
    setEditingBankDetails(false)
    alert("Bank details updated successfully. Please verify your new bank account.")
    setVerificationStep(0)
  }

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormBankDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const initiateVerification = () => {
    // In a real app, this would call an API to initiate micro-deposits
    setVerificationStep(1)
    // Generate random mock deposit amounts between 0.01 and 0.99
    const deposit1 = (Math.floor(Math.random() * 99) / 100).toFixed(2)
    const deposit2 = (Math.floor(Math.random() * 99) / 100).toFixed(2)
    setExpectedDeposits({ deposit1, deposit2 })
    alert("Verification initiated! Two small deposits will be made to your account within 1-3 business days.")
    // In a real app, these values would be stored on the server, not in client state
    console.log(`Expected deposits (for demo purposes): $${deposit1} and $${deposit2}`)
  }

  const handleMicroDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMicroDeposits((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const verifyDeposits = (e: React.FormEvent) => {
    e.preventDefault()
    setVerificationError("")
    
    // Make sure both fields are filled
    if (!microDeposits.deposit1 || !microDeposits.deposit2) {
      setVerificationError("Please enter both deposit amounts.")
      return
    }
    
    try {
      // Convert input values to numeric values with fixed decimal places
      const deposit1Value = parseFloat(parseFloat(microDeposits.deposit1).toFixed(2))
      const deposit2Value = parseFloat(parseFloat(microDeposits.deposit2).toFixed(2))
      const expected1Value = parseFloat(parseFloat(expectedDeposits.deposit1).toFixed(2))
      const expected2Value = parseFloat(parseFloat(expectedDeposits.deposit2).toFixed(2))
      
      // Check for NaN values
      if (isNaN(deposit1Value) || isNaN(deposit2Value)) {
        setVerificationError("Please enter valid numeric values.")
        return
      }
      
      console.log("Comparing: ", deposit1Value, expected1Value, deposit2Value, expected2Value)
      
      // Check if the entered values match the expected values (comparing with a small epsilon for floating point precision)
      const epsilon = 0.001 // Small threshold for floating point comparison
      const firstMatch = Math.abs(deposit1Value - expected1Value) < epsilon
      const secondMatch = Math.abs(deposit2Value - expected2Value) < epsilon
      
      if (firstMatch && secondMatch) {
        // Verification successful
        setVerificationStep(3)
        setBankDetails({
          ...bankDetails,
          verified: true,
          verificationDate: new Date().toISOString(),
        })
        setShowVerificationForm(false)
        alert("Bank account successfully verified!")
      } else {
        // Verification failed
        setVerificationError("The deposit amounts you entered do not match our records. Please try again.")
      }
    } catch (error) {
      console.error("Verification error:", error)
      setVerificationError("An error occurred during verification. Please try again.")
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Influencer Payout</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Available Balance Card */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 flex-1 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-lg font-medium">Available Balance</h3>
              <p className="text-white text-3xl font-bold mt-2">${availableBalance.toLocaleString()}</p>
              <p className="text-purple-200 mt-1">Ready for payout</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Total Earned Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 flex-1 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-lg font-medium">Total Earned</h3>
              <p className="text-white text-3xl font-bold mt-2">${(availableBalance + 1750).toLocaleString()}</p>
              <p className="text-blue-100 mt-1">Lifetime earnings</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Gift className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Pending Payouts Card */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 flex-1 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-lg font-medium">Pending Payouts</h3>
              <p className="text-white text-3xl font-bold mt-2">$0</p>
              <p className="text-amber-100 mt-1">Processing</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">Bank Account Details</h2>
            {bankDetails.verified && (
              <div className="ml-3 flex items-center text-green-400 bg-green-900/30 px-2 py-1 rounded-full text-xs">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </div>
            )}
            {!bankDetails.verified && !editingBankDetails && (
              <div className="ml-3 flex items-center text-amber-400 bg-amber-900/30 px-2 py-1 rounded-full text-xs">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Unverified
              </div>
            )}
          </div>
          {!editingBankDetails && (
            <button
              onClick={() => setEditingBankDetails(true)}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Edit className="h-4 w-4 mr-1" />
              Update Details
            </button>
          )}
        </div>

        {!editingBankDetails ? (
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Account Holder Name</p>
                <p className="text-white">{bankDetails.accountHolderName}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Account Number</p>
                <p className="text-white">{bankDetails.accountNumber}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Bank Name</p>
                <p className="text-white">{bankDetails.bankName}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Routing Number</p>
                <p className="text-white">{bankDetails.routingNumber}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Account Type</p>
                <p className="text-white">{bankDetails.accountType}</p>
              </div>
              {bankDetails.verified && bankDetails.verificationDate && (
                <div>
                  <p className="text-gray-400 text-sm mb-1">Verification Date</p>
                  <p className="text-white">{new Date(bankDetails.verificationDate).toLocaleDateString()}</p>
                </div>
              )}
            </div>

            {!bankDetails.verified && (
              <div className="mt-6 border-t border-gray-700 pt-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium">Bank Account Verification Required</h3>
                    <p className="text-gray-400 mt-1">
                      To ensure secure payouts, please verify your bank account. We'll make two small deposits (less
                      than $1.00) to your account within 1-3 business days.
                    </p>

                    {verificationStep === 0 && (
                      <button
                        onClick={initiateVerification}
                        className="mt-3 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center"
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Start Verification
                      </button>
                    )}

                    {verificationStep === 1 && (
                      <div className="mt-3">
                        <p className="text-gray-300">
                          Verification initiated! Two small deposits will be made to your account within 1-3 business
                          days.
                        </p>
                        <button
                          onClick={() => setShowVerificationForm(true)}
                          className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center"
                        >
                          <Check className="h-4 w-4 mr-2" />I Received the Deposits
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {showVerificationForm && (
                  <form onSubmit={verifyDeposits} className="mt-4 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-3">Enter Deposit Amounts</h3>
                    <p className="text-gray-400 mb-4">
                      Enter the exact amounts of the two deposits made to your account.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="deposit1" className="block text-sm font-medium text-gray-400">
                          First Deposit Amount ($)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="text"
                            id="deposit1"
                            name="deposit1"
                            value={microDeposits.deposit1}
                            onChange={handleMicroDepositChange}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full pl-7 py-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="0.00"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="deposit2" className="block text-sm font-medium text-gray-400">
                          Second Deposit Amount ($)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="text"
                            id="deposit2"
                            name="deposit2"
                            value={microDeposits.deposit2}
                            onChange={handleMicroDepositChange}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full pl-7 py-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="0.00"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Verify Deposits
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowVerificationForm(false)}
                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                    {verificationError && (
                      <p className="text-red-500 mt-2">{verificationError}</p>
                    )}
                  </form>
                )}
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleBankDetailsSubmit} className="border border-gray-700 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-400">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  value={formBankDetails.accountHolderName}
                  onChange={handleBankDetailsChange}
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-400">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formBankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-400">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formBankDetails.bankName}
                  onChange={handleBankDetailsChange}
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-400">
                  Routing Number
                </label>
                <input
                  type="text"
                  id="routingNumber"
                  name="routingNumber"
                  value={formBankDetails.routingNumber}
                  onChange={handleBankDetailsChange}
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="accountType" className="block text-sm font-medium text-gray-400">
                  Account Type
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  value={formBankDetails.accountType}
                  onChange={handleBankDetailsChange}
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full p-2.5 focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="Checking">Checking</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-900/20 border border-amber-800 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-amber-300 text-sm">
                  Updating your bank details will require re-verification before you can request payouts.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Bank Details
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormBankDetails({ ...bankDetails })
                  setEditingBankDetails(false)
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Bank Transfer Payout */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Request Bank Transfer Payout</h2>

        <div className="border border-gray-700 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-4">
            <Bank className="h-5 w-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Bank Transfer</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">Transfer your incentives directly to your bank account</p>
          <div className="flex items-center text-xs text-gray-500 mb-1">
            <DollarSign className="h-3 w-3 mr-1" />
            <span>Min. Amount: $100</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>Processing Time: 3-5 business days</span>
          </div>
        </div>

        <form onSubmit={handlePayoutSubmit} className="border border-gray-700 rounded-lg p-4">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-1">
              Amount to Transfer
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                id="amount"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(e.target.value)}
                min={100}
                max={availableBalance}
                className="bg-gray-800 border border-gray-700 text-white rounded-lg block w-full pl-7 pr-12 py-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="0.00"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  onClick={() => setPayoutAmount(availableBalance.toString())}
                  className="text-purple-500 hover:text-purple-400 mr-3 text-sm"
                >
                  Max
                </button>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">Available: ${availableBalance.toLocaleString()}</p>
          </div>
          <button
            type="submit"
            disabled={!bankDetails.verified}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Request Payout
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          {!bankDetails.verified && (
            <div className="mt-3 p-3 bg-amber-900/20 border border-amber-800 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-amber-300 text-sm">
                  Your bank account must be verified before you can request payouts. Please complete the verification
                  process above.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Payout History */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Payout History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {payoutHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${item.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.reference}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.accountEnding}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout Information */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Payout Information</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Bank Verification</h3>
            <p className="text-gray-400">
              For security purposes, all bank accounts must be verified before payouts can be processed. Verification
              involves confirming two small deposits made to your account.
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Processing Times</h3>
            <p className="text-gray-400">
              Bank transfers typically take 3-5 business days to process. Payouts requested on weekends or holidays will
              be processed on the next business day.
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Minimum Payout</h3>
            <p className="text-gray-400">
              The minimum amount for a bank transfer payout is $100. You must have at least this amount in your
              available balance to request a payout.
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-2">Bank Information</h3>
            <p className="text-gray-400">
              Please ensure your bank details are accurate and up-to-date. Incorrect bank information may result in
              failed transfers or delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedeemPage


"use client"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import AuthScreen from "./components/AuthScreen"
import DashboardLayout from "./components/DashboardLayout"
import DashboardOverview from "./components/DashboardOverview"
import TransactionHistory from "./components/TransactionHistory"
import Candidates from "./components/Candidates"
import Earnings from "./components/Earnings"
import Settings from "./components/Settings"
import LifetimeEarnings from "./components/LifetimeEarnings"
import ThisMonthEarnings from "./components/ThisMonthEarnings"
import PendingWithdrawal from "./components/PendingWithdrawal"
import AvailableToWithdraw from "./components/AvailableToWithdraw"
import TotalRegistrations from "./components/TotalRegistrations"
import FullTimePlacements from "./components/FullTimePlacements"
import GigWorkersPlacements from "./components/GigWorkersPlacements"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthScreen />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="transactions" element={<TransactionHistory />} /> 
          <Route path="candidates" element={<Candidates />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="lifetime-earnings" element={<LifetimeEarnings />} />
          <Route path="this-month-earnings" element={<ThisMonthEarnings />} />
          <Route path="pending-withdrawal" element={<PendingWithdrawal />} />
          <Route path="available-to-withdraw" element={<AvailableToWithdraw />} />
          <Route path="total-registrations" element={<TotalRegistrations />} />
          <Route path="full-time-placements" element={<FullTimePlacements />} />
          <Route path="gig-workers-placed" element={<GigWorkersPlacements />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App


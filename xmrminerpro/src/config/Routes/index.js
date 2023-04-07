import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard, Home, Login, GettingStarted, Rewards, Support, Faq, PaymentThreshold, EmailSetting, ChangePassword   } from '../../pages/'



const Navigasi = () => {
    return (
        <Router>
                <Routes>
                    <Route exact path ="/" element={<Home />} />
                    <Route exact path ="/dashboard" element={<Dashboard />} />
                    <Route exact path ="/getting-started" element={<GettingStarted />} />
                    <Route exact path ="/login" element={<Login />} />
                    <Route exact path ="/rewards" element={<Rewards />} />
                    <Route exact path ="/support" element={<Support />} />
                    <Route exact path ="/faq" element={<Faq />} />
                    <Route exact path ="/payment-threshold" element={<PaymentThreshold />} />
                    <Route exact path ="/email-setting" element={<EmailSetting />} />
                    <Route exact path ="/change-password" element={<ChangePassword />} />
                </Routes>
        </Router>
    )       
}

export default Navigasi

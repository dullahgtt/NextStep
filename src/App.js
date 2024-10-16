// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SupportFinder from './components/SupportFinder';
import JobSystem from './components/JobSystem';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/support-finder" element={<SupportFinder />} />
                <Route path="/jobs" element={<JobSystem />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* New Dashboard Route */}
            </Routes>
        </Router>
    );
};

export default App;

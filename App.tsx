import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Account from './pages/Account';
import BottomNav from './components/BottomNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavPaths = ['/login', '/register'];
  const showNav = !hideNavPaths.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#0F0F0F] relative overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {children}
      </div>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          {/* Placeholders for other tabs */}
          <Route path="/activity" element={<div className="p-4 text-center mt-10">Activity Page (Coming Soon)</div>} />
          <Route path="/promotion" element={<div className="p-4 text-center mt-10">Promotion Page (Coming Soon)</div>} />
          <Route path="/wallet" element={<div className="p-4 text-center mt-10">Wallet Page (Coming Soon)</div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
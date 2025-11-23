import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Gift, Wallet, User, Activity } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-0 w-full max-w-md bg-[#1F1F1F] border-t border-gray-800 h-16 flex items-center justify-between px-2 z-50">
      <button 
        onClick={() => navigate('/home')}
        className={`flex flex-col items-center justify-center w-1/5 ${isActive('/home') ? 'text-[#D4AF37]' : 'text-gray-400'}`}
      >
        <Home size={24} fill={isActive('/home') ? "#D4AF37" : "none"} />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button 
        onClick={() => navigate('/activity')}
        className={`flex flex-col items-center justify-center w-1/5 ${isActive('/activity') ? 'text-[#D4AF37]' : 'text-gray-400'}`}
      >
        <Activity size={24} />
        <span className="text-xs mt-1">Activity</span>
      </button>

      {/* Center Promotion/Game Button */}
      <div className="relative w-1/5 flex justify-center">
        <button 
          onClick={() => navigate('/promotion')}
          className="absolute -top-10 bg-gradient-to-b from-[#F3C256] to-[#E99015] rounded-full p-1 shadow-lg shadow-orange-500/20 w-16 h-16 flex flex-col items-center justify-center border-4 border-[#1F1F1F]"
        >
          <Gift className="text-white mb-0.5" size={24} />
          <span className="text-[9px] text-white font-bold leading-tight">Get ₹300</span>
        </button>
      </div>

      <button 
        onClick={() => navigate('/wallet')}
        className={`flex flex-col items-center justify-center w-1/5 ${isActive('/wallet') ? 'text-[#D4AF37]' : 'text-gray-400'}`}
      >
        <Wallet size={24} />
        <span className="text-xs mt-1">Wallet</span>
      </button>

      <button 
        onClick={() => navigate('/account')}
        className={`flex flex-col items-center justify-center w-1/5 ${isActive('/account') ? 'text-[#D4AF37]' : 'text-gray-400'}`}
      >
        <User size={24} fill={isActive('/account') ? "#D4AF37" : "none"} />
        <span className="text-xs mt-1">Account</span>
      </button>
    </div>
  );
};

export default BottomNav;
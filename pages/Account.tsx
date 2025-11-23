import React from 'react';
import { Settings, Copy, RefreshCw, Wallet, Download, Upload, Gem, ShieldCheck, ChevronRight, List, FileText, Bell, Lock, Headphones, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F0F0F] min-h-screen pb-10">
      {/* Header Profile Section */}
      <div className="bg-[#1F1F1F] p-5 pb-8 rounded-b-3xl shadow-lg relative">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                <img src="https://picsum.photos/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-white">MEMBERNNGG1N5P</h2>
                    <div className="bg-gray-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Gem size={12} className="text-blue-300" />
                        <span className="text-[10px] text-gray-300">VIP1</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 rounded">UID</span>
                    <span className="text-gray-300 text-sm font-mono">769868</span>
                    <Copy size={12} className="text-gray-400 cursor-pointer" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Last login: 2025-11-23 21:45:26</p>
            </div>
        </div>
        
        {/* Balance Card */}
        <div className="bg-[#2A2A2A] rounded-2xl p-4 mt-2">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <p className="text-gray-400 text-xs">Total balance</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">₹0.02</h3>
                        <RefreshCw size={14} className="text-white animate-spin-slow" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                        <Wallet size={20} />
                    </div>
                    <span className="text-[10px] text-gray-300">Wallet</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <Download size={20} />
                    </div>
                    <span className="text-[10px] text-gray-300">Deposit</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Upload size={20} />
                    </div>
                    <span className="text-[10px] text-gray-300">Withdraw</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                        <Gem size={20} />
                    </div>
                    <span className="text-[10px] text-gray-300">VIP</span>
                </div>
            </div>
        </div>
      </div>

      {/* Safe Box */}
      <div className="mx-4 mt-4 bg-[#1F1F1F] p-4 rounded-xl flex items-center gap-4 relative overflow-hidden">
         <div className="bg-[#F3C256] p-3 rounded-lg text-black z-10">
            <ShieldCheck size={24} />
         </div>
         <div className="z-10">
             <h4 className="text-white font-bold text-sm">Safe</h4>
             <p className="text-[10px] text-gray-400 leading-tight mt-1 max-w-[200px]">The daily interest rate is 0.1%, and the income is calculated once every 1 minutes.</p>
         </div>
      </div>

      {/* Grid Links */}
      <div className="grid grid-cols-2 gap-3 mx-4 mt-4">
         <div className="bg-[#1F1F1F] p-3 rounded-xl flex items-center gap-3">
             <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500">
                 <List size={20} />
             </div>
             <div>
                 <h4 className="text-sm font-bold text-white">Game History</h4>
                 <p className="text-[10px] text-gray-400">My game history</p>
             </div>
         </div>
         <div className="bg-[#1F1F1F] p-3 rounded-xl flex items-center gap-3">
             <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                 <FileText size={20} />
             </div>
             <div>
                 <h4 className="text-sm font-bold text-white">Transaction</h4>
                 <p className="text-[10px] text-gray-400">My transaction history</p>
             </div>
         </div>
         <div className="bg-[#1F1F1F] p-3 rounded-xl flex items-center gap-3">
             <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
                 <Download size={20} />
             </div>
             <div>
                 <h4 className="text-sm font-bold text-white">Deposit</h4>
                 <p className="text-[10px] text-gray-400">My deposit history</p>
             </div>
         </div>
         <div className="bg-[#1F1F1F] p-3 rounded-xl flex items-center gap-3">
             <div className="bg-orange-500/20 p-2 rounded-lg text-orange-500">
                 <Upload size={20} />
             </div>
             <div>
                 <h4 className="text-sm font-bold text-white">Withdraw</h4>
                 <p className="text-[10px] text-gray-400">My withdraw history</p>
             </div>
         </div>
      </div>

      {/* List Links */}
      <div className="mx-4 mt-4 bg-[#1F1F1F] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 active:bg-gray-800 transition">
            <div className="flex items-center gap-3">
                <Bell size={18} className="text-[#D4AF37]" />
                <span className="text-sm">Notification</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">10</span>
                <ChevronRight size={16} className="text-gray-500" />
            </div>
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-800 active:bg-gray-800 transition">
            <div className="flex items-center gap-3">
                <Gift size={18} className="text-[#D4AF37]" />
                <span className="text-sm">Gift</span>
            </div>
            <ChevronRight size={16} className="text-gray-500" />
        </div>
        <div className="flex items-center justify-between p-4 border-b border-gray-800 active:bg-gray-800 transition">
            <div className="flex items-center gap-3">
                <Lock size={18} className="text-[#D4AF37]" />
                <span className="text-sm">Change password</span>
            </div>
            <ChevronRight size={16} className="text-gray-500" />
        </div>
        <div className="flex items-center justify-between p-4 active:bg-gray-800 transition">
            <div className="flex items-center gap-3">
                <Headphones size={18} className="text-[#D4AF37]" />
                <span className="text-sm">Customer Service</span>
            </div>
            <ChevronRight size={16} className="text-gray-500" />
        </div>
      </div>

      <div className="mx-4 mt-6">
        <button 
            onClick={() => navigate('/login')}
            className="w-full border border-gray-600 text-gray-300 py-3 rounded-full font-bold hover:bg-gray-800 transition"
        >
            Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
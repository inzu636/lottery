import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Mail, Lock, EyeOff, Eye, ChevronLeft, Headphones } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#0F0F0F] min-h-screen flex flex-col p-6">
      <div className="flex justify-between items-center mb-6 text-white">
        <button onClick={() => navigate('/')}><ChevronLeft size={24} /></button>
        <div className="flex items-center gap-1 font-bold text-xl">
             <span className="italic text-2xl">6</span> CLUB
        </div>
        <div className="flex items-center gap-1 text-sm">
            <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-5 h-3.5 object-cover" />
            <span>EN</span>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Log in</h1>
        <p className="text-xs text-gray-400">Please log in with your phone number or email</p>
        <p className="text-xs text-gray-400">If you forget your password, please contact customer service</p>
      </div>

      {/* Tabs */}
      <div className="flex mb-8 border-b border-gray-800">
        <button 
            onClick={() => setMethod('phone')}
            className={`flex-1 flex flex-col items-center pb-2 transition-colors ${method === 'phone' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-500'}`}
        >
            <Smartphone size={24} className="mb-2" />
            <span className="text-sm font-bold">Phone number</span>
        </button>
        <button 
            onClick={() => setMethod('email')}
            className={`flex-1 flex flex-col items-center pb-2 transition-colors ${method === 'email' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-500'}`}
        >
            <Mail size={24} className="mb-2" />
            <span className="text-sm font-bold">Email Login</span>
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/home'); }} className="flex flex-col gap-6">
        
        {method === 'phone' ? (
            <div>
                <label className="flex items-center gap-2 text-white text-sm font-medium mb-3">
                    <Smartphone size={18} className="text-[#D4AF37]" /> Phone number
                </label>
                <div className="flex gap-3">
                    <div className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl flex items-center font-bold min-w-[80px] justify-between">
                        +91 <span className="text-xs ml-1">▼</span>
                    </div>
                    <input 
                        type="tel" 
                        placeholder="Please enter the phone number"
                        className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl flex-1 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-600"
                    />
                </div>
            </div>
        ) : (
            <div>
                <label className="flex items-center gap-2 text-white text-sm font-medium mb-3">
                    <Mail size={18} className="text-[#D4AF37]" /> Email
                </label>
                <input 
                    type="email" 
                    placeholder="Please enter the email"
                    className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-600"
                />
            </div>
        )}

        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-3">
                <Lock size={18} className="text-[#D4AF37]" /> Password
            </label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-600"
                />
                <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                <span className="text-xs">✓</span>
            </div>
            <span className="text-gray-400 text-sm">Remember password</span>
        </div>

        <button type="submit" className="bg-gradient-to-r from-[#FAE59F] to-[#C4933F] text-[#4A3419] font-bold py-3 rounded-full text-lg shadow-lg shadow-yellow-600/20 mt-4">
            Log in
        </button>

        <button 
            type="button" 
            onClick={() => navigate('/register')}
            className="border border-[#D4AF37] text-[#D4AF37] font-bold py-3 rounded-full text-lg hover:bg-[#D4AF37]/10 transition"
        >
            Register
        </button>

      </form>

      <div className="mt-auto flex justify-between items-center text-xs text-gray-400 pt-8">
        <button className="flex flex-col items-center gap-1">
            <Lock size={20} className="text-[#D4AF37]" />
            <span>Forgot password</span>
        </button>
        <button className="flex flex-col items-center gap-1">
            <Headphones size={20} className="text-[#D4AF37]" />
            <span>Customer Service</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
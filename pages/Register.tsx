import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Mail, Lock, EyeOff, Eye, ChevronLeft, ShieldCheck, UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#0F0F0F] min-h-screen flex flex-col p-6">
      <div className="flex justify-between items-center mb-6 text-white">
        <button onClick={() => navigate('/login')}><ChevronLeft size={24} /></button>
        <div className="flex items-center gap-1 font-bold text-xl">
             <span className="italic text-2xl">6</span> CLUB
        </div>
        <div className="flex items-center gap-1 text-sm">
            <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-5 h-3.5 object-cover" />
            <span>EN</span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Register</h1>
        <p className="text-xs text-gray-400">Please register by phone number or email</p>
      </div>

      <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center text-[#D4AF37]">
            <Smartphone size={24} className="mb-2" />
            <span className="text-sm font-bold border-b-2 border-[#D4AF37] pb-2 px-4">Register your phone</span>
          </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/home'); }} className="flex flex-col gap-5">
        
        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
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

        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
                <ShieldCheck size={18} className="text-[#D4AF37]" /> Verification Code
            </label>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Please enter the confirmation code"
                    className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-600 pr-24"
                />
                <button type="button" className="absolute right-2 top-1.5 bottom-1.5 bg-[#F3C256] text-black font-medium px-4 rounded-lg text-sm">
                    Send
                </button>
            </div>
        </div>

        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
                <Lock size={18} className="text-[#D4AF37]" /> Set password
            </label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Set password"
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

        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
                <Lock size={18} className="text-[#D4AF37]" /> Confirm password
            </label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
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

        <div>
            <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
                <UserPlus size={18} className="text-[#D4AF37]" /> Invite code
            </label>
            <input 
                type="text" 
                placeholder="Please enter the invitation code"
                className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-600"
            />
        </div>

        <div className="flex items-start gap-2 mt-2">
            <div className="w-4 h-4 rounded-full border border-gray-500 mt-0.5"></div>
            <p className="text-xs text-gray-400">
                I have read and agree <span className="text-red-500">【Privacy Agreement】</span>
            </p>
        </div>

        <button type="submit" className="bg-gradient-to-r from-[#FAE59F] to-[#C4933F] text-[#4A3419] font-bold py-3 rounded-full text-lg shadow-lg shadow-yellow-600/20 mt-4">
            Register
        </button>

        <button 
            type="button" 
            onClick={() => navigate('/login')}
            className="border border-gray-700 text-white font-medium py-3 rounded-full text-sm mt-2 flex items-center justify-center gap-1 hover:bg-gray-800 transition"
        >
            I have an account <span className="text-[#D4AF37] font-bold">Login</span>
        </button>

      </form>
    </div>
  );
};

export default Register;
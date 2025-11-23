import React, { useState, useEffect } from 'react';
import { Volume2, HelpCircle, FileText, ChevronRight, Clock, Trophy } from 'lucide-react';
import { GameHistoryItem } from '../types';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedGameType, setSelectedGameType] = useState<'30sec' | '1min' | '3min' | '5min'>('30sec');
  const [gameHistory, setGameHistory] = useState<GameHistoryItem[]>([]);
  
  // Fake game loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Generate new history item when timer hits 0
          const newItem: GameHistoryItem = {
            period: `20251123${1000 + gameHistory.length}`,
            number: Math.floor(Math.random() * 10),
            bigSmall: Math.random() > 0.5 ? 'Big' : 'Small',
            color: Math.random() > 0.6 ? 'Red' : (Math.random() > 0.3 ? 'Green' : 'Violet')
          };
          setGameHistory(prevH => [newItem, ...prevH].slice(0, 10));
          return 30; // Reset
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameHistory.length]);

  // Initial dummy data
  useEffect(() => {
    const initialHistory: GameHistoryItem[] = Array.from({ length: 5 }).map((_, i) => ({
      period: `20251123100${50 - i}`,
      number: Math.floor(Math.random() * 10),
      bigSmall: Math.random() > 0.5 ? 'Big' : 'Small',
      color: Math.random() > 0.6 ? 'Red' : (Math.random() > 0.3 ? 'Green' : 'Violet')
    }));
    setGameHistory(initialHistory);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return {
      m1: Math.floor(m / 10),
      m2: m % 10,
      s1: Math.floor(s / 10),
      s2: s % 10
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div className="bg-[#0F0F0F] min-h-screen pb-10">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#1F1F1F]">
        <div className="flex items-center gap-2">
           <div className="text-2xl font-bold text-white flex items-center">
            <span className="italic mr-1 text-3xl">6</span> CLUB
           </div>
        </div>
        <div className="flex gap-4">
           <div className="bg-[#2A2A2A] p-2 rounded-full"><Volume2 size={20} className="text-white" /></div>
           <div className="bg-[#2A2A2A] p-2 rounded-full"><HelpCircle size={20} className="text-white" /></div>
        </div>
      </header>

      {/* Wallet Balance */}
      <div className="m-4 p-6 rounded-2xl bg-[#1F1F1F] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Trophy size={100} className="text-white" />
        </div>
        <div className="relative z-10 text-center">
            <p className="text-gray-400 text-sm mb-1">Wallet balance</p>
            <h2 className="text-3xl font-bold text-white">₹0.00</h2>
            <div className="flex justify-center gap-4 mt-6">
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-full shadow-lg shadow-red-500/30 transition">Withdraw</button>
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-full shadow-lg shadow-green-500/30 transition">Deposit</button>
            </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mx-4 mb-4 bg-[#1F1F1F] rounded-full py-2 px-4 flex items-center gap-2 border border-yellow-600/30">
        <Volume2 size={16} className="text-[#D4AF37]" />
        <div className="flex-1 overflow-hidden whitespace-nowrap">
             <p className="text-xs text-[#D4AF37] animate-marquee">
                We are currently facing issues with the UPI payment system of all the banks in India. Please be patient.
             </p>
        </div>
        <button className="bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-bold">Detail</button>
      </div>

      {/* Game Type Selection */}
      <div className="grid grid-cols-4 gap-2 mx-4 mb-6">
        {['30sec', '1 Min', '3 Min', '5 Min'].map((type, idx) => {
            const isActive = (idx === 0 && selectedGameType === '30sec') || (idx > 0 && false); // Simplified logic
            return (
                <button 
                    key={type}
                    onClick={() => idx === 0 && setSelectedGameType('30sec')}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl transition ${isActive ? 'bg-gradient-to-b from-[#F3C256] to-[#E99015] text-black' : 'bg-[#2A2A2A] text-gray-400'}`}
                >
                    <Clock size={20} className="mb-1" />
                    <span className="text-[10px] font-bold">WinGo</span>
                    <span className="text-[10px]">{type}</span>
                </button>
            )
        })}
      </div>

      {/* Game Area */}
      <div className="mx-4 bg-[#1F1F1F] rounded-2xl p-4 relative overflow-hidden">
         {/* Dotted decorative line */}
         <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l border-dashed border-[#333] transform -translate-x-1/2"></div>
         <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#0F0F0F] rounded-full transform -translate-y-1/2"></div>
         <div className="absolute -right-3 top-1/2 w-6 h-6 bg-[#0F0F0F] rounded-full transform -translate-y-1/2"></div>

         <div className="flex justify-between items-start mb-6">
            <div className="w-[45%]">
                <div className="flex items-center gap-1 text-white border border-white/20 rounded px-2 py-1 w-fit mb-2">
                    <FileText size={12} />
                    <span className="text-xs">How to play</span>
                </div>
                <p className="text-sm text-gray-400">WinGo 30sec</p>
                <div className="flex gap-2 mt-2">
                    {[1,2,3,4,5].map(n => (
                        <div key={n} className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] bg-white text-black font-bold`}>{n}</div>
                    ))}
                </div>
            </div>
            <div className="w-[45%] text-right">
                <p className="text-sm text-[#D4AF37] font-bold mb-1">Time remaining</p>
                <div className="flex justify-end gap-1 text-white font-mono font-bold text-xl">
                    <div className="bg-[#2A2A2A] p-1 rounded w-8 text-center">0</div>
                    <div className="bg-[#2A2A2A] p-1 rounded w-8 text-center">0</div>
                    <span className="text-[#D4AF37]">:</span>
                    <div className="bg-[#2A2A2A] p-1 rounded w-8 text-center">{time.s1}</div>
                    <div className="bg-[#2A2A2A] p-1 rounded w-8 text-center">{time.s2}</div>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-mono">20251123100052633</p>
            </div>
         </div>

         {/* Betting Buttons */}
         <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#28C76F] hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-green-500/20">Green</button>
            <button className="flex-1 bg-[#8256D0] hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-500/20">Violet</button>
            <button className="flex-1 bg-[#FF4D4D] hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-500/20">Red</button>
         </div>

         {/* Number Grid */}
         <div className="bg-[#0F0F0F] p-4 rounded-xl mb-6">
             <div className="grid grid-cols-5 gap-3">
                {[0,1,2,3,4,5,6,7,8,9].map(num => {
                    let colorClass = 'bg-gray-700';
                    if ([0, 5].includes(num)) colorClass = 'bg-gradient-to-br from-purple-500 to-purple-700'; // Violet mixed
                    else if ([1, 3, 7, 9].includes(num)) colorClass = 'bg-green-500';
                    else colorClass = 'bg-red-500';

                    if (num === 0) colorClass = 'bg-gradient-to-r from-red-500 via-purple-500 to-purple-500';
                    if (num === 5) colorClass = 'bg-gradient-to-r from-green-500 via-purple-500 to-purple-500';

                    return (
                        <button key={num} className={`${colorClass} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mx-auto`}>
                            {num}
                        </button>
                    )
                })}
             </div>
         </div>

         {/* Controls */}
         <div className="flex gap-2 mb-4">
             <button className="border border-[#D4AF37] text-[#D4AF37] px-4 py-1 rounded hover:bg-[#D4AF37]/10 text-sm">Random</button>
             {[1, 5, 10, 20, 50, 100].map(x => (
                 <button key={x} className={`flex-1 bg-[#2A2A2A] text-gray-400 text-xs rounded py-1.5 hover:bg-[#333] ${x === 1 ? 'bg-green-600 text-white' : ''}`}>X{x}</button>
             ))}
         </div>

         <div className="flex gap-0 rounded-xl overflow-hidden mb-2">
            <button className="flex-1 bg-[#F3C256] text-brown-900 font-bold py-3 text-lg hover:bg-[#D4AF37]">Big</button>
            <button className="flex-1 bg-[#4A90E2] text-white font-bold py-3 text-lg hover:bg-blue-600">Small</button>
         </div>
      </div>

      {/* History Tabs */}
      <div className="mx-4 mt-6">
        <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-gradient-to-r from-[#F3C256] to-[#E99015] text-black font-bold py-2 rounded-lg text-sm">Game history</button>
            <button className="flex-1 bg-[#2A2A2A] text-gray-400 font-bold py-2 rounded-lg text-sm">Chart</button>
            <button className="flex-1 bg-[#2A2A2A] text-gray-400 font-bold py-2 rounded-lg text-sm">Follow Strategy</button>
        </div>

        {/* History Table */}
        <div className="bg-[#1F1F1F] rounded-t-xl overflow-hidden">
            <div className="grid grid-cols-4 bg-[#E99015] text-black font-bold text-xs p-3">
                <div>Period</div>
                <div className="text-center">Number</div>
                <div className="text-center">Big Small</div>
                <div className="text-center">Color</div>
            </div>
            {gameHistory.map((item, idx) => (
                <div key={idx} className="grid grid-cols-4 p-3 border-b border-gray-800 text-xs items-center">
                    <div className="text-gray-400">{item.period}</div>
                    <div className={`text-center font-bold text-lg ${
                        item.color === 'Green' ? 'text-green-500' : 
                        item.color === 'Red' ? 'text-red-500' : 'text-purple-500'
                    }`}>{item.number}</div>
                    <div className="text-center text-gray-300">{item.bigSmall}</div>
                    <div className="flex justify-center gap-1">
                        {item.color === 'Green' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                        {item.color === 'Red' && <div className="w-3 h-3 rounded-full bg-red-500"></div>}
                        {item.color === 'Violet' && <div className="w-3 h-3 rounded-full bg-purple-500"></div>}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
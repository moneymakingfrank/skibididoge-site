import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './emojiRain.css'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

function App() {
  const playFlush = () => {
    console.log('Flush triggered');
    const audio = new Audio('/flush.mp3');
    audio.play().catch((e) => console.error('Audio failed:', e));
  };

  const [flushCount, setFlushCount] = useState(18446);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlushCount(prev => prev + Math.floor(Math.random() * 3));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const tokenData = {
    labels: ['Liquidity Pool', 'Airdrops', 'Marketing', 'Founders'],
    datasets: [{
      label: 'Token Distribution',
      data: [50, 20, 15, 15],
      backgroundColor: ['#facc15', '#4ade80', '#38bdf8', '#f472b6'],
      borderColor: '#000',
      borderWidth: 1
    }]
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 overflow-hidden px-4">

      {/* EMOJI RAIN */}
      <div className="emoji-rain">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🚀🧻💩🚽
          </span>
        ))}
      </div>

      {/* LOGO + TITLE */}
      <img
        src="/logo.png"
        alt="SkibidiDoge Logo"
        className="w-48 drop-shadow-[0_0_25px_rgba(255,255,0,0.7)] animate-bounce cursor-pointer z-10"
        onClick={playFlush}
      />
      <h1 className="text-4xl font-bold z-10">Welcome to SkibidiDoge ($SKBD)</h1>
      <p className="text-lg z-10">The meme coin that's all vibes, no brakes.</p>

      {/* COMING SOON BANNER */}
      <div className="text-center bg-yellow-500 text-black px-6 py-4 rounded mt-8 z-10 max-w-lg">
        <h3 className="text-xl font-bold">🚧 Liquidity Not Live Yet</h3>
        <p className="mt-1">We're flushing soon. Follow us on Twitter for the exact launch time.</p>
      </div>

      {/* MEME METRICS */}
      <div className="text-center space-y-2 mt-10 z-10">
        <h2 className="text-2xl text-yellow-300 font-bold">📊 Meme Metrics</h2>
        <p>🧻 Toilets Flushed: {flushCount.toLocaleString()}</p>
        <p>👑 Degens Converted: 6,969</p>
        <p>🚀 Meme Velocity: 420m/s</p>
        <p>🐶 Doges Summoned: 1337</p>
      </div>

      {/* TEAM / MASCOT SECTION */}
      <div className="text-center mt-12 z-10">
        <h2 className="text-2xl text-green-400 font-bold">💀 Who the Flush Are We?</h2>
        <p className="mt-2">We’re the secret society of skid-marked memers. 🕶️</p>
        <p>No VC money. No roadmap. Just chaos and doge DNA.</p>
        <p className="mt-1">Mascot: Skibidi Shib 🐶💩</p>
      </div>

      {/* TOKEN DISTRIBUTION PIE CHART */}
      <div className="text-center mt-12 z-10 w-full max-w-lg">
        <h2 className="text-2xl text-purple-400 font-bold mb-4">📈 Token Distribution</h2>
        <Pie data={tokenData} />
      </div>

         {/* SOCIAL FOOTER */}
         <footer className="mt-12 mb-6 text-sm text-gray-400 z-10 flex flex-col items-center space-y-1">
        <p>© 2025 SkibidiDoge</p>
        <div className="flex space-x-4">
          <a className="underline hover:text-white" href="https://x.com/SkibidiDogeCoin" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a className="underline hover:text-white" href="https://t.me/SkibidiDogeCoin" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </footer>
    </div>  // CLOSES THE MAIN APP DIV
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
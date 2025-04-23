import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './emojiRain.css'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import RichList from "../components/RichList";

ChartJS.register(ArcElement, Tooltip, Legend)

function App() {
  const [flushCount, setFlushCount] = useState(18446)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [launchLive, setLaunchLive] = useState(false)
  const [hasExploded, setHasExploded] = useState(false)


  const playFlush = () => {
    const audio = new Audio('/flush.mp3')
    audio.play().catch((e) => console.error('Audio failed:', e))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFlushCount(prev => prev + Math.floor(Math.random() * 3))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const launchDate = new Date('2025-05-06T12:00:00-04:00')
    const interval = setInterval(() => {
      const now = new Date()
      const diff = launchDate - now

      if (diff <= 0) {
        clearInterval(interval)
        setLaunchLive(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      
        if (!hasExploded) {
          setHasExploded(true)
          playFlush()
          document.body.classList.add('bg-flush-launch', 'shake-screen')
      
          // Remove shake after 1s
          setTimeout(() => {
            document.body.classList.remove('shake-screen')
          }, 1000)
        }      
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const tokenData = {
    labels: ['Liquidity Pool', 'Airdrops', 'Marketing', 'Founders'],
    datasets: [
      {
        data: [50, 20, 15, 15],
        backgroundColor: ['#FFD700', '#32CD32', '#00BFFF', '#FF69B4'],
        borderColor: '#000',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className={`relative min-h-screen ${launchLive ? 'bg-flush-launch' : 'bg-black'} text-white flex flex-col items-center justify-start space-y-6 overflow-x-hidden overflow-y-auto p-4`}>

{hasExploded && (
  <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden animate-fade">
    {Array.from({ length: 60 }).map((_, i) => (
      <span
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
        className="absolute text-3xl animate-fall"
      >
        🚀🧻💩🔥
      </span>
    ))}
  </div>
)}

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
            🚀🧻💩🔥
          </span>
        ))}
      </div>

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="SkibidiDoge Logo"
        className={`w-48 drop-shadow-[0_0_25px_rgba(255,255,0,0.7)] ${launchLive ? 'animate-spin-slow scale-110' : 'animate-bounce'} cursor-pointer z-10`}
        onClick={playFlush}
      />

      {/* TITLE */}
      <h1 className="text-4xl font-bold z-10">Welcome to SkibidiDoge ($SKBD)</h1>
      <p className="text-lg z-10">The meme coin that's all vibes, no brakes.</p>

      {/* COUNTDOWN or LIVE */}
      {!launchLive ? (
        <>
          <div className="text-center z-10 mt-6 bg-black bg-opacity-60 p-4 rounded border border-yellow-500">
            <h2 className="text-xl font-bold text-yellow-300">⏳ Time 'til Flush</h2>
            <p className="text-lg mt-1">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
            <p className="text-xs text-gray-400 mt-1">Launching May 6, 2025 @ Noon EST</p>
          </div>

          <div className="text-center bg-yellow-500 text-black px-6 py-4 rounded mt-4 z-10 max-w-lg">
            🚽 Liquidity not live yet — stay tuned!
          </div>
        </>
      ) : (
        <div className="text-center bg-green-500 text-black px-6 py-4 rounded mt-4 z-10 max-w-lg animate-pulse">
          <h3 className="text-xl font-bold">🚀 LIVE NOW</h3>
          <p className="mt-1">SkibidiDoge is flushed and tradable.</p>
          <a
            href="https://raydium.io/swap/?input=sol&output=FoSgtE9zZk5Erw7Xh7nbn6kCw5BLTwAVkEDaPu7JikCi"
            target="_blank"
            className="mt-2 inline-block bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-900"
          >
            💸 Buy on Raydium
          </a>
        </div>
      )}

      {/* METRICS */}
      <div className="text-left mt-8 z-10">
        <h2 className="text-xl font-bold text-yellow-400">📊 Meme Metrics</h2>
        <p>🧻 Toilets Flushed: {flushCount.toLocaleString()}</p>
        <p>👑 Degens Converted: 6,969</p>
        <p>🚀 Meme Velocity: 420m/s</p>
        <p>🐶 Doges Summoned: 1337</p>
      </div>

      {/* WHO WE ARE */}
      <div className="text-center mt-8 z-10 max-w-lg">
        <h2 className="text-xl text-green-400 font-bold">💀 Who the Flush Are We?</h2>
        <p className="mt-2">We’re the secret society of skid-marked memers. 🕶️</p>
        <p>No VC money. No roadmap. Just chaos and doge DNA.</p>
        <p className="mt-1">Mascot: Skibidi Shib 🐶💩</p>
      </div>

{/* Token Rich List Table */}
<div className="w-full max-w-6xl mx-auto mt-16 px-4">
  <RichList />
</div>

      {/* FOOTER */}
      
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

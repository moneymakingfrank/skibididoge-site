import React, { useEffect, useState } from "react";
import RichList from "../components/RichList";
import confetti from "canvas-confetti";

const IndexPage = () => {
  const [isLive, setIsLive] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const launchTime = new Date("2025-04-27T00:00:00Z").getTime(); // SET YOUR LAUNCH TIME HERE

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsLive(true);

        // 🚽 Play flush
        const flush = new Audio("/flush.mp3");
        flush.play();

        // 🎉 Confetti
        confetti({ particleCount: 200, spread: 100 });

        // 💥 Screen shake
        document.body.classList.add("shake");

        // 🌈 Background color change
        document.body.classList.add("bg-flush-launch");

        // 💩 Emoji rain
        for (let i = 0; i < 30; i++) {
          const emoji = document.createElement("div");
          emoji.textContent = ["🚽", "🔥", "💩", "🚀"][Math.floor(Math.random() * 4)];
          emoji.className = "animate-fall text-3xl pointer-events-none";
          emoji.style.left = Math.random() * 100 + "vw";
          emoji.style.position = "fixed";
          emoji.style.zIndex = "9999";
          emoji.style.animationDelay = Math.random() * 2 + "s";
          document.body.appendChild(emoji);
          setTimeout(() => emoji.remove(), 5000);
        }

        setTimeout(() => document.body.classList.remove("shake"), 1000);
      } else {
        const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const m = Math.floor((distance / (1000 * 60)) % 60);
        const s = Math.floor((distance / 1000) % 60);
        setTimeLeft(`${h}h ${m}m ${s}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`min-h-screen ${isLive ? "bg-flush-launch" : "bg-black"} text-white p-6`}>
      <h1 className="text-4xl font-extrabold text-center mb-8">
        🚽 Welcome to SkibidiDoge
      </h1>

      {!isLive ? (
        <div className="text-center mb-8">
          <p className="text-lg font-mono mb-2">⏳ Countdown to Launch:</p>
          <p className="text-3xl font-bold text-yellow-400">{timeLeft}</p>
        </div>
      ) : (
        <div className="text-center mb-8">
          <a
            href="https://raydium.io/swap/?input=SOL&output=FoSgtE9zZk5Erw7Xh7nbn6kCw5BLTwAVkEDaPu7JikCi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-xl transition"
          >
            🚀 LIVE NOW – Buy $SKBD
          </a>
        </div>
      )}

      <RichList />

      <div className="text-center mt-12">
        <a
          href="/litepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 text-white font-bold bg-purple-600 hover:bg-purple-700 rounded-xl transition"
        >
          📄 Read Our Litepaper
        </a>
      </div>
    </main>
  );
};

export default IndexPage;

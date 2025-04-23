import React from "react";
import richList from "../data/richList.json";

interface RichListEntry {
  rank: number;
  label: string;
  address: string;
  amount: number;
  percent: number;
}

const rankEmojis = ["👑", "💰", "🧈", "🥉", "🔥"];

const RichList: React.FC = () => {
  const fmt = (n: number) =>
    Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

  return (
    <section id="rich-list" className="py-24 px-4 text-white bg-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* Glowing Gold Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,1)] animate-pulse">
          💰 Degen Token Rich List
        </h2>

        {/* Token Table */}
        <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-700 mb-16">
          <table className="min-w-full divide-y divide-gray-700 text-sm md:text-base mx-auto">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Wallet</th>
                <th className="px-4 py-3 text-left">Address</th>
                <th className="px-4 py-3 text-right text-green-400">$KBD</th>
                <th className="px-4 py-3 text-right">% Supply</th>
              </tr>
            </thead>
            <tbody className="bg-black divide-y divide-gray-800 text-left">
              {(richList as RichListEntry[]).map((e, i) => (
                <tr key={e.rank} className="hover:bg-gray-800 transition">
                  <td className="px-4 py-3 text-left">{rankEmojis[i]}</td>
                  <td className="px-4 py-3">{e.label}</td>
                  <td className="px-4 py-3 break-all">
                    <a
                      href={`https://solscan.io/account/${e.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      {e.address.slice(0, 6)}
                      <span className="mx-1 text-gray-400">...</span>
                      {e.address.slice(-4)}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-right text-green-400">
                    {fmt(e.amount)}
                  </td>
                  <td className="px-4 py-3 text-right font-bold">
                    {e.percent.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Social links */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14">
          <a
            href="https://x.com/SkibidiDogeCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl font-bold hover:text-blue-400 transition drop-shadow"
          >
            𝕏 Follow us on X
          </a>
          <a
            href="https://t.me/SkibidiDoge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl font-bold hover:text-blue-400 transition drop-shadow"
          >
            🔊 Telegram
          </a>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          © 2025 SkibidiDoge
        </p>
      </div>
    </section>
  );
};

export default RichList;

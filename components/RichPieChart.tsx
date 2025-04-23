import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Liquidity Wallet", value: 500 },
  { name: "Airdrop Wallet", value: 200 },
  { name: "Founder Wallet", value: 150 },
  { name: "Marketing Wallet", value: 100 },
  { name: "Burn Wallet", value: 50 },
];

const COLORS = ["#FFD700", "#00FF7F", "#1E90FF", "#FF69B4", "#FF4500"];

const RichPieChart: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
            outerRadius={120}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RichPieChart;

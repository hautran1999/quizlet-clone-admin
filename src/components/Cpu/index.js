import React from "react";
import { color } from "../../constants/theme";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Cpu.scss";

const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ",",
};

function Cpu({ usage = 0, space = 0, cpu = 0, data }) {
  return (
    <div className="cpu">
      <div className="number">
        <div className="item">
          <p>usage</p>
          <p>
            <CountUp end={usage} suffix="GB" {...countUpProps} />
          </p>
        </div>
        <div className="item">
          <p>space</p>
          <p>
            <CountUp end={space} suffix="GB" {...countUpProps} />
          </p>
        </div>
        <div className="item">
          <p>cpu</p>
          <p>
            <CountUp end={cpu} suffix="%" {...countUpProps} />
          </p>
        </div>
      </div>
      <ResponsiveContainer minHeight={300}>
        <LineChart data={data} margin={{ left: -40 }}>
          <XAxis
            dataKey="name"
            axisLine={{ stroke: color.borderBase, strokeWidth: 1 }}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid
            vertical={false}
            stroke={color.borderBase}
            strokeDasharray="3 3"
          />
          <Line
            type="monotone"
            connectNulls
            dataKey="cpu"
            stroke={color.blue}
            fill={color.blue}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Cpu;

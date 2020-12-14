import React from "react";
import { color } from "../../constants/theme";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Completed.scss";

function Completed({ data }) {
  return (
    <div className="sales">
      <div className="title">TEAM TOTAL COMPLETED</div>
      <ResponsiveContainer minHeight={360}>
        <AreaChart data={data}>
          <Legend
            verticalAlign="top"
            content={(prop) => {
              const { payload } = prop;
              return (
                <ul className="legend clearfix">
                  {payload.map((item, key) => (
                    <li key={key}>
                      <span
                        className="radiusdot"
                        style={{ background: item.color }}
                      />
                      {item.value}
                    </li>
                  ))}
                </ul>
              );
            }}
          />
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
          <Tooltip
            wrapperStyle={{
              border: "none",
              boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.05)",
            }}
            content={(content) => {
              const list = content.payload.map((item, key) => (
                <li key={key} className="tipitem">
                  <span
                    className="radiusdot"
                    style={{ background: item.color }}
                  />
                  {`${item.name}:${item.value}`}
                </li>
              ));
              return (
                <div className="tooltip">
                  <p className="tiptitle">{content.label}</p>
                  {content.payload && <ul>{list}</ul>}
                </div>
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="Task complete"
            stroke={color.grass}
            fill={color.grass}
            strokeWidth={2}
            dot={{ fill: "#fff" }}
            activeDot={{ r: 5, fill: "#fff", stroke: color.green }}
          />
          <Area
            type="monotone"
            dataKey="Cards Complete"
            stroke={color.sky}
            fill={color.sky}
            strokeWidth={2}
            dot={{ fill: "#fff" }}
            activeDot={{ r: 5, fill: "#fff", stroke: color.blue }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Completed;

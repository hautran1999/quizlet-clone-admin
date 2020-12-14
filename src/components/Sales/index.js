import React from "react";
import { color } from "../../constants/theme";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Sales.scss";

function Sales({ data }) {
  return (
    <div className="sales">
      <div className="title">Yearly Sales</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey="Food"
            stroke={color.purple}
            strokeWidth={3}
            dot={{ fill: color.purple }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Clothes"
            stroke={color.red}
            strokeWidth={3}
            dot={{ fill: color.red }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Electronics"
            stroke={color.green}
            strokeWidth={3}
            dot={{ fill: color.green }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sales;

import React from "react";
import { Card } from "antd";
import CountUp from "react-countup";
import { PieChartOutlined } from "@ant-design/icons";
import "./NumberCard.scss";

function NumberCard({ color, title, number, countUp }) {
  return (
    <Card className="numberCard" bordered={false} bodyStyle={{ padding: 24 }}>
      <span className="iconWarp" style={{ color }}>
        <PieChartOutlined />
      </span>
      <div className="content">
        <p className="title">{title || "No Title"}</p>
        <p className="number">
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...(countUp || {})}
          />
        </p>
      </div>
    </Card>
  );
}

export default NumberCard;

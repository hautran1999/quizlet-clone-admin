import React from "react";
import { Button, Avatar } from "antd";
import CountUp from "react-countup";
import { color } from "../../constants/theme";
import "./User.scss";

const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ",",
};

function User({ sales = 0, sold = 0 }) {
  return (
    <div className="user">
      <div className="header">
        <div className="headerinner">
          <Avatar size="large">A</Avatar>
          <h5 className="name">Asimo</h5>
        </div>
      </div>
      <div className="number">
        <div className="item">
          <p>EARNING SALES</p>
          <p style={{ color: color.green }}>
            <CountUp end={sales} prefix="$" {...countUpProps} />
          </p>
        </div>
        <div className="item">
          <p>ITEM SOLD</p>
          <p style={{ color: color.blue }}>
            <CountUp end={sold} {...countUpProps} />
          </p>
        </div>
      </div>
      <div className="footer">
        <Button type="ghost" size="large">
          View Profile
        </Button>
      </div>
    </div>
  );
}

export default User;

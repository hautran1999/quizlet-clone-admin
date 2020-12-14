import React from "react";
import { Spin } from "antd";
import "./Weather.scss";

function Weather({ city, icon, dateTime, temperature, name, loading }) {
  return (
    <Spin spinning={loading}>
      <div className="weather">
        <div className="left">
          <div
            className="icon"
            style={{
              backgroundImage: `url(${icon})`,
            }}
          />
          <p>{name}</p>
        </div>
        <div className="right">
          <h1 className="temperature">{`${temperature}°`}</h1>
          <p className="description">
            {city},{dateTime}
          </p>
        </div>
      </div>
    </Spin>
  );
}

export default Weather;

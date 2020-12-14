import React from "react";
import "./Quote.scss";

function Quote({ name, content, title, avatar }) {
  return (
    <div className="quote">
      <div className="inner">{content}</div>
      <div className="footer">
        <div className="description">
          <p>-{name}-</p>
          <p>{title}</p>
        </div>
        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
      </div>
    </div>
  );
}

export default Quote;

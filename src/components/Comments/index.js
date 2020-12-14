import React from "react";
import moment from "moment";
import { Table, Tag } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { color } from "../../constants/theme";
import "./Comments.scss";

const status = {
  1: {
    color: color.green,
    text: "APPROVED",
  },
  2: {
    color: color.yellow,
    text: "PENDING",
  },
  3: {
    color: color.red,
    text: "REJECTED",
  },
};

function Comments({ data }) {
  const columns = [
    {
      title: "avatar",
      width: 48,
      className: "avatarcolumn",
      render: () => <div className="avatar" />,
    },
    {
      title: "content",
      render: (record) => (
        <div>
          <h5 className="name">{record.name}</h5>
          <p className="content">{record.content}</p>
          <div className="daterow">
            <Tag color={status[record.status].color}>
              {status[record.status].text}
            </Tag>
            <span className="date">
              {moment(record.date).format("YYYY-MM-DD")}
            </span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="comments">
      <Table
        pagination={false}
        showHeader={false}
        columns={columns}
        rowKey="avatar"
        dataSource={data.filter((item, key) => key < 3)}
      />
    </div>
  );
}

export default Comments;

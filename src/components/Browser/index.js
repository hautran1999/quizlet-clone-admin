import React from "react";
import { Table, Tag } from "antd";
import { color } from "../../constants/theme";
import "./Browser.scss";

const status = {
  1: {
    color: color.green,
  },
  2: {
    color: color.red,
  },
  3: {
    color: color.blue,
  },
  4: {
    color: color.yellow,
  },
};

function Browser({ data }) {
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      className: "name",
    },
    {
      title: "percent",
      dataIndex: "percent",
      className: "percent",
      render: (text, it) => <Tag color={status[it.status].color}>{text}%</Tag>,
    },
  ];
  return (
    <Table
      pagination={false}
      showHeader={false}
      columns={columns}
      rowKey="name"
      dataSource={data}
    />
  );
}
export default Browser;

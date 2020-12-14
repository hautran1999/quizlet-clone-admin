import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Input, Table, Avatar } from "antd";
import { getUsers } from "../../service/users";

import "./Users.scss";

const { Search } = Input;

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
};
const TwoColProps = {
  ...ColProps,
  xl: 96,
};

const searchableColumns = ["displayName", "email"];

const Users = () => {
  const [data, setData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Avatar",
      key: "avatar",
      render: (record) => <Avatar src={record.photoURL} />,
    },
    {
      title: "Name",
      dataIndex: "displayName",
      key: "displayName",
      sorter: (a, b) => {
        return a.localeCompare(b);
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => {
        return a.localeCompare(b);
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Total Created",
      key: "created",
      render: (record) => <>{record.created.length}</>,
    },
    {
      title: "Total Learned",
      key: "learned",
      render: (record) => <>{record.learned.length}</>,
    },
    {
      title: "Total Watched",
      key: "watched",
      render: (record) => <>{record.watched.length}</>,
    },
    {
      title: "Operation",
      key: "operation",
      fixed: "right",
      render: (record) => (
        <Button type="primary" danger onClick={() => deleteData(record.uid)}>
          Delete
        </Button>
      ),
    },
  ];

  const getData = async () => {
    const result = await getUsers();
    setData(result);
    setSourceData(result);
    setLoading(false);
  };

  const deleteData = async (uid) => {
    setLoading(true);
    // await deleteUser(uid);
    await getData();
  };

  const isMatchedSearch = (string, searchKey) => {
    return String(string)
      .trim()
      .toLowerCase()
      .includes(searchKey.trim().toLowerCase());
  };

  const handleSearchWithKeyword = (searchKey) => {
    if (!searchKey) {
      setData(sourceData);
      return;
    }
    const newData = sourceData.filter((record) => {
      for (let column of searchableColumns) {
        if (isMatchedSearch(record[column], searchKey)) {
          return true;
        }
      }
      return false;
    });
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Form>
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 6 }} md={{ span: 12 }}>
            <Form.Item name="search">
              <Search
                placeholder={`Search`}
                onSearch={(value) => handleSearchWithKeyword(value)}
              />
            </Form.Item>
          </Col>
          <Col
            {...TwoColProps}
            xl={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row type="flex" align="middle" justify="space-between">
              <Button type="ghost">Create</Button>
            </Row>
          </Col>
        </Row>
      </Form>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => record.uid}
      />
    </div>
  );
};
export default Users;

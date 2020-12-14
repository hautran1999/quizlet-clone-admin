import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Form, Input, Table, Avatar } from "antd";
import { searchableColumns } from "./constants";
import { getFlashcards, deleteFlashcard } from "../../service/flashcards";

import "./Flashcards.scss";

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

const Flashcards = () => {
  const [data, setData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Create Time",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => {
        return a.title.localeCompare(b.title);
      },
    },
    {
      title: "Total",
      key: "total",
      render: (record) => <>{record.cards.length}</>,
      sorter: (a, b) => {
        return a.cards.length - b.cards.length;
      },
    },
    {
      title: "Avatar",
      key: "avatar",
      render: (record) => <Avatar src={record.author.photoURL} />,
    },
    {
      title: "Author",
      key: "author",
      render: (record) => <>{record.author.displayName}</>,
      sorter: (a, b) => {
        return (a?.author.displayName || "").localeCompare(
          b?.author.displayName || ""
        );
      },
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Operation",
      key: "operation",
      fixed: "right",
      render: (record) => {
        return (
          <>
            <Link to={`/product-detail?id=${record._id}`}>
              <Button type="primary" style={{ width: 75, margin: "1px 0px" }}>
                Detail
              </Button>
            </Link>
            <Button
              type="primary"
              danger
              onClick={() => deleteData(record.id)}
              style={{ width: 75, margin: "1px 0px" }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const getData = async () => {
    const result = await getFlashcards();
    setData(result);
    setSourceData(result);
    setLoading(false);
  };

  const deleteData = async (id) => {
    setLoading(true);
    await deleteFlashcard(id);
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
          {/* <Col {...ColProps} xl={{ span: 6 }} md={{ span: 12 }}>
            <Form.Item name="district">
              <Select placeholder="Select District" showSearch>
                {districts.map((district) => (
                  <Option value={district}>{district}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col> */}
          <Col
            {...TwoColProps}
            xl={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row type="flex" align="middle" justify="space-between">
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="margin-right"
                >
                  Search
                </Button>
                <Button>Reset</Button>
              </div>
              <Button type="ghost">Create</Button>
            </Row>
          </Col>
        </Row>
      </Form>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => record.id}
      />
    </div>
  );
};
export default Flashcards;

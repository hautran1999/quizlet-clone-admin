import React from "react";
import { Row, Col, Card } from "antd";
import { color } from "../../constants/theme";
import {
  sales,
  cpu,
  browser,
  user,
  comments,
  completed,
  recentSales,
  numbers,
  quote,
} from "./constants";
import {
  ScrollBar,
  NumberCard,
  Quote,
  Sales,
  // Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User,
} from "../../components";
import "./Dashboard.scss";

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: "#fff",
  },
};

const numberCards = numbers.map((item, key) => (
  <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>
));

const Dashboard = () => {
  console.log(comments);
  return (
    <div className="dashboard">
      <Row gutter={24}>
        {numberCards}
        <Col lg={18} md={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: "24px 36px 24px 0",
            }}
          >
            <Sales data={sales} />
          </Card>
        </Col>
        <Col lg={6} md={24}>
          <Row gutter={24}>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className="weather"
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: color.blue,
                }}
              >
                {/* <Weather
                  // {...weather}
                  loading={loading.effects["dashboard/queryWeather"]}
                /> */}
              </Card>
            </Col>
            <Col lg={24} md={12}>
              <Card
                bordered={false}
                className="quote"
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: color.peach,
                }}
              >
                <ScrollBar>
                  <Quote {...quote} />
                </ScrollBar>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <ScrollBar>
              <RecentSales data={recentSales} />
            </ScrollBar>
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <ScrollBar>
              <Comments data={comments} />
            </ScrollBar>
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: "24px 36px 24px 0",
            }}
          >
            <Completed data={completed} />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <Browser data={browser} />
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card bordered={false} {...bodyStyle}>
            <ScrollBar>
              <Cpu {...cpu} />
            </ScrollBar>
          </Card>
        </Col>
        <Col lg={8} md={24}>
          <Card
            bordered={false}
            bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}
          >
            <User {...user} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

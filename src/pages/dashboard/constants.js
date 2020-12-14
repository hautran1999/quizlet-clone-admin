import { color } from "../../constants/theme";

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const sales = Array(8)
  .fill({})
  .map((value, index) => ({
    name: 2013 + index,
    Clothes: Math.floor(Math.random() * 500) + 200,
    Food: Math.floor(Math.random() * 400) + 180,
    Electronics: Math.floor(Math.random() * 550) + 300,
  }));

const cpu = {
  usage: Math.floor(Math.random() * 600) + 50,
  space: 825,
  cpu: Math.floor(Math.random() * 90) + 40,
  data: Array(20)
    .fill({})
    .map(() => ({ cpu: Math.floor(Math.random() * 80) + 20 })),
};
const browser = [
  {
    name: "Google Chrome",
    percent: 43.3,
    status: 1,
  },
  {
    name: "Mozilla Firefox",
    percent: 33.4,
    status: 2,
  },
  {
    name: "Apple Safari",
    percent: 34.6,
    status: 3,
  },
  {
    name: "Internet Explorer",
    percent: 12.3,
    status: 4,
  },
  {
    name: "Opera Mini",
    percent: 3.3,
    status: 1,
  },
  {
    name: "Chromium",
    percent: 2.53,
    status: 1,
  },
];
const user = {
  name: "github",
  sales: 3241,
  sold: 3556,
};
const completed = Array(12)
  .fill({})
  .map((value, index) => ({
    name: 2009 + index,
    "Task complete": Math.floor(Math.random() * 1000) + 200,
    "Cards Complete": Math.floor(Math.random() * 1000) + 200,
  }));

const comments = Array(5)
  .fill({})
  .map(() => ({
    name: "@last",
    status: Math.floor(Math.random() * 3) + 1,
    content: "@sentence",
    date: randomDate(new Date(2019, 0, 1), new Date()).toLocaleDateString(
      "en-US"
    ),
  }));

const recentSales = Array(36)
  .fill({})
  .map((value, index) => ({
    id: index + 1,
    name: "@last",
    status: Math.floor(Math.random() * 4) + 1,
    date: randomDate(new Date(2019, 0, 1), new Date()),
    price: Math.floor(Math.random() * 200) + 10,
  }));

const quote = {
  name: "Asimo",
  title: "Graphic Designer",
  content:
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  avatar:
    "//cdn.antd-admin.zuiidea.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236",
};
const numbers = [
  {
    icon: "pay-circle-o",
    color: color.green,
    title: "Online Review",
    number: 2781,
  },
  {
    icon: "team",
    color: color.blue,
    title: "New Customers",
    number: 3241,
  },
  {
    icon: "message",
    color: color.purple,
    title: "Active Projects",
    number: 253,
  },
  {
    icon: "shopping-cart",
    color: color.red,
    title: "Referrals",
    number: 4324,
  },
];

export {
  sales,
  cpu,
  browser,
  user,
  comments,
  completed,
  recentSales,
  numbers,
  quote,
};

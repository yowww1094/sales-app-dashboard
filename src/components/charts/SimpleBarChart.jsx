import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

const data = [
  {
    month: "January",
    cashAmt: 2400,
    bankAmt: 5000,
  },
  {
    month: "Febuary",
    cashAmt: 2210,
    bankAmt: 7000,
  },
  {
    month: "March",
    cashAmt: 2290,
    bankAmt: 0,
  },
  {
    month: "April",
    cashAmt: 2000,
    bankAmt: 5000,
  },
  {
    month: "May",
    cashAmt: 2181,
    bankAmt: 5000,
  },
  {
    month: "June",
    cashAmt: 2500,
    bankAmt: 5000,
  },
  {
    month: "July",
    cashAmt: 2100,
    bankAmt: 5000,
  },
  {
    month: "September",
    cashAmt: 2100,
    bankAmt: 5000,
  },
  {
    month: "October",
    cashAmt: 2100,
    bankAmt: 5000,
  },
  {
    month: "November",
    cashAmt: 2100,
    bankAmt: 5000,
  },
  {
    month: "December",
    cashAmt: 2100,
    bankAmt: 5000,
  },
];

const Chart = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h3>Cash/Bank Balance Analytics</h3>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" aspect={4/1}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" className="axis-title" />
              <YAxis />
              <ReferenceLine y={0} stroke="#000" />
              <Tooltip />
              <Bar dataKey="cashAmt" fill="#4352c0" label={{ position: "top" }} padding={{ left: 20, right: 20 }}/>
              <Bar dataKey="bankAmt" fill="#50a82d" label={{ position: "top" }} padding={{ left: 20, right: 20 }}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.77);
  border-radius: 5px;
  .title {
    margin-bottom: 15px;
  }
  .axis-title {
    font-size: 14px;
  }
`;

export default Chart;

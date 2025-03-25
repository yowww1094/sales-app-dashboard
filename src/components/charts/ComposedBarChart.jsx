import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "January",
    sales: 4000,
    pv: 2400,
  },
  {
    month: "Febuary",
    sales: -3000,
    purchases: 1398,
  },
  {
    month: "March",
    sales: -2000,
    purchases: -9800,
  },
  {
    month: "April",
    sales: 2780,
    purchases: 3908,
  },
  {
    month: "May",
    sales: -1890,
    purchases: 4800,
  },
  {
    month: "June",
    sales: 2390,
    purchases: -3800,
  },
  {
    month: "July",
    sales: 3490,
    purchases: 4300,
  },
  {
    month: "Aout",
    sales: 3490,
    purchases: 4300,
  },
  {
    month: "September",
    sales: 3490,
    purchases: 4300,
  },
  {
    month: "October",
    sales: 3490,
    purchases: 4300,
  },
  {
    month: "November",
    sales: 3490,
    purchases: 4300,
  },
  {
    month: "December",
    sales: 3490,
    purchases: 4300,
  },
];

const ComposedBarChart = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h3>Cash Desk Analytics</h3>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%">
            <BarChart data={data} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="sales" fill="#8884d8" />
              <Bar dataKey="purchases" fill="#82ca9d" />
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
    font-size: 12px;
  }
`;

export default ComposedBarChart;

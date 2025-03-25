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
    amt: 2400,
  },
  {
    month: "Febuary",
    amt: 2210,
  },
  {
    month: "March",
    amt: 2290,
  },
  {
    month: "April",
    amt: 2000,
  },
  {
    month: "May",
    amt: 2181,
  },
  {
    month: "June",
    amt: 2500,
  },
  {
    month: "July",
    amt: 2100,
  },
  {
    month: "September",
    amt: 2100,
  },
  {
    month: "October",
    amt: 2100,
  },
  {
    month: "November",
    amt: 2100,
  },
  {
    month: "December",
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h3>Cash Desk Analytics</h3>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%"  aspect={2/1}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" className="axis-title" />
              {/* <YAxis /> */}
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="amt" fill="#4352c0" label={{ position: "top" }} padding={{ left: 20, right: 20 }}/>
              <Tooltip />
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

export default Chart;

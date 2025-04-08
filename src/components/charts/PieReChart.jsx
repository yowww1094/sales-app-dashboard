import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieReChart = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h3>Most sold products</h3>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" aspect={3/2}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                //label={renderCustomizedLabel}
                label='name'
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.77);
  border-radius: 5px;
  .title {
    margin-bottom: 15px;
  }
`;

export default PieReChart;

import React from 'react'
import styled from 'styled-components'
import InsightsCard from '../components/InsightsCard';
import SimpleBarChart from '../components/charts/SimpleBarChart';
import ComposedBarChart from '../components/charts/ComposedBarChart';
import PieReChart from '../components/charts/PieReChart'

const insightsData = [
  {
    title: 'Cash Desk',
    amount: 9500,
    monthRate: -1500,
  },
  {
    title: 'Cash Bank',
    amount: 18000,
    monthRate: 2000,
  },
  {
    title: 'Sales',
    amount: 5500,
    monthRate: 2000,
  },
  {
    title: 'Purchases',
    amount: 2000,
    monthRate: -500,
  },
]
const Dashboard = () => {
  return (
    <>
      <Container>
        <div className="insights-warapper">
          {
            insightsData.map((data, key) => {
              return (
                <InsightsCard key={key} title={data.title} amount={data.amount} monthRate={data.monthRate}/>
              )
            })
          }
        </div>
        <div className="single-chart">
          <SimpleBarChart />
        </div>
        <div className="double-charts">
          <ComposedBarChart />
          <PieReChart/>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 25px;
  padding: 0px 50px;
  .insights-warapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .double-charts{
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 70% calc(30% - 30px);
    gap: 30px;
  }
`;

export default Dashboard
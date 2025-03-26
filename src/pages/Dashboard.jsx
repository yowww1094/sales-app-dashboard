import React from 'react'
import styled from 'styled-components'
import InsightsCard from '../components/InsightsCard';
import SimpleBarChart from '../components/charts/SimpleBarChart';
import ComposedBarChart from '../components/charts/ComposedBarChart';
import PieReChart from '../components/charts/PieReChart'
const Dashboard = () => {
  return (
    <>
      <Container>
        <div className="insights-warapper">
          <InsightsCard />
          <InsightsCard />
          <InsightsCard />
          <InsightsCard />
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
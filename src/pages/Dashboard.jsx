import React from 'react'
import styled from 'styled-components'
import InsightsCard from '../components/InsightsCard';
import SimpleBarChart from '../components/charts/SimpleBarChart';
import ComposedBarChart from '../components/charts/ComposedBarChart';

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
        <div className="charts">
          <SimpleBarChart />
          <SimpleBarChart />
        </div>
        <div className="charts">
          <ComposedBarChart />
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
  .charts{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
  }
`;

export default Dashboard
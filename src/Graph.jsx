import React from 'react'
import Chart from 'react-google-charts'

const Graph = ({ data }) => {
  return (
    <div>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType='LineChart'
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: 'Logistic Map',
          explorer: { axis: 'horizontal', keepInBounds: true },
          hAxis: {
            title: 'Year',
          },
          vAxis: {
            minValue: '0',
            title: 'Population',
          },
        }}
      />
    </div>
  )
}

export default Graph

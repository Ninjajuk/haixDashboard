import React from 'react';
import Plot from 'react-plotly.js';

const GroupedBarChart = () => {
  const trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [55, 40, 86],
    name: 'SF Zoo',
    type: 'bar',
    marker: { width: 1 } //width of the bar
  };

  const trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29,40,55,78,88,96],
    name: 'LA Zoo',
    type: 'bar'
  };

  const data = [trace1, trace2];

  return (
    <Plot
      data={data}
      layout={{
        title: 'Grouped Bar Chart',
        barmode: 'group', // Set barmode to 'group' for grouped bar chart
        xaxis: { title: 'Animals' },
        yaxis: { title: 'Number of Animals' }
      }}
    />
  );
};

export default GroupedBarChart;

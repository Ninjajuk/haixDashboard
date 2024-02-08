import React from 'react';
import Plot from 'react-plotly.js';

const ScatterLinePlot = () => {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [2, 8, 5, 12],
    mode: 'markers',
    name: 'Scatter'
  };

  const trace2 = {
    x: [2, 3, 4, 5],
    y: [0, 5, 11, 0],
    mode: 'lines',
    name: 'Lines'
  };

  const data = [trace1, trace2];

  const layout = {
    title: 'Adding Names to Line and Scatter Plot'
  };

  return (
    <Plot
    data={data}
    layout={{
      title: 'Sentiment Category Analysis',
      barmode: 'group',
      xaxis: { title: 'Days' },
      yaxis: { title: 'Number of Mentions' },
      autosize: true, // Set autosize to true
      margin: {
        l: 50,
        r: 10,
        b: 70,
        t: 70,
        pad: 5
      },
    }}
    style={{ width: '100%', height: '100%' }} // Set width and height to 100%
    />
  );
};

export default ScatterLinePlot;

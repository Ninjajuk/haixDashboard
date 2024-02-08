import React from 'react';
import Plot from 'react-plotly.js';

const SingleLineGraph = () => {
  // Sample data
  const xValues = [0, 1, 2, 3, 4, 5];

  const colors = ['blue', 'green', 'red', ];

  // Create traces for each line
  const traces = xValues.map((x, index) => ({
    x: [x, x + 1],
    mode: 'lines',
    line: {
      color: colors[index],
    },
    name: `Line ${index + 1}`,
  }));

  return (
    <Plot
      data={traces}
      layout={{
        title: 'Social media sentimental timeline',
        xaxis: { title: 'X Axis' },
        autosize: true,
        margin: {
          l: 40,
          r: 40,
          b: 40,
          t: 60,
        },
        height: 256, // Initial height, can be adjusted as per your requirement
      }}
      style={{ width: '100%', height: '100%' }}
      config={{ responsive: true }}
    />
  );
};

export default SingleLineGraph;

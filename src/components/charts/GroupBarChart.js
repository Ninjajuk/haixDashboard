
import React from 'react';
import Plot from 'react-plotly.js';

const GroupedBarChart = () => {
    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4'];
    const negativeValues = [10, 5, 8, 3];
    const neutralValues = [5, 8, 6, 9];
    const positiveValues = [8, 12, 10, 15];
  
    // Define colors for each sentiment category
    const colors = {
      negative: 'red',
      neutral: 'gray',
      positive: 'green',
    };
  
    // Create traces for each sentiment category
    const traceNegative = {
      x: days,
      y: negativeValues,
      name: 'Negative',
      type: 'bar',
      marker: { color: colors.negative, width: -4 },
    };
  
    const traceNeutral = {
      x: days,
      y: neutralValues,
      name: 'Neutral',
      type: 'bar',
      marker: { color: colors.neutral, width: 0.1 },
    };
  
    const tracePositive = {
      x: days,
      y: positiveValues,
      name: 'Positive',
      type: 'bar',
      marker: { color: colors.positive, width: 0.5 },
    };
  
    const data = [traceNegative, traceNeutral, tracePositive];
  
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

export default GroupedBarChart;


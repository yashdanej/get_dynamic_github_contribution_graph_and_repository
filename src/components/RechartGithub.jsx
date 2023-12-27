import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import './rechartgithub.css';

export default class RechartGithub extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-reference-line-edjv0';

  render() {
    const { apiResponse } = this.props;
    console.log('apiResponse', apiResponse);

    const data = apiResponse?.weeks?.map((week) =>
      week.contributionDays.map((day) => ({
        name: day.date, // Assuming 'date' is the property you want to display on the X-axis
        contributionCount: day.contributionCount,
      }))
    );

    console.log('data', data);

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data.flat()} // Flatten the nested arrays
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={9800} label="Max" stroke="red" />
          {/* You can add other ReferenceLines as needed */}
          <Line type="monotone" dataKey="contributionCount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

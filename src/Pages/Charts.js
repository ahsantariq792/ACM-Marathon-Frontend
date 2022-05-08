import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Task 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Task 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Task 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Task 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Task 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Charts() {

  return (
    <>
      <div className="title m-4">
        <h2>CHART</h2>
      </div>

      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    </>
  );
}

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: '',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: '',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: '',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: '',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: '',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: '',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
        <p>Umumiy</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content" style={{opacity: '0'}}>{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
      </div>
    );
  }
}

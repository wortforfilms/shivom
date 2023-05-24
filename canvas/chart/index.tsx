import React from "react";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import RadarChart from "./Radar";

const App: React.FC = () => {
  const data = [12,12,12,12,12,12,12,12,12,12,11];
  const data0 = [1,12,112,92,52,12,12,12,12,2,11];
  const labels = ["A", "B", "C", "D", "E","F","G","H","I","J","K"];
  const data1 = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  return (
    <div>
      <h1>Pie Chart Example</h1>
      <PieChart data={data} labels={labels} />
  const data = [12,12,12,12,12,12,12,12,12,12,11];
      <h1>Dougnut Chart Example</h1>
      <DoughnutChart data={data} labels={labels} />
      <h1>Polar Area Chart Example</h1>

      <PolarAreaChart data={data0} labels={labels} />
      <h1>Radar Chart Example</h1>
      <RadarChart data={data} labels={labels} />
    </div>
  );
};

export default App;

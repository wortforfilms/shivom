import React, { createRef, useLayoutEffect, useState } from "react";
import {
  Chart,
  ChartData,
  ChartType,
  ChartOptions,
  registerables
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
Chart.register(...registerables);

interface ChartProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}

Chart.defaults.font.family = "Libre Franklin";
Chart.defaults.color = "black";
Chart.defaults.aspectRatio = 3;
Chart.defaults.scale.ticks.padding = 8;
if (Chart.defaults.plugins.datalabels)
  Chart.defaults.plugins.datalabels.display = false;
if (Chart.defaults.elements.line) Chart.defaults.elements.line.tension = 0.4;

const TsChart: React.FC<ChartProps> = ({ type, data, options }) => {
  const chartRef = createRef<HTMLCanvasElement>();
  const [chart, setChart] = useState<Chart | undefined>(undefined);

  useLayoutEffect(() => {
    const chartElement = chartRef.current?.getContext("2d");
    if (!chartElement) return;
    if (chart) return;

    setChart(new Chart(chartElement, { type, data, options }));
  }, [chart, chartRef]);

  useLayoutEffect(() => {
    if (!chart) return;
    if (!data.datasets?.length) return;
    if (!data.labels?.length) return;

    chart.data = data;
    chart.update();
  }, [chart, data]);

  return <canvas ref={chartRef} />;
};

export default TsChart;

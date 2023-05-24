import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration, ChartOptions } from "chart.js/auto";

interface DoughnutChartProps {
  data: number[];
  labels: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const chartConfig: ChartConfiguration<"doughnut"> = {
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                ],
              },
            ],
          },
          options: {} as ChartOptions<"doughnut">,
        };

        chartInstanceRef.current = new Chart(ctx, chartConfig);
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;

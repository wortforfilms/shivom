import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration, ChartOptions } from "chart.js/auto";
import { motion } from "framer-motion";

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
                  // "rgba(255, 99, 132, 0.6)",
                  // "rgba(54, 162, 235, 0.6)",
                  // "rgba(255, 206, 86, 0.6)",
                  // "rgba(75, 192, 192, 0.6)",
                  // "rgba(153, 102, 255, 0.6)",

                    // pattern.draw('square', '#ff6384'),
                    // pattern.draw('circle', '#36a2eb'),
                    // pattern.draw('diamond', '#cc65fe'),
                    // pattern.draw('triangle', '#ffce56')

                ],
              },
            ],
          },
          options: {

              cutoutPercentage: "90%",
              elements: {
                center: {text: '90%',color: '#FF6384', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            }
          } as ChartOptions<"doughnut">,
        };

        chartInstanceRef.current = new Chart(ctx, chartConfig);
      }
    }
  }, [data, labels]);

  return <motion.canvas drag ref={chartRef} className="m-auto invert"/>;
};

export default DoughnutChart;

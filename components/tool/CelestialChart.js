import { useRef, useEffect } from "react";
import { geoCircle } from "d3-geo";
import { celestial, graticule, projection, star } from "d3-celestial";
// import "./CelestialChart.css";

// interface CelestialChartProps {
//   latitude: number;
//   longitude: number;
// }

const CelestialChart = ({ latitude, longitude }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a new celestial chart
    const chart = celestial();

    // Set the chart's projection to an azimuthal equidistant projection centered on the user's location
    chart.projection(projection().center([longitude, latitude]).clipAngle(90));

    // Add a graticule to the chart
    chart.add(graticule().step([15, 15]));

    // Add stars to the chart
    chart.add(star().limitMagnitude(6));

    // Add a circle representing the horizon to the chart
    chart.add(
      geoCircle()
        .center([longitude, latitude])
        .radius(90)
        .precision(0.5)
        .option("fill", "none")
        .option("stroke", "#fff")
        .option("stroke-width", 1)
    );

    // Render the chart in the div element
    chart(chartRef.current);
  }, [latitude, longitude]);

  return <div className="celestial-chart-container" ref={chartRef}></div>;
};

export default CelestialChart;

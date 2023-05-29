import TsChart from "./TsChart";

const exampleData = {
  labels: ['test','test'],
  datasets: [
    {
      data: [90, 10],
      backgroundColor: ["#20a599", "#ffffff"],
      weight: 0.2
    },
    {
      data: [90, 10],
      backgroundColor: ["#ffffff", "#455360"]
      // weight: 0.2 does not work when I do it here as well
    }
  ]
};

export default function TwoStatChartApp() {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        float: "none",
        position: "relative"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80px",
          position: "absolute",
          top: "50%",
          left: "0",
          marginTop: "-25px",
          lineHeight: "0px",
          textAlign: "center",
          zIndex: 10
        }}
      >
        <p style={{ height: "80px", fontSize: "50px" }}>90%</p>
      </div>
      <TsChart type={"doughnut"} data={exampleData} />
    </div>
  );
}

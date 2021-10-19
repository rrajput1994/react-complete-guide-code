import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => {
        return <ChartBar label={dataPoint.label} value={dataPoint.value} />;
      })}
    </div>
  );
};

export default Chart;

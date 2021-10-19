import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.chartDataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;

import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointsValues=props.datapoints.map(datapoint=>datapoint.value)
    const totalMaxValue=Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxValue={totalMaxValue}
          lable={datapoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;

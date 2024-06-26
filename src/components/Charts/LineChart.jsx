import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  Legend,
  Tooltip,
  DateTime,
  SeriesDirective,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {

  const {currentMode} = useStateContext()

  return (
    <div>
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{enable:true}}
        background={currentMode === "Dark" ? "33373E" : "#fff"}
      >
        <Inject services={[Legend, LineSeries, Tooltip, DateTime]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;

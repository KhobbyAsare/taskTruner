import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./TimeLine.scss";

const TimeLineChart = () => {
  const [series] = useState([
    {
      name: "Bob",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        // ... more data points for Bob
      ],
    },
    {
      name: "Joe",
      data: [
        {
          x: "Design",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        // ... more data points for Joe
      ],
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-17").getTime(),
          ],
        },
        // ... more data points for Dan
      ],
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-05-10").getTime(),
            new Date("2019-03-17").getTime(),
          ],
        },
        // ... more data points for Dan
      ],
    },
    {
      name: "Dan",
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-10").getTime(),
            new Date("2019-03-17").getTime(),
          ],
        },
        // ... more data points for Dan
      ],
    },
  ]);

  const [options] = useState<ApexOptions>({
    chart: {
      height: 450,
      type: "rangeBar",
      toolbar: {
        show: true, // Show the toolbar
        tools: {
          download: false, // Remove the download option
          selection: false, // Remove the selection option
          zoom: false, // Keep the zoom option
          zoomin: true, // Keep the zoom in option
          zoomout: true, // Keep the zoom out option
          pan: false, // Remove the pan option
          reset: false, // Keep the reset option to reset the zoom level
          customIcons: [], // Remove any custom icons
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      width: 1,
    },
    fill: {
      type: "solid",
      opacity: 0.6,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  });

  return (
    <section className="timeLine-wrapper">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={450}
        />
      </div>
      <div id="html-dist"></div>
    </section>
  );
};

export default TimeLineChart;

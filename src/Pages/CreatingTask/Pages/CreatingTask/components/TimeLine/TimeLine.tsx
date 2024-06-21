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
          pan: true, // Remove the pan option
          reset: false, // Keep the reset option to reset the zoom level
          customIcons: [], // Remove any custom icons
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "90%",
        borderRadius: 5,
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
      opacity: 0.8,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  });

  return (
    <section className="timeLine-wrapper">
      <div className="timeLine-header">
        <div className="profile-icons">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="assignee icon"
            />
            <span className="tooltip">Bob</span>
          </div>
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1717978321659-7b93b42d97ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="assignee icon"
            />
            <span className="tooltip">Joe</span>
          </div>
          <div className="profile">
            <img
              src="https://plus.unsplash.com/premium_photo-1708275670170-f92d0c82a1d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="assignee icon"
            />
            <span className="tooltip">Dan</span>
          </div>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={450}
          width="100%"
        />
      </div>
      <div id="html-dist"></div>
    </section>
  );
};

export default TimeLineChart;

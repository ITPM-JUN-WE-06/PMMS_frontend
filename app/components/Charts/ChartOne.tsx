import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "numeric",
    title: {
      text: "Grades",
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2); // Format the value as a number with 2 decimal places
      },
    },
    title: {
      text: "Density",
    },
  },
};

const generateBellCurveData = (mean: number, stdDev: number, count: number) => {
  const data: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const x = i;
    const y = (
      (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2))
    );
    data.push({ x, y });
  }
  return data;
};

interface ChartOneState {
  series: {
    name: string;
    data: { x: number; y: number }[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Bell Curve",
        data: generateBellCurveData(70, 10, 100), // Example: Mean of 70, Std Dev of 10
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;

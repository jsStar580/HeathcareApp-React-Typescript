import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { labels } from "@/constants/model/chart";
import { data1, data2 } from "@/constants/model/chart";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data1,
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
    {
      label: "Dataset 2",
      data: data2,
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: { display: false },
    x: {
      grid: {
        color: "#777",
      },
      ticks: {
        color: "white",
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Chart = () => {
  return <Line options={options} data={data} width={"100%"} />;
};

export default Chart;

import { Bar } from "react-chartjs-2";

const options = {
  datasets: {
    bar: { borderRadius: 4 },
    pointStyle: "circle",
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "gray",
        font: {
          weight: 500,
          size: 10,
        },
      },
    },
    y: {
      grid: {
        color: "#F2F2F6",
      },
      ticks: {
        color: "gray",
        beginAtZero: true,
        font: {
          weight: 500,
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      padding: 10,
      display: true,
      position: "bottom",
      align: "center",
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        padding: 30,
        color: "#000",
      },
    },
  },
};

const BarChart = ({ data }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;

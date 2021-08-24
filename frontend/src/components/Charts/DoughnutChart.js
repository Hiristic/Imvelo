import { Doughnut } from "react-chartjs-2";
import { useState } from "react";

const plugin1 = {
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.ctx;

      // Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var txt = centerConfig.text;
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      // Start with a base font of 30px
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = "400 1em Inter";
      ctx.fillStyle = "#A3A3B0";
      ctx.fillText("Risk", centerX, 75);

      ctx.font = "700 2.5em Inter";
      ctx.fillStyle = "#000";
      ctx.fillText(txt, centerX, 110);
    }
  },
};

const options = {
  datasets: {
    doughnut: {
      pointStyle: "circle",
      spacing: -15,
      borderRadius: 10,
      cutout: 80,
      borderWidth: 0,
      hoverOffset: 15,
    },
  },
  responsive: true,
  layout: {
    padding: {
      top: 10,
    },
  },
  plugins: {
    legend: {
      padding: 10,
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        padding: 30,
        color: "#000",
        font: {
          size: 12,
          weight: 600,
        },
      },
    },
  },
};

const DoughnutChart = ({ data }) => {
  const [riskNumber, setRiskNumber] = useState(0);

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    const number = data.datasets[datasetIndex].data[index];
    const label = data.labels[index];
    setRiskNumber(number);
  };

  return (
    <Doughnut
      getElementAtEvent={getElementAtEvent}
      data={data}
      plugins={[plugin1]}
      options={{
        ...options,
        elements: {
          center: {
            text: riskNumber,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;

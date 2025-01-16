import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const AUMDistributionByFundType: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Private Equity Funds", "Impact Investing Funds", "Venture Capital Funds"],
        datasets: [
          // Interquartile Range (Box)
          {
            label: "Interquartile Range",
            data: [
              { x: "Private Equity Funds", y: [100, 500, 1200, 1500] },
              { x: "Impact Investing Funds", y: [50, 300, 1000, 3000] },
              { x: "Venture Capital Funds", y: [200, 700, 1500, 2500] },
            ],
            backgroundColor: "rgba(75, 192, 192, 0.5)", // Box color
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          // Median Line
          {
            type: "line",
            label: "Median AUM",
            data: [500, 300, 700], // Median values for each fund type
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 1,
            pointBackgroundColor: "rgba(0, 0, 0, 1)",
            pointRadius: 5,
            fill: false,
          },
          // Mean AUM (Dotted Line)
          {
            type: "line",
            label: "Mean AUM",
            data: [600, 400, 800], // Mean values
            borderColor: "rgba(0, 0, 0, 0.6)",
            borderWidth: 1,
            borderDash: [6, 4],
            pointRadius: 0,
          },
          // Standard Deviation (Dot)
          {
            type: "scatter",
            label: "Standard Deviation",
            data: [
              { x: "Private Equity Funds", y: 1300 },
              { x: "Impact Investing Funds", y: 2800 },
              { x: "Venture Capital Funds", y: 2200 },
            ],
            backgroundColor: "rgba(0, 0, 255, 1)",
            borderColor: "rgba(0, 0, 255, 1)",
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              usePointStyle: true,
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const dataset = context.dataset.label;
                if (dataset === "Interquartile Range") {
                  const { y } = context.raw as { y: number[] };
                  const [min, q1, q3, max] = y;
                  return `Min: ${min}, Q1: ${q1}, Q3: ${q3}, Max: ${max}`;
                }
                return `${dataset}: ${context.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Fund Types",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              text: "AUM values in Millions (USD)",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
            },
            min: 0,
            max: 5000,
            ticks: {
              callback: (value) => `${value}M`,
            },
            grid: {
              color: "#E2E8F0",
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mx-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">AUM Distribution by Fund Type</h2>
      <p className="text-sm text-gray-500 mb-6">
        Comparing the range, average, and variability of AUM across Private Equity, Impact Investing, and Venture Capital funds.
      </p>

      <div className="h-[400px]">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AUMDistributionByFundType;

import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const FirmEstablishmentYears: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Before 2000",
          "2000 to 2004",
          "2005 to 2009",
          "2010 to 2014",
          "2015 to 2019",
          "2020 to 2024",
        ],
        datasets: [
          {
            label: "Percentage",
            data: [5, 8, 15, 25, 35, 40], // Replace with your data
            backgroundColor: "rgba(244, 67, 54, 0.2)", // Light red
            borderColor: "rgba(244, 67, 54, 1)", // Red
            borderWidth: 2,
            fill: true, // To enable the filled area under the line
            tension: 0.1, // To smooth the line curve
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hides legend
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw}%`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#E2E8F0", // Light gray
            },
            ticks: {
              color: "#4A5568", // Dark gray
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
            title: {
              display: true,
              text: "",
            },
          },
          y: {
            grid: {
              color: "#E2E8F0",
            },
            ticks: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
              callback: (value) => `${value}%`, // Adds % symbol
            },
            title: {
              display: true,
              text: "Percentage",
              color: "#4A5568",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mb-10">
      <h2 className="text-lg font-bold text-gray-800">Firm Establishment Years</h2>
      <p className="text-sm text-gray-500 mb-6">
        Trends in the establishment of VC firms over time.
      </p>
      <div>
        <canvas ref={chartRef}  />
      </div>
    </div>
  );
};

export default FirmEstablishmentYears;

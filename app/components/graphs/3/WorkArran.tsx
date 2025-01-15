import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const WorkArrangementTypes: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "5 days",
          "0 Days Remote",
          "2-4 Days Remote",
          "2 Days Remote",
        ],
        datasets: [
          {
            label: "Percentage",
            data: [20, 20, 40, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)", // Fully Remote
              "rgba(75, 192, 192, 0.5)", // In Office
              "rgba(54, 162, 235, 0.5)", // Hybrid Models
              "rgba(153, 102, 255, 0.5)", // Most Common Hybrid Option
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)", // Fully Remote
              "rgba(75, 192, 192, 1)", // In Office
              "rgba(54, 162, 235, 1)", // Hybrid Models
              "rgba(153, 102, 255, 1)", // Most Common Hybrid Option
            ],
            borderWidth: 1,
            barThickness: 40, // Adjust bar thickness
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Percentage",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
            },
            ticks: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
            grid: {
              color: "#E2E8F0",
            },
          },
          x: {
            title: {
              display: false,
            },
            ticks: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mr-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">Work Arrangement Types</h2>
      <p className="text-sm text-gray-500 mb-6">
        Comparing fully remote, hybrid, and in-office setups.
      </p>

      <div className="flex flex-col">
        {/* Chart */}
        <div className="w-full h-72">
          <canvas ref={chartRef} />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center mb-2">
            <span
              className="inline-block w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: "rgba(255, 99, 132, 0.5)" }}
            ></span>
            Fully Remote (5 days)
          </div>
          <div className="flex items-center mb-2">
            <span
              className="inline-block w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: "rgba(75, 192, 192, 0.5)" }}
            ></span>
            In Office (0 Days Remote)
          </div>
          <div className="flex items-center mb-2">
            <span
              className="inline-block w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: "rgba(54, 162, 235, 0.5)" }}
            ></span>
            Hybrid Models (2-4 Days Remote)
          </div>
          <div className="flex items-center mb-2">
            <span
              className="inline-block w-4 h-4 mr-2 rounded"
              style={{ backgroundColor: "rgba(153, 102, 255, 0.5)" }}
            ></span>
            Most Common Hybrid Option (2 Days Remote)
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkArrangementTypes;

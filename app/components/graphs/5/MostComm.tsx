import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MostCommonRolesChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
            {
              label: "Firms headquartered in Africa",
              data: [
                {
                  x: -75, // Adjust the X-coordinate to create overlap
                  y: 50, // Y-coordinate for alignment
                  r: 42, // Smaller radius for the second circle
                },
              ],
              backgroundColor: "rgba(255, 193, 7, 0.7)", // Yellow
              borderColor: "rgba(255, 193, 7, 1)",
              borderWidth: 2,
            },
          {
            label: "Firms headquartered outside Africa",
            data: [
              {
                x: 5, // X-coordinate for positioning
                y: 50, // Y-coordinate for positioning
                r: 130, // Radius of the circle
              },
            ],
            backgroundColor: "rgba(59, 130, 246, 0.7)", // Blue
            borderColor: "rgba(59, 130, 246, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.dataset.label === "Firms headquartered outside Africa") {
                  return "$337.3M";
                }
                if (context.dataset.label === "Firms headquartered in Africa") {
                  return "$79.7M";
                }
                return "";
              },
            },
          },
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            display: false, // Hide x-axis
            min: -110, // Adjust for padding
            max: 110, // Keep sufficient padding for positioning
          },
          y: {
            display: false, // Hide y-axis
            min: 0, // Adjust for padding
            max: 100, // Keep sufficient padding for positioning
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
      <h2 className="text-lg font-bold text-gray-800">Most Common Roles</h2>
      <p className="text-sm text-gray-500 mb-6">
        Highlighting the most common roles in African VC firms.
      </p>

      <div className="relative">
        <div className="absolute top-[47%] left-[50%] text-blue-600 text-xl font-bold">
          $337.3M
        </div>
        <div className="absolute top-[47%] left-[31%] text-yellow-600 text-xl font-bold">
          $79.7M
        </div>
        <canvas ref={chartRef} className="-mb-40 -mt-24" style={{ maxHeight: "650px", maxWidth: "650px" }} />
      </div>

      <div className=" bg-white p-4 rounded-sm">
        <p className="text-sm text-gray-600">
          Firms headquartered outside Africa tend to manage significantly larger AUMs compared to firms within Africa, suggesting a potential disparity in capital allocation between regions.
        </p>
      </div>
    </div>
  );
};

export default MostCommonRolesChart;

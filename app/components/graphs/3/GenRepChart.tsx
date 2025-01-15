import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GenderRepresentationChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Analysts",
          "Associates",
          "Senior Analysts",
          "Principals",
          "Directors",
        ],
        datasets: [
          {
            label: "Female",
            data: [22, 25, 10, 2, 3],
            backgroundColor: "#FF6384", // Pink
            barThickness: 30,
          },
          {
            label: "Male",
            data: [20, 30, 15, 10, 3],
            backgroundColor: "#4CAF50", // Green
            barThickness: 30,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${context.raw} participants`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#E2E8F0",
            },
            ticks: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
            title: {
              display: true,
              text: "Seniority Levels",
              color: "#4A5568",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
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
            },
            title: {
              display: true,
              text: "Participants",
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] m-10">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-800">
        Gender Representation Across Seniority Levels
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Analyzing the distribution of male and female participants across
        different seniority levels.
      </p>
      <div className="flex">
        {/* Chart */}
        <div className="w-[80%]">
          <canvas ref={chartRef} />
        </div>

        {/* Analysis Section */}
        <div className="mt-10 bg-white p-4 rounded-sm h-fit w-[20%]">
          <p className="text-sm text-gray-600">
            Overall, roles like Principal and Portfolio/Investment Manager skew
            heavily male, while Analyst and Associate roles are more balanced.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Females were more commonly found in Analyst and Associate roles,
            reflecting a possible gender gap in promotions to leadership
            positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderRepresentationChart;

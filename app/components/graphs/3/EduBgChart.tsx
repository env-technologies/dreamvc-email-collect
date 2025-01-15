import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const EducationBackgroundChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Bachelors (4-year degree)",
          "Masters (Non-MBA)",
          "Masters (MBA)",
        ], // X-axis labels
        datasets: [
          {
            label: "Female",
            data: [35, 20, 10], // Example data for Female participants
            backgroundColor: "#8B5CF6", // Purple
            barThickness: 30,
          },
          {
            label: "Male",
            data: [50, 30, 20], // Example data for Male participants
            backgroundColor: "#3B82F6", // Blue
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
              color: "#4A5568", // Dark gray
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: ${context.raw} participants`;
              },
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
              text: "Education Background",
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mb-10">
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-800">
        Educational Background by Gender
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Comparing the highest degree attained by male and female participants.
      </p>

      {/* Chart */}
      <div className="">
        <canvas ref={chartRef} style={{   }} />
      </div>

      {/* Analysis Section */}
      <div className="mt-6 bg-white p-4 rounded-sm">
        <p className="text-sm text-gray-600">
          Overall, men dominate higher education categories, but women have
          notable representation in Masters (Non-MBA).
        </p>
      </div>
    </div>
  );
};

export default EducationBackgroundChart;

import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const AgeDistributionChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Analysts", "Associates", "Principals", "Directors"], // X-axis categories
        datasets: [
          {
            type: "line",
            label: "Average Age",
            data: [45, 46, 52, 60], // Average age data
            borderColor: "#8B5CF6", // Purple line
            borderWidth: 2,
            tension: 0.4, // Smooth curve
            pointBackgroundColor: "#8B5CF6",
            fill: false,
          },
          {
            type: "bar",
            label: "Age Range",
            backgroundColor: "#FBBF24", // Yellow bars
            data: [
              { x: "Analysts", y: [20, 32] },
              { x: "Associates", y: [22, 39] },
              { x: "Principals", y: [30, 39] },
              { x: "Directors", y: [30, 55] },
            ],
            barThickness: 40,
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
                const value = context.raw;
                if (Array.isArray(value)) {
                  return `${context.dataset.label}: ${value[0]}-${value[1]} years`;
                }
                return `${context.dataset.label}: ${value} years`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
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
            stacked: false,
            min: 0,
            max: 70,
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
              text: "Age",
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
        Age Distribution by Gender
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Exploring the age range of male and female participants in investment firms.
      </p>

      {/* Chart */}
      <div className="">
        <canvas style={{ }} ref={chartRef} />
      </div>

      {/* Analysis Section */}
      <div className="mt-6 bg-white p-4 rounded-sm">
        <p className="text-sm text-gray-600">
          Seniority corresponds to an increase in average age, with Directors and Venture Partners being the oldest.
        </p>
      </div>
    </div>
  );
};

export default AgeDistributionChart;

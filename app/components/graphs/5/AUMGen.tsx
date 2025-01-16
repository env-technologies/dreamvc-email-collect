import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const AUMByGenderChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Female", "Male"], // Gender categories
        datasets: [
          {
            label: "Mean",
            data: [200, 210], // Mean values for Female and Male
            backgroundColor: "rgba(255, 99, 132, 0.5)", // Pink
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Median",
            data: [50, 60], // Median values for Female and Male
            backgroundColor: "rgba(75, 192, 192, 0.5)", // Green
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: $${context.raw}M`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Gender",
              color: "#4A5568",
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
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              text: "AUM values in millions (USD)",
              color: "#4A5568",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
            },
            ticks: {
              callback: (value) => `${value}M`,
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mb-10">
      <h2 className="text-lg font-bold text-gray-800">AUM by Gender</h2>
      <p className="text-sm text-gray-500 mb-6">
        Compare AUM for firms with male vs. female participants.
      </p>

      <div className="h-[350px]">
        <canvas ref={chartRef} />
      </div>

      {/* Analysis Section */}
      <div className="mt-6 bg-white p-4 rounded-sm">
        <p className="text-sm text-gray-600">
          There is no significant gender skew in terms of the AUM of the firms
          participants are working for. However, male participants are slightly
          more likely to work in firms with lower AUM extremes.
        </p>
      </div>
    </div>
  );
};

export default AUMByGenderChart;

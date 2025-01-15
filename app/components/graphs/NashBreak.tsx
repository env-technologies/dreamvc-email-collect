import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const NationalityBreakdown: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const nationalityChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Kenyan",
          "Nigerian",
          "Ghanian",
          "South African",
          "Ethiopian",
          "Egyptian",
          "Ugandan",
          "Rwandan",
          "French",
          "American",
        ],
        datasets: [
          {
            label: "Nationalities",
            data: [25.4, 16.1, 7.8, 6.3, 4.4, 3.9, 3.9, 3.4, 2.0, 2.0],
            backgroundColor: [
              "#5E35B1", // Kenyan
              "#43A047", // Nigerian
              "#FFD600", // Ghanian
              "#039BE5", // South African
              "#FF7043", // Ethiopian
              "#1E88E5", // Egyptian
              "#E53935", // Ugandan
              "#29B6F6", // Rwandan
              "#AB47BC", // French
              "#FFCA28", // American
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide legend inside the chart
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const percentage = context.raw as number;
                return `${context.label}: ${percentage}%`;
              },
            },
          },
        },
      },
    });

    return () => {
      nationalityChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] ml-10 h-[28.5rem]">
      <h2 className="text-lg font-bold text-gray-800">Nationality Breakdown</h2>
      <p className="text-sm text-gray-500 mb-6">
        Highlighting the diversity of the top 10 nationalities among survey
        participants.
      </p>

      <div className="flex items-center justify-between">
        {/* Pie Chart */}
        <div className="w-1/2 h-60">
          <canvas ref={chartRef} />
        </div>

        {/* Legend */}
        <div className="w-1/2 pl-6 mt-10">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#5E35B1" }}
              ></span>
              Kenyan <span className="ml-auto text-gray-600">25.4%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#43A047" }}
              ></span>
              Nigerian <span className="ml-auto text-gray-600">16.1%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#FFD600" }}
              ></span>
              Ghanian <span className="ml-auto text-gray-600">7.8%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#039BE5" }}
              ></span>
              South African <span className="ml-auto text-gray-600">6.3%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#FF7043" }}
              ></span>
              Ethiopian <span className="ml-auto text-gray-600">4.4%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#1E88E5" }}
              ></span>
              Egyptian <span className="ml-auto text-gray-600">3.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#E53935" }}
              ></span>
              Ugandan <span className="ml-auto text-gray-600">3.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#29B6F6" }}
              ></span>
              Rwandan <span className="ml-auto text-gray-600">3.4%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#AB47BC" }}
              ></span>
              French <span className="ml-auto text-gray-600">2.0%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#FFCA28" }}
              ></span>
              American <span className="ml-auto text-gray-600">2.0%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NationalityBreakdown;

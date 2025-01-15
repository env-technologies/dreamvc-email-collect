import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const SalaryCurrencyDistribution: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "USD",
          "NGN (Naira)",
          "KES (Kenyan Shilling)",
          "ZAR (Rand)",
          "GHC (Ghanaian Cedi)",
          "Others"
        ],
        datasets: [
          {
            label: "Salary Currency Distribution",
            data: [51.9, 9.0, 8.5, 6.3, 5.8, 18.5], // Percentage data
            backgroundColor: [
              "#1E3A8A", // USD
              "#E11D48", // NGN
              "#F59E0B", // KES
              "#10B981", // ZAR
              "#3B82F6", // GHC
              "#9CA3AF" // Others
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Custom legend outside the chart
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}%` // Tooltip format
            }
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mb-10">
      <h2 className="text-lg font-bold text-gray-800">
        Salary Currency Distribution
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Most used currencies for salaries in African VC firms.
      </p>

      <div className="flex-col items-center justify-between">
        {/* Pie Chart */}
        <div className="justify-center flex h-64">
          <canvas ref={chartRef} />
        </div>

        {/* Custom Legend */}
        <div className=" pl-6 pt-5">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#1E3A8A" }}
              ></span>
              USD <span className="ml-auto text-gray-600">51.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#E11D48" }}
              ></span>
              NGN (Naira) <span className="ml-auto text-gray-600">9.0%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#F59E0B" }}
              ></span>
              KES (Kenyan Shilling){" "}
              <span className="ml-auto text-gray-600">8.5%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#10B981" }}
              ></span>
              ZAR (Rand) <span className="ml-auto text-gray-600">6.3%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#3B82F6" }}
              ></span>
              GHC (Ghanaian Cedi){" "}
              <span className="ml-auto text-gray-600">5.8%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#9CA3AF" }}
              ></span>
              Others <span className="ml-auto text-gray-600">18.5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalaryCurrencyDistribution;

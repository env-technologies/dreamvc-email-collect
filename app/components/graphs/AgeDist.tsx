import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Bar Chart Component
const ChartBar: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["25", "27", "28"], // Age values
        datasets: [
          {
            label: "No. of Respondents",
            data: [15, 25, 20], // Respondent data
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
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
              text: "No of Respondents",
              font: {
                size: 13,
                family: "Inter, sans-serif",
              },
            },
            ticks: {
              color: "#4A5568", // Dark gray
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
              display: true,
              text: "Age Values",
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
        },
      },
    });

    return () => {
      barChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

// Doughnut Chart Component
const ChartDoughnut: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["22–29 years", "Other Groups"], // Age group labels
        datasets: [
          {
            label: "Age Groups",
            data: [43.68, 56.32], // Data for each group
            backgroundColor: [
              "rgba(156, 39, 176, 0.5)", // Purple
              "rgba(66, 133, 244, 0.5)", // Blue
            ],
            borderColor: [
              "rgba(156, 39, 176, 1)",
              "rgba(66, 133, 244, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif",
              },
            },
          },
        },
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

// Main Component
const AgeDistribution: React.FC = () => {
  return (
    <div className="bg-[#F7F7FA] p-6 rounded-lg border border-[#E1E1F5] mx-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">
        Age Distribution of VC Professionals
      </h2>
      <p className="text-sm text-gray-500">
        A breakdown of participants by age groups.
      </p>
      <hr className="my-4 border-t border-gray-200 w-full" />

      <div className="grid grid-cols-3 gap-6">
        {/* Most Common Ages (Bar Chart) */}
        <div className="">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Most Common Ages
          </h3>
          <div className="h-60">
            <ChartBar />
          </div>
        </div>
        {/* Most Common Age Group (Donut Chart) */}
        <div className="border-l border-r flex flex-col items-center">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Most Common Age Group
          </h3>
          <div className="h-60 w-60">
            <ChartDoughnut />
          </div>
        </div>

        {/* Minimum and Maximum Ages */}
        <div className="flex flex-col ">
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Minimum and Maximum Ages
          </h3>
          <div className="bg-[#E9E9F0] p-4 mb-2">
            <p className="text-md text-[#404061]">Minimum Age</p>
            <p className="text-3xl font-bold text-[#404061]">22</p>
          </div>
          <div className="bg-[#E9E9F0] p-4">
            <p className="text-md text-[#404061]">Maximum Age</p>
            <p className="text-3xl font-bold text-[#404061]">57</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeDistribution;

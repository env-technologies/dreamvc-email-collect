import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MovieGenreChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const movieGenreChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Action/Adventure",
          "Drama",
          "Mystery/Thriller",
          "Sci-Fi/Fantasy",
          "Comedy",
          "Romantic",
          "Horror",
        ],
        datasets: [
          {
            label: "Movie Genres",
            data: [49.3, 16.6, 14.6, 5.9, 4.9, 4.9, 3.9],
            backgroundColor: [
              "#1E3A8A", // Action/Adventure
              "#E11D48", // Drama
              "#D97706", // Mystery/Thriller
              "#10B981", // Sci-Fi/Fantasy
              "#3B82F6", // Comedy
              "#8B5CF6", // Romantic
              "#F43F5E", // Horror
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Custom legend outside the chart
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
      movieGenreChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] ml-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">
        Life in VC: If It Were a Movie Genre
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Survey participants describe their venture capital journey through their
        favorite movie genres.
      </p>

      <div className="flex items-center justify-between">
        {/* Pie Chart */}
        <div className="w-1/2 h-72">
          <canvas ref={chartRef} />
        </div>

        {/* Legend */}
        <div className="w-1/2 pl-6">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#1E3A8A" }}
              ></span>
              Action/Adventure <span className="ml-auto text-gray-600">49.3%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#E11D48" }}
              ></span>
              Drama <span className="ml-auto text-gray-600">16.6%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#D97706" }}
              ></span>
              Mystery/Thriller{" "}
              <span className="ml-auto text-gray-600">14.6%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#10B981" }}
              ></span>
              Sci-Fi/Fantasy <span className="ml-auto text-gray-600">5.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#3B82F6" }}
              ></span>
              Comedy <span className="ml-auto text-gray-600">4.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#8B5CF6" }}
              ></span>
              Romantic <span className="ml-auto text-gray-600">4.9%</span>
            </li>
            <li className="flex items-center">
              <span
                className="inline-block w-4 h-4 mr-2 rounded"
                style={{ backgroundColor: "#F43F5E" }}
              ></span>
              Horror <span className="ml-auto text-gray-600">3.9%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieGenreChart;

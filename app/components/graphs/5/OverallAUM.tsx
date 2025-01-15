import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(...registerables, annotationPlugin);

const AUMDistributionChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["AUM Distribution"],
        datasets: [
          {
            type: "bar",
            label: "Most Common AUM Range",
            data: [1000],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0,
            barThickness: 70
          },
          {
            type: "line",
            label: "Min-Max Line",
            data: [
              { x: 0.1, y: 0 }, // Start point of Min-Max line
              { x: 5000, y: 0 } // End point of Min-Max line
            ],
            borderColor: "#000000",
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          },
          {
            type: "line",
            label: "Average AUM Line",
            data: [
              { x: 208.7, y: 0.16 },
              { x: 208.7, y: -0.16 }
            ], // Vertical dotted line at 208.7M
            borderColor: "#000000",
            borderWidth: 1,
            borderDash: [6, 4],
            pointRadius: 1,
            fill: false
          },
          {
            type: "scatter",
            label: "Mode AUM (Dot)",
            data: [{ x: 50, y: 0 }], // Position of the black dot
            backgroundColor: "#000000",
            borderColor: "#000000",
            pointRadius: 5
          }
        ]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif"
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                if (context.dataset.label === "Most Common AUM Range") {
                  return "Most Common AUM Range: $0.1M to $1000M";
                }
                if (context.dataset.label === "Min-Max Line") {
                  return "Minimum to Maximum AUM: $0.1M to $5000M";
                }
                if (context.dataset.label === "Average AUM Line") {
                  return "Average AUM: $208.7M";
                }
                if (context.dataset.label === "Mode AUM (Dot)") {
                  return "Most Common AUM (Mode): $50M";
                }
                return "";
              }
            }
          },
          annotation: {
            annotations: {
              upperDottedLine: {
                type: "line",
                yMin: -0.3,
                yMax: -0.3,
                xMin: 0,
                xMax: 5000,
                borderColor: "rgba(0,0,0,0.6)",
                borderWidth: 1,
                borderDash: [4, 4],
                label: {
                  content: "Upper Limit",
                  position: "start",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  color: "#4A5568",
                  font: {
                    size: 12,
                    family: "Inter, sans-serif"
                  }
                }
              },
              lowerDottedLine: {
                type: "line",
                yMin: 0.3,
                yMax: 0.3,
                xMin: 0,
                xMax: 5000,
                borderColor: "rgba(0,0,0,0.6)",
                borderWidth: 1,
                borderDash: [4, 4],
                label: {
                  content: "Lower Limit",
                  position: "start",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  color: "#4A5568",
                  font: {
                    size: 12,
                    family: "Inter, sans-serif"
                  }
                }
              },
              averageAUMLine: {
                type: "line",
                yMin: 0.17,
                yMax: -0.17,
                xMin: 208.7,
                xMax: 208.7,
                borderColor: "#000000",
                borderWidth: 1,
                borderDash: [4, 2],
                label: {
                  content: "Average AUM",
                  position: "start",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  color: "#4A5568",
                  font: {
                    size: 12,
                    family: "Inter, sans-serif"
                  }
                }
              }
            }
          }
        },
        scales: {
          x: {
            type: "linear",
            title: {
              display: true,
              text: "AUM values in USD (in millions)",
              color: "#4A5568",
              font: {
                size: 13,
                family: "Inter, sans-serif"
              }
            },
            grid: {
              color: "#E2E8F0"
            },
            ticks: {
              callback: (value) => `${value}M`,
              color: "#4A5568",
              font: {
                size: 12,
                family: "Inter, sans-serif"
              }
            },
            min: 0.1,
            max: 5000
          },
          y: {
            title: {
              display: true,
              text: "AUM Distribution",
              color: "#4A5568",
              font: {
                size: 13,
                family: "Inter, sans-serif"
              }
            },
            ticks: {
              display: false
            },
            grid: {
              display: false
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
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mx-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">
        Overall AUM Distribution
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Highlighting the range, average, and most common AUM values reported by
        survey participants.
      </p>
      <div className="flex w-full">
        <div className="h-[300px] w-[75%]">
          <canvas ref={chartRef} />
        </div>
        <div className="flex">
        <div className="pl-10 w-full max-w-sm">
      <div className="legend-item flex items-center mb-3">
        <span
          className="w-4 h-4 mr-2 rounded"
          style={{ backgroundColor: "rgba(255, 99, 132, 0.5)" }}
        ></span>
        <div className="text-sm">
          <p className="font-bold text-gray-800">
            Most Common AUM Range in Dataset
          </p>
          <p className="text-gray-600">$0.1M to $1000.0M</p>
        </div>
      </div>

      <div className="legend-item flex items-center mb-3">
        <hr className="w-4 h-1 mr-2 bg-black" />
        <div className="text-sm">
          <p className="font-bold text-gray-800">Minimum to Maximum AUM</p>
          <p className="text-gray-600">$0.1M to $5000.0M</p>
        </div>
      </div>

      <div className="legend-item flex items-center mb-3">
        <span
          className="w-4 h-5 ml-2 border-l border-dashed border-black"
          style={{ backgroundColor: "transparent" }}
        ></span>
        <div className="text-sm">
          <p className="font-bold text-gray-800">Average AUM across Dataset</p>
          <p className="text-gray-600">$208.7M</p>
        </div>
      </div>

      <div className="legend-item flex items-center">
        <span
          className="w-4 h-4 mr-2 rounded-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        ></span>
        <div className="text-sm">
          <p className="font-bold text-gray-800">Most Common AUM (Mode)</p>
          <p className="text-gray-600">$50.0M</p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default AUMDistributionChart;

import React from "react";

const FirmTypes: React.FC = () => {
  const data = [
    { name: "Venture Capital Fund", percentage: 37.6 },
    { name: "Impact Investing Fund", percentage: 14.6 },
    {
      name: "Private Equity Fund (Infrastructure, credit, mezzanine, etc)",
      percentage: 13.2
    },
    {
      name: "Entrepreneur Support Organization - ESO (Incubator, Accelerator, Hub)",
      percentage: 5.4
    },
    { name: "Growth Equity Fund", percentage: 3.4 },
    { name: "Non-Profit Organization/Foundation", percentage: 2.9 },
    { name: "Financial advisory firm", percentage: 2.4 },
    { name: "Venture Studio", percentage: 2.4 },
    { name: "Angel or Syndicate Fund", percentage: 2.0 },
    { name: "Fund of Funds", percentage: 2.0 }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mx-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">Firm Types</h2>
      <p className="text-sm text-gray-500 mb-6">
        Highlighting the diversity of the top 10 types of investment firms
        participants work for.
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-10">
        {data.map((item, index) => (
          <div key={index} className="flex-col items-center">
            <span className="text-sm text-gray-800 w-2/3">{item.name}</span>
            <div className="w-full bg-gray-200 rounded-sm h-8 relative">
              <div className="flex space-x-4 items-center">
                <div
                  className="bg-blue-600 h-8 rounded-sm"
                  style={{ width: `${item.percentage}%` }}
                ></div>
                <span className="text-sm text-gray-600">
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmTypes;

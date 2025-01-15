import React from "react";

const MostCommonRoles: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] ml-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">Most Common Roles</h2>
      <p className="text-sm text-gray-500 mb-6">
        Highlighting the most common roles in African VC firms.
      </p>

      {/* Roles List */}
      <div className="space-y-4">
        {[
          { label: "Associate", percentage: 23.8 },
          { label: "Analyst", percentage: 21.2 },
          { label: "Senior Analyst", percentage: 11.6 },
          { label: "Senior Associate", percentage: 9 },
          { label: "Portfolio / Investment Manager", percentage: 6.3 },
          { label: "Principal", percentage: 6.3 },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded">
              <div
                style={{ width: `${item.percentage}%` }}
                className="absolute h-4 bg-purple-500 rounded"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostCommonRoles;

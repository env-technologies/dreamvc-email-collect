import React from "react";

const EducationBackground: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mr-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">Education Background</h2>
      <p className="text-sm text-gray-500 mb-6">
        The academic qualifications of VC professionals.
      </p>

      {/* Education Levels */}
      <div className="space-y-4">
        {[
          { label: "Bachelors (4-year degree)", percentage: 53.4 },
          { label: "Masters (Non-MBA)", percentage: 27.5 },
          { label: "Masters (MBA)", percentage: 14.3 },
          { label: "Doctorate/Post-Doctorate and Others", percentage: 3.7 },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded">
              <div
                style={{ width: `${item.percentage}%` }}
                className="absolute h-4 bg-green-500 rounded"
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-6 border-t border-gray-200" />

      {/* Education Abroad */}
      <p className="text-sm text-gray-600 font-semibold mb-4">
        Percentage of participants with education abroad.
      </p>
      <div className="space-y-4">
        {[
          { label: "Completed Internationally", percentage: 37.6, color: "blue" },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded">
              <div
                style={{ width: `${item.percentage}%` }}
                className={`absolute h-4 bg-${item.color}-500 rounded`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationBackground;

import React from "react";

const BonusStructuresAndBenefits: React.FC = () => {
  const benefitsData = [
    { label: "No Additional Benefits", percentage: 15.9 },
    { label: "Paid Vacation Time (PTO)", percentage: 6.3 },
    { label: "Health/Dental Insurance with PTO", percentage: 5.8 },
    { label: "Health/Dental Insurance", percentage: 4.2 },
    { label: "Health/Dental Insurance, PTO, and Pension Contributions", percentage: 3.7 },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-[#E1E1F5] mr-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">
        Bonus Structures and Benefits
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        The most common benefits offered in VC firms.
      </p>

      {/* Benefits List */}
      <div className="space-y-4">
        {benefitsData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded">
              <div
                style={{ width: `${item.percentage}%` }}
                className="absolute h-4 bg-blue-500 rounded"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusStructuresAndBenefits;

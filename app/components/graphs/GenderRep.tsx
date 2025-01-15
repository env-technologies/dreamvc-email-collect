import React from "react";

interface GenderRepresentationProps {
  malePercentage: string;
  femalePercentage: string;
}

const GenderRepresentation: React.FC<GenderRepresentationProps> = ({
  malePercentage,
  femalePercentage
}) => {
  return (
    <div className="bg-[#F7F7FA] p-6 rounded-lg border-[#E1E1F5] border mx-10 mb-10">
      <h2 className="text-lg font-bold text-gray-800">Gender Representation</h2>
      <p className="text-sm text-gray-500 mb-4">
        The gender distribution of participants in the African VC ecosystem.
      </p>

      <hr className="my-4 border-t border-gray-200 w-full" />
      <div className="flex justify-between">

      <span className="block text-[#404061]">Male</span>
      <span className="block text-[#404061]">Female</span>
      </div>

      <div className="relative w-full h-14 flex">
        <div
          data-tip={`${malePercentage}% Male`}
          style={{ width: `${malePercentage}%` }}
          className="bg-green-500 h-full rounded-l"
        ></div>
        <div
          data-tip={`${femalePercentage}% Female`}
          style={{ width: `${femalePercentage}%` }}
          className="bg-blue-500 h-full rounded-r"
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <div className="text-center">
          <span>{malePercentage}%</span>
        </div>
        <div className="text-center">
          <span>{femalePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default GenderRepresentation;

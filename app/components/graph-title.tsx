import React from 'react';

interface GraphTitleProps {
  number: string; // Number as a string to allow flexibility for formats like "3." or "03."
  title: string; // Title of the graph section
  description: string; // Description text
}

const GraphTitle: React.FC<GraphTitleProps> = ({ number, title, description }) => {
  return (
    <div className="p-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 flex items-baseline">
        <span className="mr-2">{number}.</span>
        {title}
      </h2>
      <p className="text-lg text-gray-500 mt-1 ml-7">{description}</p>
    </div>
  );
};

export default GraphTitle;

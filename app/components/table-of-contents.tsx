import React from 'react';

function TableOfContents() {
  return (
    <div className="bg-white p-10">
      <div
        className="bg-cover bg-center text-white p-8 rounded-lg"
        style={{
          backgroundImage: "url('/bg.svg')",
        }}
      >
        <h1 className="text-3xl font-bold mb-6">Table of Contents</h1>
        <div className="grid grid-cols-2 gap-4">
          <ol className="space-y-2 text-lg">
            <li>1. Who Took the Survey?</li>
            <li>2. Where Are Participants Based?</li>
            <li>3. Employment & Work Environment</li>
          </ol>
          <ol className="space-y-2 text-lg">
            <li>4. The Firms Behind the Numbers</li>
            <li>5. Assets Under Management (AUM) Insights</li>
            <li>6. Gender-Based Salary Disparity and Pay Gap Analysis</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TableOfContents;

import React from 'react'

export default function Hero() {
  return (
    <div className="flex-col w-1/2 px-10 mt-40 ">
    <h1 className="md:text-5xl text-4xl  text-[#FFFFFF] mt-6 leading-tight">
      THE COMPENSATION MAP: <br /> AN AFRICAN INVESTMENT SALARIES REPORT
      2025
    </h1>
    <p className="pt-5 text-[#ffffff]/60 text-xl">
      Unlock key insights into African VC compensation trends.
    </p>
    <div className="flex space-x-5 pt-8">
      <button className="bg-[#E7F940] w-48 py-2 rounded-sm text-black">
        Download Report
      </button>
      <button className="border-[#ffffff] border w-48 py-2 rounded-sm text-white">
        Subscribe for Updates
      </button>
    </div>
    </div>
  )
}



import Image from "next/image";

export default function About() {
    return (
      <>
        <div className="bg-[#1A1A3C] flex items-center justify-between px-10 py-5 space-x-10 text-white">
          <div className="flex items-center w-[40%]">
            <Image src="/about.svg" alt="Your Image" width={450} height={100} />
          </div>
          <div className="flex-col items-center w-[60%]">
            <h1 className="text-4xl">Why it matters?</h1>
            <p className="text-white text-md pt-4">
              The African VC ecosystem thrives on collaboration and trust—but both
              require transparency. This report bridges a critical gap by shedding
              light on compensation trends, empowering professionals and employers
              alike to make informed decisions.
            </p>
            <p className="text-white text-md pt-4">
              For Dream VC alumni and participants, this data provides valuable
              benchmarks as they step into or advance within the VC space. For the
              A&A Collective, it offers a foundation for deeper discussions on
              defining fair and competitive compensation in Africa’s VC landscape.
            </p>
            <p className="text-white text-md pt-4">
              By presenting straightforward insights without overcomplicating or
              forcing conclusions, this report ensures clarity in understanding
              the nuances of compensation trends. We aim to provide you as a
              reader to interpret the data from your lens of fairness and
              benchmarks.
            </p>
          </div>
        </div>
      </>
    );
  }
  
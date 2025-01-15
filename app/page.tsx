"use client";

import Head from "next/head";
import Image from "next/image";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TableOfContents from "./components/table-of-contents";
import GraphTitle from "./components/graph-title";
import GenderRepresentation from "./components/graphs/GenderRep";
import AgeDistribution from "./components/graphs/AgeDist";
import NationalityBreakdown from "./components/graphs/NashBreak";
import EducationBackground from "./components/graphs/EduBg";
import MostCommonRoles from "./components/graphs/3/MostComm";
import WorkArrangementTypes from "./components/graphs/3/WorkArran";
import MovieGenreChart from "./components/graphs/3/LifeInVC";
import BonusStructuresAndBenefits from "./components/graphs/3/BonusStruc";
import GenderRepresentationChart from "./components/graphs/3/GenRepChart";
import EducationBackgroundChart from "./components/graphs/3/EduBgChart";
import AgeDistributionChart from "./components/graphs/3/AgeDistChart";
import FirmTypes from "./components/graphs/4/FirmType";
import FirmEstablishmentYears from "./components/graphs/4/FirmEstab";
import SalaryCurrencyDistribution from "./components/graphs/4/SalaryCurr";
import OverallAUMDistribution from "./components/graphs/5/OverallAUM";

const ageData = [
  { age: 25, count: 15 },
  { age: 27, count: 25 },
  { age: 28, count: 20 }
];

const mostCommonAgeGroup = { group: "22–29 years", percentage: "43.68%" };

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Mochiy+Pop+One&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Compensation Map: An African Investment Salary Report"
        />
        <meta
          name="keywords"
          content="African Investment Salaries, report, insights, professionals, investment hubs"
        />
        <meta
          property="og:title"
          content="African Investment Salaries Report 2025"
        />
        <meta
          property="og:description"
          content="Be the first to access insights from over 200 professionals across Africa's top investment hubs."
        />
        <meta property="og:image" content="/african_investment_report.png" />
        <meta
          property="og:url"
          content="https://africainvestmentsalaries.com"
        />
        <meta
          property="og:site_name"
          content="The Compensation Map: An African Investment Salary Report"
        />
        <meta property="og:type" content="website" />
        <title>African Investment Salaries Report 2025</title>
      </Head>
      <div
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          margin: 0
        }}
        className=""
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <TableOfContents />
      <GraphTitle
        number="1"
        title="Who took the survey?"
        description="A breakdown of the participants' background, including gender, age, nationality, and education."
      />
      <GenderRepresentation malePercentage="57.7" femalePercentage="42.3" />
      <AgeDistribution />
      <div className="w-full flex space-x-10">
        <div className="w-1/2">
          <NationalityBreakdown />
        </div>
        <div className="w-1/2">
          <EducationBackground />
        </div>
      </div>
      <GraphTitle
        number="3"
        title="Employment & Work Environment"
        description="This group highlights the participants' current roles, work arrangements, and firm types."
      />
      <div className="w-full grid grid-cols-2 gap-x-10">
        <MostCommonRoles />
        <WorkArrangementTypes />
        <MovieGenreChart />
        <BonusStructuresAndBenefits />
      </div>
      <GenderRepresentationChart />
      <div className="flex mx-10 gap-x-5">
        <div className="w-1/2">
          <EducationBackgroundChart />
        </div>
        <div className="w-1/2">
          <AgeDistributionChart />
        </div>
      </div>
      <GraphTitle
        number="4"
        title="The Firms Behind the Numbers"
        description="Explore the foundation of African VC firms — their types, timelines, financials, and currency preferences."
      />
      <FirmTypes/>
      <div className="flex mx-10 gap-x-5">
        <div className="w-[60%]">
          <FirmEstablishmentYears />
        </div>
        <div className="w-[40%]">
          <SalaryCurrencyDistribution />
        </div>
      </div>
      <GraphTitle
        number="5"
        title="Assets Under Management (AUM) Insights"
        description="A comprehensive look at the distribution of AUM across different fund types, regions, and gender representation."
      />
      <OverallAUMDistribution/>
    </>
  );
}

"use client";

import Head from "next/head";
import Waitlist from "./components/waitlist";
import Image from "next/image";

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
          content="Beyond Numbers: An African Investment Salary Report"
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
        <meta property="og:url" content="https://africainvestmentsalaries.com" />
        <meta property="og:site_name" content="Beyond Numbers: An African Investment Salary Report" />
        <meta property="og:type" content="website" />
        <title>African Investment Salaries Report 2025</title>
      </Head>
      <div className="flex flex-col items-center justify-center px-10 py-5 text-white min-h-screen">
        <div className="flex w-full justify-between">
          <Image
            src="/LogoWhite.svg"
            alt="Dream VC Logo"
            width={180}
            height={60}
          />
          <Image src="/a&a.svg" alt="A & A Logo" width={70} height={60} />
        </div>
        <header className="flex flex-col items-center mb-12">
          <p className="text-[#E7F940] text-3xl md:pt-0 pt-5">Coming Soon</p>
          <h1 className="md:text-5xl text-4xl text-center font-semibold text-[#FFFFFF] mt-6 leading-tight">
            BEYOND NUMBERS: <br /> AN AFRICAN INVESTMENT SALARIES REPORT 2025
          </h1>
          <p className="text-lg text-center text-[#FFFFFF]/50 mt-4 max-w-2xl">
            We’re bringing you exclusive insights from a first-of-its-kind
            survey featuring data from 200+ professionals across Africa’s top
            investment hubs.
          </p>
        </header>
        <main className=" rounded-lg shadow-lg w-full max-w-xl">
          <Waitlist />
        </main>
        <footer className="mt-5 text-center text-[#777E73] text-md">
          Powered by Dream VC and A&A Collective
        </footer>
      </div>
    </>
  );
}

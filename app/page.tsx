"use client";

import Head from "next/head";
import Waitlist from "./components/waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join our waitlist to get early access to our exclusive offers and updates."
        />
        <meta
          name="keywords"
          content="waitlist, early access, exclusive offers, updates"
        />
        <meta property="og:title" content="Join Our Waitlist" />
        <meta
          property="og:description"
          content="Join our waitlist to get early access to our exclusive offers and updates."
        />
        <meta property="og:image" content="/whitelogo.svg" />
        <meta property="og:url" content="https://hodll.app" />
        <meta property="og:site_name" content="hodll" />
        <meta property="og:type" content="website" />
        <title>Join Our Waitlist</title>
      </Head>
      <div className="flex flex-col items-center justify-center bg-[#000000] h-screen px-20 text-white">
        <div className="flex items-center justify-between w-full mb-10">
          <Image src="/whitelogo.svg" alt="Logo" width={160} height={50} />
          <div className="text-lg ml-4">
            <p className="text-[#777E73]">Launching in</p>
            <p className="text-[#6FC72A]">May, 2025</p>
          </div>
        </div>
        <main className="flex items-center gap-8 w-full">
          <div className="flex-col justify-between w-[50%]">
            <h1 className="text-5xl font-bold">
              Start Small. Grow Big. Invest Smart.
            </h1>
            <p className="text-left max-w-2xl mt-4 text-gray-400">
              Start your crypto journey effortlessly with the cheapest fees
              worldwide and long-term wealth-building strategies.
            </p>
            <hr className="w-full my-8 border-t border-[#1A1F16]" />
            <div className="grid gap-8 mt-12 w-full max-w-4xl">
              <div className="flex items-center gap-4">
                <Image src="/i1.svg" alt="Icon 1" width={50} height={50} />
                <div>
                  <h2 className="text-xl font-bold">
                    Lowest Onboarding Fees Worldwide
                  </h2>
                  <ul className="list-disc ml-6 text-gray-300">
                    <li>Get started with fiat at a fraction of the cost.</li>
                    <li>Invest without worrying about heavy fees.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/i2.svg" alt="Icon 2" width={50} height={50} />
                <div>
                  <h2 className="text-xl font-bold">
                    100% Ownership, 100% Security
                  </h2>
                  <ul className="list-disc ml-6 text-gray-300">
                    <li>Your crypto stays yours.</li>
                    <li>Secure your keys, your wallet, and your future.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/i3.svg" alt="Icon 3" width={50} height={50} />
                <div>
                  <h2 className="text-xl font-bold">
                    SIP for Long-Term Growth
                  </h2>
                  <ul className="list-disc ml-6 text-gray-300">
                    <li>Automate your crypto investments.</li>
                    <li>
                      Beat market volatility with consistent, disciplined
                      investing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[50%] ml-20">
            <Waitlist />
          </div>
        </main>
        <hr className="w-full mt-8 border-t border-[#1A1F16]" />
        <footer className="mt-8 text-sm text-[#434D3E]">
          A Product by DotENVTech Solutions LLP
        </footer>
      </div>
    </>
  );
}

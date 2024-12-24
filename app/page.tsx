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
      <div className="flex flex-col items-center justify-center bg-[#0D0F0B] px-20 mobile:px-6 text-white">
        <div className="flex items-center justify-between w-full my-12 mobile:my-8">
          <Image className="mobile:hidden not-mobile:block" src="/whitelogo.svg" alt="Logo" width={160} height={50} />
          <Image className="mobile:block not-mobile:hidden" src="/whitelogo.svg" alt="Logo" width={120} height={50} />
          <div className="text-xl mobile:text-lg  ml-4">
            <p className="text-[#777E73]">Launching in</p>
            <p className="text-[#6FC72A]">May, 2025</p>
          </div>
        </div>
        <main className="flex mobile:flex-col items-center gap-8 w-full">
          <div className="flex-col justify-between w-[50%] mobile:w-[100%]">
            <div className="mobile:hidden not-mobile:block">
            <h1 className="text-6xl  font-medium text-[#EFF5ED]">
              Start Small. Grow Big.
            </h1>
            <h1 className="text-6xl font-medium text-[#EFF5ED]">
              Invest Smart.
            </h1>
            </div>
            <div className="mobile:block not-mobile:hidden">
            <h1 className="text-4xl xs:text-5xl font-medium text-[#EFF5ED]">
              Start Small. Grow Big. Invest Smart.
            </h1>
            </div>
            <p className="text-left text-lg mobile:text-base max-w-2xl mt-4 text-[#AFB3AD] font-light">
              Start your crypto journey effortlessly with the cheapest fees
              worldwide and long-term wealth-building strategies.
            </p>
            <hr className="w-full my-8 border-t border-[#1A1F16]" />
            <div className="grid gap-10  w-full max-w-4xl">
              <div className="flex items-start gap-8 mobile:gap-5">
                <Image className="mt-1 mobile:hidden not-mobile:block" src="/i1.svg" alt="Icon 1" width={50} height={50} />
                <Image className="mt-1 mobile:block not-mobile:hidden" src="/i1.svg" alt="Icon 1" width={40} height={40} />

                <div>
                  <h2 className="text-xl mobile:text-lg font-normal text-[#EFF5ED] mb-3 mobile:mb-2">
                    Lowest Onboarding Fees Worldwide
                  </h2>
                  <div className="list-disc mobile:text-base mobile:leading-5 text-[#8A8D88]">
                    <div className=" flex  gap-2 mb-1 mobile:mb-2">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Get started with fiat at a fraction of the cost.
                    </div>
                    <div className=" flex gap-2 w-full">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Invest without worrying about heavy fees.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-8 mobile:gap-5">
              <Image className="mt-1 mobile:hidden not-mobile:block" src="/i2.svg" alt="Icon 1" width={50} height={50} />
              <Image className="mt-1 mobile:block not-mobile:hidden" src="/i2.svg" alt="Icon 1" width={40} height={40} />
              <div>
                <h2 className="text-xl mobile:text-lg font-normal text-[#EFF5ED] mb-3 mobile:mb-2">
                100% Ownership, 100% Security
                  </h2>
                  <div className="list-disc mobile:text-base mobile:leading-5 text-[#8A8D88]">
                  <div className=" flex gap-2 mb-1 mobile:mb-2">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Your crypto stays yours.
                    </div>
                    <div className=" flex gap-2">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Secure your keys, your wallet, and your future.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-8 mobile:gap-5">
              <Image className="mt-1 mobile:hidden not-mobile:block" src="/i3.svg" alt="Icon 1" width={50} height={50} />
              <Image className="mt-1 mobile:block not-mobile:hidden" src="/i3.svg" alt="Icon 1" width={40} height={40} />
                <div>
                <h2 className="text-xl mobile:text-lg font-normal text-[#EFF5ED] mb-3 mobile:mb-2">
                    SIP for Long-Term Growth
                  </h2>
                  <div className="list-disc mobile:text-base mobile:leading-5 text-[#8A8D88]">
                  <div className=" flex gap-2 mb-1 mobile:mb-2">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Automate your crypto investments.
                    </div>
                    <div className=" flex gap-2">
                      <Image
                        src="bullet.svg"
                        alt="bullet icon"
                        width={20}
                        height={20}
                      />
                      Beat market volatility with consistent, disciplined
                      investing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col w-[50%] mobile:w-[100%] ml-20 mobile:ml-0 mobile:mt-6">
            <Waitlist />
          </div>
        </main>
        <hr className="w-full mt-16 mobile:mt-12 border-t border-[#1A1F16]" />
        <footer className="my-6 mobile:my-4 text-lg mobile:text-base  text-[#434D3E]">
          A Product by DotENVTech Solutions LLP
        </footer>
      </div>
    </>
  );
}

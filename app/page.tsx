"use client";

import Head from "next/head";
import Waitlist from "./components/waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Join our waitlist to get early access to our exclusive offers and updates." />
        <meta name="keywords" content="waitlist, early access, exclusive offers, updates" />
        <meta property="og:title" content="Join Our Waitlist" />
        <meta property="og:description" content="Join our waitlist to get early access to our exclusive offers and updates." />
        <meta property="og:image" content="/whitelogo.svg" />
        <meta property="og:url" content="https://hodll.app" />
        <meta property="og:site_name" content="hodll" />
        <meta property="og:type" content="website" />
        <title>Join Our Waitlist</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c1704] p-8">
        <main className="flex flex-col items-center gap-6 w-full">
          <Image src="/whitelogo.svg" alt="Logo" width={300} height={50} />
          <h1 className="text-xl">Join our waitlist to get early access</h1>
          <Waitlist />
        </main>
      </div>
    </>
  );
}

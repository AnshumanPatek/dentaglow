//   import {
//   ClerkProvider,
// } from "@clerk/nextjs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSections from "@/components/landing/PricingSections";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {


  const user = await currentUser();

  //redirect auth user to dashboard
  if (user) redirect("/dashboard")


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSections />
      <CTA />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Hero from "./homepage/hero";
import Features from "./homepage/features";
import Expertise from "./homepage/expertise";
import Cta from "./homepage/cta";


export default function Home() {
  return (
    <>
      <main className="!mt-24 md:mt-0">
      <Hero />
      <Features />
      <Expertise />
      <Cta />
      </main>
    </>
  );
}

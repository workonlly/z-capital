import Image from "next/image";
import Hero from "./homepage/hero";
import Features from "./homepage/features";
import Expertise from "./homepage/expertise";
import Cta from "./homepage/cta";


export default function Home() {
  return (
    <>
      <main className="!pt-24 md:pt-0">
        <Hero />
        <Features />
        <Expertise />
        <Cta />
      </main>
    </>
  );
}

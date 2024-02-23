import Demo from "@/components/Demo";
import Detail from "@/components/Detail";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Readystart from "@/components/Readystart";
import React from "react";

export default function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Partner />
        <Detail />
        <Demo />
        <Readystart />
      </div>
    </section>
  );
}

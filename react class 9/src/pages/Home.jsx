import React from "react";
import NavigateBtns from "../components/NavigateBtns";

function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-ink">
            Clothing that fits <br /> how you actually live.
          </h1>
          <p className="mt-4 text-ink/60 max-w-md">
            Two curated collections, no clutter. Pick a side and start browsing.
          </p>
          <div className="mt-8">
            <NavigateBtns />
          </div>
        </div>
        <div className="aspect-[4/5] rounded-lg overflow-hidden">
          <img src="https://picsum.photos/seed/hero/800/1000" alt="Aurel & Co. collection" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <h2 className="font-display text-2xl text-ink">Two collections, kept simple.</h2>
        <p className="mt-2 text-ink/60">No overwhelming catalog — just the pieces worth wearing, sorted by who they're for.</p>
      </section>
    </div>
  );
}

export default Home;
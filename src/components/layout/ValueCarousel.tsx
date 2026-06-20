import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    headline: "A Millennium of Craftsmanship",
    body: "For over 1,000 years, sacred metalcraft traditions have been passed through generations of master artisans — preserving culture through timeless handmade forms.",
  },
  {
    headline: "Crafted in Panchaloha",
    body: "Every creation is cast using the ancient five-metal Panchaloha alloy, revered for its spiritual symbolism, balance, and enduring presence.",
  },
  {
    headline: "The Sustainability: Conscious Luxury, By Hand",
    body: "True luxury takes time. Our creations are entirely handmade using sustainable, age-old casting techniques — no mass production, minimal footprint, and absolute devotion to the earth and the artisan.",
  },
];

export function ValueCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [tileHeight, setTileHeight] = useState<number | undefined>(undefined);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // After first render, measure the hidden sizer div and lock the tile height
  useEffect(() => {
    if (measureRef.current) {
      setTileHeight(measureRef.current.offsetHeight);
    }
  }, []);

  const goTo = (next: number) => {
    const index = ((next % CARDS.length) + CARDS.length) % CARDS.length;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 450);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo(current + 1);
    }, 10000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  return (
    <section className="px-5 md:px-10 pb-12">
      <p className="text-xs uppercase tracking-widest text-black font-medium mb-5">
        Foundations
      </p>

      {/*
        Invisible sizer: renders all cards stacked, takes the height of the tallest.
        Hidden from view and screen readers. Removed from layout once height is captured.
      */}
      {tileHeight === undefined && (
        <div
          ref={measureRef}
          aria-hidden="true"
          style={{ visibility: "hidden", position: "absolute", pointerEvents: "none", width: "100%" }}
          className="px-8 md:px-16 py-12 bg-[#f7f5f2] flex flex-col items-center gap-12"
        >
          {CARDS.map((card, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-5 w-full max-w-xl">
              <h3
                className="text-black font-bold leading-tight"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}
              >
                {card.headline}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* The actual visible tile, height locked to tallest card */}
      <div
        className="bg-[#f7f5f2] px-8 md:px-16 flex items-center justify-center"
        style={{
          height: tileHeight !== undefined ? tileHeight / CARDS.length + 96 : "auto",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          className="flex flex-col items-center text-center gap-5 w-full max-w-xl"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.45s ease",
          }}
        >
          <h3
            className="text-black font-bold leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}
          >
            {CARDS[current].headline}
          </h3>
          <p className="text-sm text-black/60 leading-relaxed">
            {CARDS[current].body}
          </p>
        </div>
      </div>
    </section>
  );
}
"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Extra = () => {
  return (
    <section className="mt-28">
        <h2 className="text-center text-4xl font-bold text-white">
            Extracurricular Activities
        </h2>        
        <HorizontalScrollCarousel />
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} id="extra" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[500px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Extra;

const cards = [
  {
    url: "/images/extra/isf.jpg",
    id: 1,
  },
  {
    url: "/images/extra/mcisf.png",
    id: 2,
  },
  {
    url: "/images/extra/aicamp.png",
    id: 3,
  },
  {
    url: "/images/extra/aicode.jpg",
    id: 4,
  },
  {
    url: "/images/extra/basketball.png",
    id: 5,
  },
  {
    url: "/images/extra/football.png",
    id: 6,
  },
  {
    url: "/images/extra/sportmedal.png",
    id: 7,
  },
  {
    url: "/images/extra/mili.jpg",
    id: 8,
  },
];
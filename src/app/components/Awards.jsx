"use client";
import React, { useState, useRef } from "react";
import { motion} from "framer-motion";
import "./styles.scss";
import { Content } from "next/font/google";

const awardsData = [
  {
    id: 1,
    title: "The 17th and 18th Thailand Olympiad in Informatics",
    image: "/images/awards/toi.png",
    smdes: "Bronze and silver medals",
    des: "lorem"
  },
  {
    id: 2,
    title: "IChTo 2023",
    image: "/images/awards/ichto.png",
    smdes: "Team 3rd place award",
    des: "lorem"
  },
  {
    id: 3,
    title: "Kibo Robot Programming Challenge 2023",
    image: "/images/awards/kibo.png",
    smdes: "Top 25 team of Thailand while competing with undergraduate students",
    des: "lorem"
  },
  {
    id: 4,
    title: "Thailand Young Scientist Competition 2023",
    image: "/images/awards/ysc.png",
    smdes: "",
    des: "lorem"
  },
  {
    id: 5,
    title: "International Greenwich Olympiad 2023",
    image: "/images/awards/igo.png",
    des: "lorem"
  },
  {
    id: 6,
    title: "Conrad Challenge 2023",
    image: "/images/awards/conrad.png",
    des: "lorem"
},
  {
    id: 7,
    title: "ASEAN Data Science Explorers 2023",
    image: "/images/awards/aseandse.png",
    des:"lorem"
},
  {
    id: 8,
    title: "Bangmod Hackathon 2023 & 2024",
    image: "/images/awards/bangmod.png",
    des:"lorem awodnadafneiflhjsndfmao;ergnelhnslmefrgoepnj;fsdknehliurjoekflsdn ebjwhrijokldfsnhweurjiokfd"
},
];

function AwardContent({title, description}){
  return (
    <motion.div layout className="w-full h-full text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <motion.h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</motion.h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

function ExpandedAward({children, onCollapse}){
  return (
    <div>
      <motion.div onClick={onCollapse}>
        {children}
      </motion.div>
    </div>
  )
}

function CompactAward({children,onExpand,disabled}){
  return (
    <motion.div onClick={disabled? undefined : onExpand}>
      {children}
    </motion.div>
  )
}

function AwardButton({title,description, onCollapse, onExpand, disabled}){
  const [isExpand, setIsExpanded] = useState(false);

  const collapseAward = () => {
    setIsExpanded(false);
    onCollapse();
  }

  const expandAward = () => {
    setIsExpanded(true);
    onExpand();
  }

  return (
    <div>
      {isExpand ? (
        <ExpandedAward onCollapse={collapseAward}>
          <AwardContent title={title} description={description} disabled={disabled}/>
        </ExpandedAward>
      ): (
        <CompactAward onExpand={expandAward}>
          <AwardContent title={title} description={description} disabled={disabled}/>
        </CompactAward>
      )}
    </div>
  )
}

export default function Awards(){
  const [selectedId, setSelectedId] = useState(undefined);
  return (
    <section id="awards">
        <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
            Awards
        </h2>
        <div className="layout-cards">
          {awardsData.map((award) => (
              <AwardButton
                key={award.id}
                title={award.title}
                description={award.des}
                disabled={selectedId !== award.id && selectedId !== undefined}
                onClick={()=>setSelectedId(award.id)}
                onExpand={() => setSelectedId(award.id)}
                onCollapse={() => setSelectedId()}
              />
          ))}
        </div>
    </section>    
  )
};
import React from "react";
import { motion } from "framer-motion";
import "./ServicesCard.css";

const colorScheme = {
  type1: {
    cardbg: "var(--gray)",
    arrow: "var(--green)",
    arrowbg: "var(--dark)",
    textbg: "var(--green)",
  },
  type2: {
    cardbg: "var(--green)",
    arrow: "var(--green)",
    arrowbg: "var(--dark)",
    textbg: "var(--gray)",
  },
  type3: {
    cardbg: "var(--dark)",
    arrow: "var(--dark)",
    arrowbg: "var(--gray)",
    textbg: "var(--green)",
  },
};

const ServicesCard = (props) => {
  const cardArray = Object.values(props.cardInfo);

  return (
    <>
      {cardArray.map((card, index) => {
        const colorType =
          colorScheme[`type${(index % Object.keys(colorScheme).length) + 1}`];
        const learnMoreTextColor =
          colorType === colorScheme.type3 ? "text-white" : "text-black";

        return (
          <div
            className="services_card p-8 rounded-3xl flex items-center justify-between shadow-[0px_5px_0px_#191A23] border-1 border-black"
            key={index}
            style={{ backgroundColor: colorType.cardbg }}
          >
            <div className="info_block_card">
              <div className="text">
                <p
                  className="text-2xl font-semibold w-fit px-3 rounded-lg block__title" 
                  style={{ backgroundColor: colorType.textbg }}
                >
                  {card.title}
                </p>
                <p
                  className="text-2xl font-semibold w-fit px-3 rounded-lg block__subtitle"
                  style={{ backgroundColor: colorType.textbg }}
                >
                  {card.subtitle}
                </p>
              </div>
              <div className="learn__more__button pt-20">
                <button className={`flex items-center ${learnMoreTextColor} button__learn__more`}>
                  <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: colorType.arrowbg }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <svg
                      className="w-6 h-6 transform -rotate-125 ml-0.5 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: colorType.arrow }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 9.707a1 1 0 011.414 0L10 14.586V3a1 1 0 112 0v11.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </motion.div>
                  <div className="learn__more__text">
                    <p className="pl-3">Learn More</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="img_service_card ">
              <img
                src={card.img}
                alt={card.title}
                className="w-44 h-35 object-cover rounded-3xl"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServicesCard;

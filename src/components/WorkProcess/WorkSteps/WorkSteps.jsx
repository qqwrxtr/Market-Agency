import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkSteps = ({ steps }) => {
  const [activeStep, setActiveStep] = useState('01');

  const toggleStep = (id) => {
    if (activeStep !== id) {
      setActiveStep(id);
    }
  };

  return (
    <div className="work__step__block space-y-4 mt-10 md:mt-20">
      {Object.values(steps).map((step) => (
        <div
          key={step.id}
          className={`work__step__item border-1 shadow-[0px_5px_0px_#191A23] rounded-3xl sm:p-5 p-3 ${
            activeStep === step.id ? 'bg-[var(--green)]' : 'bg-white'
          }`}
        >
          <div className="text__work__step flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="work_step_id">
                  <p className="text-3xl md:text-6xl font-semibold">{step.id}</p>
                </div>
                <div className="work__step__title pl-2 sm:pl-7">
                  <p className="text-md  sm:text-xl md:text-3xl">{step.title}</p>
                </div>
              </div>
              <div className="collapse__button_details">
                <button
                  className="toggle-button w-8 h-8 md:w-14 md:h-14 border-1 text-2xl md:text-4xl rounded-full flex items-center justify-center bg-white"
                  onClick={() => toggleStep(step.id)}
                >
                  {activeStep === step.id ? '-' : '+'}
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {activeStep === step.id && (
              <>
                <motion.div
                  key={`${step.id}-line`}
                  className="border-1 border-black mt-5"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ width: 0, transition: { duration: 0 } }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  key={`${step.id}-content`}
                  className="work__step__subtitle p-2 md:p-4 rounded-b-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="subtitle__work__process md:text-base text-sm">{step.subtitle}</p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default WorkSteps;

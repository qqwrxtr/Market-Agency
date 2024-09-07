import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = {
  step1: {
    id: '01',
    title: 'Consultation',
    subtitle:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  step2: {
    id: '02',
    title: 'Research and Strategy Development',
    subtitle:
      'We will conduct thorough research to develop a strategy that aligns with your business objectives and helps you reach your target audience effectively.',
  },
  step3: {
    id: '03',
    title: 'Implementation',
    subtitle:
      'Our team will execute the strategy with precision, ensuring all aspects of the plan are implemented effectively to achieve your desired results.',
  },
  step4: {
    id: '04',
    title: 'Monitoring and Optimization',
    subtitle:
      'We will continuously monitor your strategy’s performance and make optimizations as necessary to ensure optimal results and maximize your ROI.',
  },
  step5: {
    id: '05',
    title: 'Reporting and Communication',
    subtitle:
      'We provide regular reports and updates on your strategy’s performance, keeping you informed of progress and adjustments made to improve outcomes.',
  },
  step6: {
    id: '06',
    title: 'Continual Improvement',
    subtitle:
      'Our team is committed to continual improvement, always refining strategies and techniques to keep your business ahead of the competition.',
  },
};

const WorkSteps = () => {
  const [activeStep, setActiveStep] = useState('01');

  const toggleStep = (id) => {
    if (activeStep !== id) {
      setActiveStep(id);
    }
  };

  return (
    <div className="work__step__block space-y-4 mt-20">
      {Object.values(steps).map((step) => (
        <div
          key={step.id}
          className={`work__step__item border-1 shadow-[0px_5px_0px_#191A23] rounded-3xl p-9 ${activeStep === step.id ? 'bg-[var(--green)]' : 'bg-white'
            }`}
        >
          <div className="text__work__step flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="work_step_id">
                  <p className="text-6xl font-semibold">{step.id}</p>
                </div>
                <div className="work__step__title pl-7">
                  <p className="text-3xl">{step.title}</p>
                </div>
              </div>
              <div className="collapse__button_details">
                <button
                  className="toggle-button w-14 h-14 border-1 text-4xl rounded-full flex items-center justify-center bg-white"
                  onClick={() => toggleStep(step.id)}
                >
                  {activeStep === step.id ? '-' : '+'}
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {activeStep === step.id && (
              <>
                <motion.div
                  className="border-1 border-black mt-5"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ opacity: 0, transition: { duration: 0 } }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="work__step__subtitle p-4 rounded-b-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{step.subtitle}</p>
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

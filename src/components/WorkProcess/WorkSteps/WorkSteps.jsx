import React, { useState } from 'react';

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
};

const WorkSteps = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="work__step__block space-y-4">
      {Object.values(steps).map((step) => (
        <div
          key={step.id}
          className={`work__step__item border-[1px] shadow-[0px_5px_0px_#191A23] rounded-3xl p-9 ${
            activeStep === step.id ? 'bg-[var(--green)]' : 'bg-white'
          }`}
        >
          <div className="text__work__step flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <div className="work_step_id">
                  <p className="text-6xl font-semibold">{step.id}</p>
                </div>
                <div className="work__step__title pl-7">
                  <p className="text-3xl">{step.title}</p>
                </div>
              </div>
              {activeStep === step.id && (
                <div className="border-t border-black mt-5" style={{width:"100%"}}></div>
              )}
            </div>
            <button
              className="toggle-button w-14 h-14 border-[1px] text-4xl rounded-full flex items-center justify-center"
              onClick={() => toggleStep(step.id)}
            >
              {activeStep === step.id ? '-' : '+'}
            </button>
          </div>
          {activeStep === step.id && (
            <div className="work__step__subtitle p-4 rounded-b-lg">
              <p>{step.subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkSteps;

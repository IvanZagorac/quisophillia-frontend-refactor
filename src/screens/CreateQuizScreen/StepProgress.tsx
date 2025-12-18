/* eslint-disable max-len */
import React from 'react';

interface Props {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const StepProgress: React.FC<Props> = ({ currentStep, onStepChange }) => 
{
    const steps = ['Osnovne informacije', 'Postavke', 'Postavi kviz'];

    return (
        <div className="flex flex-row items-center justify-between mt-5 mb-5 w-full">
            {steps.map((label, index) => 
            {
                const stepNumber = index + 1;
                const isCompleted = stepNumber < currentStep;
                const isActive = stepNumber === currentStep;

                return (
                    <React.Fragment key={index}>
                        {index !== 0 && <div className="h-0.5 bg-[#00D4FF] flex-1 mx-1"></div>}
                        <button onClick={() => onStepChange(stepNumber)} className="flex flex-col items-center bg-transparent border-none cursor-pointer">
                            <div className={`w-3.5 h-3.5 rounded-full border-2 mb-1 ${isCompleted || isActive ? 'bg-[#00D4FF] border-[#00D4FF]' : 'bg-[#19294d] border-[#00D4FF]'}`}></div>
                            <p className={`text-xs text-center w-20 mobile:w-16 ${isActive ? 'text-[#00D4FF] font-bold' : 'text-white'}`}>{label}</p>
                        </button>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default StepProgress;

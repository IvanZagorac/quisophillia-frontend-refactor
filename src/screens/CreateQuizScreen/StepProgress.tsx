/* eslint-disable max-len */
import React from 'react';
import { StepContainerWrapper, StepContainer, Circle, Line, StepLabel } from './CreateQuizStyle';

interface Props {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const StepProgress: React.FC<Props> = ({ currentStep, onStepChange }) =>
{
    const steps = ['Osnovne informacije', 'Postavke', 'Postavi kviz'];

    return (
        <StepContainerWrapper>
            {steps.map((label, index) =>
            {
                const isCompleted = index < currentStep;
                const isActive = index +1 === currentStep; // Corrected logic: isActive is current step

                return (
                    <React.Fragment key={index}>
                        {index !== 0 && <Line />}
                        <StepContainer as="button" onClick={() => onStepChange(index + 1)}> {/* Use index + 1 for step number */}
                            <Circle completed={isCompleted} active={isActive} />
                            <StepLabel active={isActive}>{label}</StepLabel>
                        </StepContainer>
                    </React.Fragment>
                );
            })}
        </StepContainerWrapper>
    );
};

export default StepProgress;


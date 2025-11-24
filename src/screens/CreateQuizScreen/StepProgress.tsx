/* eslint-disable max-len */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createQuizStyle } from './CreateQuizStyle';

interface Props {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const StepProgress: React.FC<Props> = ({ currentStep, onStepChange }) => 
{
    const steps = ['Osnovne informacije', 'Postavke', 'Postavi kviz'];

    return (
        <View style={createQuizStyle.containerStep}>
            {steps.map((label, index) => 
            {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                    <React.Fragment key={index}>
                        {index !== 0 && <View style={createQuizStyle.line} />}
                        <TouchableOpacity onPress={() => onStepChange(index)} style={createQuizStyle.stepContainer}>
                            <View style={[createQuizStyle.circle, isCompleted && createQuizStyle.completedCircle, isActive && createQuizStyle.activeCircle]} />
                            <Text style={[createQuizStyle.labelStep, isActive && createQuizStyle.activeLabel]}>{label}</Text>
                        </TouchableOpacity>
                    </React.Fragment>
                );
            })}
        </View>
    );
};

export default StepProgress;

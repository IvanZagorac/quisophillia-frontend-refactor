/* eslint-disable max-len */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createQuizStyle } from './CreateQuizStyle';
import StepProgress from './StepProgress';
// import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateQuizScreen() 
{
    const [step, setStep] = useState(1);

    // Step 1
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [pause, setPause] = useState('');
    const [category, setCategory] = useState('');
    const [totalQuestions, setTotalQuestions] = useState<string>('');
    const [startDate, setStartDate] = useState(new Date());
    const [currentCount, setCurrentCount] = useState<number>(0);

    // Step 2 - question form
    const [questionType, setQuestionType] = useState('Pjesma');
    const [questionText, setQuestionText] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [wrongAnswer, setWrongAnswer] = useState('');

    const onNext = () => 
    {
        if (step < 3) 
        {
            setStep(step + 1);
        }
    };

    return (
        <ScrollView style={createQuizStyle.container}>
            <Text style={createQuizStyle.title}>Napravi novi kviz</Text>
            <View style={createQuizStyle.stepIndicator}>
                <StepProgress currentStep={step} onStepChange={setStep} />
                {/* <Text style={[createQuizStyle.step, step >= 1 && createQuizStyle.activeStep]}>Osnovne informacije</Text>
                <Text style={[createQuizStyle.step, step >= 2 && createQuizStyle.activeStep]}>Postavke</Text>
                <Text style={[createQuizStyle.step, step >= 3 && createQuizStyle.activeStep]}>Postavi kviz</Text> */}
            </View>

            {step === 1 && (
                <>
                    <TextInput style={createQuizStyle.input} placeholder="Cijena" value={price} onChangeText={setPrice} />
                    <TextInput style={createQuizStyle.input} placeholder="Trajanje" value={duration} onChangeText={setDuration} />
                    <TextInput style={createQuizStyle.input} placeholder="Pauza" value={pause} onChangeText={setPause} />
                    <TextInput style={createQuizStyle.input} placeholder="Kategorija" value={category} onChangeText={setCategory} />
                    <TextInput style={createQuizStyle.input} placeholder="Ukupno pitanja" keyboardType="numeric" value={totalQuestions} onChange={setTotalQuestions} />

                    <View style={createQuizStyle.datePickerContainer}>
                        <Text style={createQuizStyle.label}>Datum početka</Text>
                        {/* <DateTimePicker value={startDate} mode="datetime" display="default" onChange={(e: any, date: any) => date && setStartDate(date)} /> */}
                    </View>
                </>
            )}

            {step === 2 && (
                <>
                    <View style={createQuizStyle.containerProgress}>
                        {Array.from({ length: parseInt(totalQuestions,10 ) }).map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    createQuizStyle.box,
                                    index < currentCount ? createQuizStyle.filledBox : createQuizStyle.emptyBox
                                ]}
                            />
                        ))}
                    </View>
                    <Text style={createQuizStyle.subtitle}>Pitanje 1</Text>

                    <Text style={createQuizStyle.label}>Tip pitanja</Text>
                    <Picker selectedValue={questionType} onValueChange={setQuestionType} style={createQuizStyle.picker}>
                        <Picker.Item label="Pjesma" value="Pjesma" />
                        <Picker.Item label="Tekst" value="Tekst" />
                        <Picker.Item label="Slika" value="Slika" />
                    </Picker>

                    <TextInput style={createQuizStyle.input} placeholder="Pitanje" value={questionText} onChangeText={setQuestionText} />
                    <TextInput style={createQuizStyle.input} placeholder="Točan odgovor" keyboardType="numeric" value={correctAnswer} onChangeText={setCorrectAnswer} />
                    <TextInput style={createQuizStyle.input} placeholder="Netočan odgovor" keyboardType="numeric" value={wrongAnswer} onChangeText={setWrongAnswer} />
                </>
            )}

            <TouchableOpacity style={createQuizStyle.button} onPress={onNext}>
                <Text style={createQuizStyle.buttonText}>Sljedeće</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}



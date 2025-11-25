/* eslint-disable max-len */
import React, { useState } from 'react';
import { Container, Title, StepIndicator, Input, Label, StyledSelect, DatePickerContainer, Subtitle, Button, ButtonText, ProgressBarWrapper, ProgressBarBox } from './CreateQuizStyle';
import StepProgress from './StepProgress'; // Will be converted separately

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
        <Container>
            <Title>Napravi novi kviz</Title>
            <StepIndicator>
                <StepProgress currentStep={step} onStepChange={setStep} />
            </StepIndicator>

            {step === 1 && (
                <>
                    <Input type="text" placeholder="Cijena" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <Input type="text" placeholder="Trajanje" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <Input type="text" placeholder="Pauza" value={pause} onChange={(e) => setPause(e.target.value)} />
                    <Input type="text" placeholder="Kategorija" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <Input type="number" placeholder="Ukupno pitanja" value={totalQuestions} onChange={(e) => setTotalQuestions(e.target.value)} />

                    <DatePickerContainer>
                        <Label>Datum početka</Label>
                        {/* <input type="datetime-local" value={startDate.toISOString().slice(0, 16)} onChange={(e) => setStartDate(new Date(e.target.value))} /> */}
                    </DatePickerContainer>
                </>
            )}

            {step === 2 && (
                <>
                    <ProgressBarWrapper>
                        {Array.from({ length: parseInt(totalQuestions, 10) }).map((_, index) => (
                            <ProgressBarBox
                                key={index}
                                filled={index < currentCount}
                            />
                        ))}
                    </ProgressBarWrapper>
                    <Subtitle>Pitanje 1</Subtitle>

                    <Label>Tip pitanja</Label>
                    <StyledSelect value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
                        <option value="Pjesma">Pjesma</option>
                        <option value="Tekst">Tekst</option>
                        <option value="Slika">Slika</option>
                    </StyledSelect>

                    <Input type="text" placeholder="Pitanje" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                    <Input type="number" placeholder="Točan odgovor" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
                    <Input type="number" placeholder="Netočan odgovor" value={wrongAnswer} onChange={(e) => setWrongAnswer(e.target.value)} />
                </>
            )}

            <Button onClick={onNext}>
                <ButtonText>Sljedeće</ButtonText>
            </Button>
        </Container>
    );
}

/* eslint-disable max-len */
import { useState } from 'react';
import StepProgress from './StepProgress';

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

    // Step 2
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

    const inputClasses = 'border-b border-[#00D4FF] text-white mb-4 pt-2 pb-2 bg-transparent outline-none w-full';
    const labelClasses = 'text-[#AAA] mt-2.5 mb-1';

    return (
        <div className="flex-1 bg-[#0B1633] p-5 tablet:p-10">
            <h1 className="text-xl text-white mb-5 text-center">Napravi novi kviz</h1>
            <div className="flex flex-row justify-around mb-5">
                <StepProgress currentStep={step} onStepChange={setStep} />
            </div>

            {step === 1 && (
                <>
                    <input type="text" placeholder="Cijena" value={price} onChange={(e) => setPrice(e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Trajanje" value={duration} onChange={(e) => setDuration(e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Pauza" value={pause} onChange={(e) => setPause(e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Kategorija" value={category} onChange={(e) => setCategory(e.target.value)} className={inputClasses} />
                    <input type="number" placeholder="Ukupno pitanja" value={totalQuestions} onChange={(e) => setTotalQuestions(e.target.value)} className={inputClasses} />

                    <div className="mt-2.5">
                        <p className={labelClasses}>Datum početka</p>
                        {/* Date picker implementation would go here */}
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="flex flex-row mt-2.5 flex-wrap gap-1">
                        {Array.from({ length: parseInt(totalQuestions, 10) || 0 }).map((_, index) => (
                            <div key={index} className={`w-2.5 h-2.5 m-0.5 rounded-sm ${index < currentCount ? 'bg-[#00D4AA] opacity-100' : 'bg-white opacity-50'}`}></div>
                        ))}
                    </div>
                    <h2 className="text-lg text-white mb-2.5">Pitanje {currentCount + 1}</h2>

                    <p className={labelClasses}>Tip pitanja</p>
                    <select value={questionType} onChange={(e) => setQuestionType(e.target.value)} className="bg-[#19294d] text-white mb-4 p-2 border border-[#19294d] rounded-md outline-none w-full">
                        <option value="Pjesma">Pjesma</option>
                        <option value="Tekst">Tekst</option>
                        <option value="Slika">Slika</option>
                    </select>

                    <input type="text" placeholder="Pitanje" value={questionText} onChange={(e) => setQuestionText(e.target.value)} className={inputClasses} />
                    <input type="number" placeholder="Točan odgovor" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} className={inputClasses} />
                    <input type="number" placeholder="Netočan odgovor" value={wrongAnswer} onChange={(e) => setWrongAnswer(e.target.value)} className={inputClasses} />
                </>
            )}

            <button onClick={onNext} className="bg-[#00D4FF] p-3 rounded-md mt-7 flex items-center justify-center border-none cursor-pointer w-full">
                <span className="text-black font-bold">Sljedeće</span>
            </button>
        </div>
    );
}

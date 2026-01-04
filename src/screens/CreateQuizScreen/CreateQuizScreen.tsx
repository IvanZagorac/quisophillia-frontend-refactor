/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux'; // Keep useDispatch and useSelector for categories

import api from '../../api/api';
import { RootState, AppDispatch } from '../../store/store'; // Keep RootState and AppDispatch for categories
import { fetchCategories } from '../../store/categories/categoriesSlice';

import StepProgress from './StepProgress';
import QuestionStepper from './QuestionStepper';
import { Question } from '../../types/Question';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/quiz/datepicker.css';

const initialQuestionState: Question = {
    type: 'standard',
    text: '',
    correctAnswer: '',
    duration: 0,
    points: 0,
};

const initialState = {
    step: 1,
    price: 10,
    duration: 60,
    pause: 15,
    categoryId: 1,
    totalQuestions: 3,
    startDate: new Date().toISOString(),
    questions: [] as Question[],
    currentQuestionIndex: 0,
    currentQuestion: initialQuestionState,
};

export default function CreateQuizScreen() 
{
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>(); // Correctly typed dispatch for thunks

    const [quiz, setQuiz] = useState(initialState);
    const { step, price, duration, pause, categoryId, totalQuestions, startDate, questions, currentQuestionIndex, currentQuestion } = quiz;
    const user = useSelector((state: RootState) => state.user.user);

    const { items: categories, status: categoriesStatus } = useSelector((state: RootState) => state.categories);

    useEffect(() => 
    {
        if (categoriesStatus === 'idle') 
        {
            dispatch(fetchCategories());
        }
    }, [categoriesStatus, dispatch]);


    useEffect(() => 
    {
        console.log(user);
        return () => 
        {
            setQuiz(initialState); // Reset local state
        };
    }, []);

    const handleStep1Change = (field: string, value: any) => 
    {
        setQuiz(prevQuiz => ({
            ...prevQuiz,
            [field]: (field === 'startDate' && value instanceof Date) ? value.toISOString() : value,
        }));
    };

    const handleCurrentQuestionChange = (field: keyof Question, value: string | number) => 
    {
        setQuiz(prevQuiz => ({
            ...prevQuiz,
            currentQuestion: {
                ...prevQuiz.currentQuestion,
                [field]: value,
            },
        }));
    };

    const handleQuestionNavigation = (index: number) => 
    {
        const { text, correctAnswer } = currentQuestion;
        const isFormDirty = text.trim() !== '' || correctAnswer.trim() !== '';

        if (isFormDirty && (!text.trim() || !correctAnswer.trim())) 
        {
            alert('Započeli ste s unosom. Molimo popunite sva polja prije nastavka.');
            return;
        }

        setQuiz(prevQuiz => 
        {
            const newQuestions = [...prevQuiz.questions];
            const newCurrentQuestion = { ...prevQuiz.currentQuestion };

            if (isFormDirty) 
            {
                newQuestions[prevQuiz.currentQuestionIndex] = newCurrentQuestion;
            }

            if (index === prevQuiz.totalQuestions) 
            {
                if (newQuestions.length < prevQuiz.totalQuestions) 
                {
                    alert(`Molimo ispunite sva pitanja. Uneseno: ${newQuestions.length}/${prevQuiz.totalQuestions}.`);
                    return prevQuiz; // Prevent quiz update
                }
                return { ...prevQuiz, step: 3, questions: newQuestions };
            }
            
            if (index >= 0 && index < prevQuiz.totalQuestions) 
            {
                const nextQuestionData = newQuestions[index];
                return { 
                    ...prevQuiz,
                    currentQuestionIndex: index,
                    questions: newQuestions,
                    currentQuestion: nextQuestionData ? { ...nextQuestionData } : initialQuestionState,
                };
            }
            return prevQuiz;
        });
    };
    
    const handleNextStep = () => 
    {
        if (quiz.step === 1) 
        {
            if (quiz.totalQuestions > 0) 
            {
                setQuiz(prevQuiz => ({ ...prevQuiz, step: 2 }));
            }
            else 
            {
                alert('Molim vas unesite ukupan broj pitanja.');
            }
        }
        else 
        {
            setQuiz(prevQuiz => ({ ...prevQuiz, step: prevQuiz.step + 1 }));
        }
    };


    const handleCreateQuiz = async () => 
    {
        const quizData = {
            prize: price, 
            duration, 
            pause, 
            categoryId, 
            startAt: startDate,
            userId: user?.userId,
            questions: questions.map((q) => ({
                question: q.text,
                answer: q.correctAnswer,
                time: q.duration,
                points: q.points, 
                type: q.type,
            })),
        };

        console.log(user?.userId);
        try 
        {
            const result = await api('quiz/create', 'POST', quizData);
            if (result.status === 'ok') 
            {
                alert('Kviz je uspješno kreiran!');
                setQuiz(initialState); // Reset local quiz
                navigate('/');
            }
            else 
            {
                alert(`Greška pri kreiranju kviza: ${result.data}`);
            }
        }
        catch (error) 
        {
            console.error('Greška pri slanju podataka:', error);
            alert('Došlo je do neočekivane greške.');
        }
    };

    const inputClasses = 'border-b border-[#00D4FF] text-white mb-4 pt-2 pb-2 bg-transparent outline-none w-full';
    const labelClasses = 'text-[#AAA] mt-2.5 mb-1';

    return (
        <div className="flex-1 bg-[#0B1633] p-5 tablet:p-10">
            <h1 className="text-xl text-white mb-5 text-center">Napravi novi kviz</h1>
            <div className="flex flex-row justify-around mb-5">
                <StepProgress currentStep={step} onStepChange={(s) => setQuiz(prevQuiz => ({ ...prevQuiz, step: s }))} />
            </div>

            {step === 1 && (
                <>
                    <input type="text" placeholder="Cijena" value={price} onChange={(e) => handleStep1Change('price', e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Trajanje (minute)" value={duration} onChange={(e) => handleStep1Change('duration', e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Pauza (sekunde)" value={pause} onChange={(e) => handleStep1Change('pause', e.target.value)} className={inputClasses} />
                    <select
                        value={categoryId}
                        onChange={(e) => handleStep1Change('categoryId', parseInt(e.target.value, 10))}
                        className={`${inputClasses} bg-[#0B1633]`}
                    >
                        <option value="" disabled>Odaberite kategoriju</option>
                        {Array.isArray(categories) && categories.map((cat) => (
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    <input type="number" placeholder="Ukupno pitanja" value={totalQuestions} onChange={(e) => handleStep1Change('totalQuestions', parseInt(e.target.value, 10) || 0)} className={inputClasses} />
                    <div className="mt-2.5">
                        <p className={labelClasses}>Datum početka</p>
                        <DatePicker
                            selected={startDate ? new Date(startDate) : null}
                            onChange={(date: Date | null) => handleStep1Change('startDate', date)}
                            className={inputClasses}
                            placeholderText="Odaberite datum početka"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <QuestionStepper
                        total={totalQuestions}
                        current={currentQuestionIndex}
                        completed={questions.length}
                        onSelect={handleQuestionNavigation}
                    />
                    <h2 className="text-lg text-white mb-2.5">Pitanje {currentQuestionIndex + 1}</h2>
                    <p className={labelClasses}>Tip pitanja</p>
                    <select value={currentQuestion.type} onChange={(e) => handleCurrentQuestionChange('type', e.target.value)} className="bg-[#19294d] text-white mb-4 p-2 border border-[#19294d] rounded-md outline-none w-full">
                        <option value="Tekst">Tekst</option>
                        <option value="Pjesma">Pjesma</option>
                        <option value="Slika">Slika</option>
                    </select>
                    <input type="text" placeholder="Pitanje" value={currentQuestion.text} onChange={(e) => handleCurrentQuestionChange('text', e.target.value)} className={inputClasses} />
                    <input type="text" placeholder="Točan odgovor" value={currentQuestion.correctAnswer} onChange={(e) => handleCurrentQuestionChange('correctAnswer', e.target.value)} className={inputClasses} />
                    <p className={labelClasses}>Trajanje pitanja (sec)</p>
                    <input type="number" placeholder="Trajanje pitanja (sec)" value={currentQuestion.duration} onChange={(e) => handleCurrentQuestionChange('duration', parseInt(e.target.value, 10) || 0)} className={inputClasses} />
                    <p className={labelClasses}>Bodovi</p>
                    <input type="number" placeholder="Bodovi" value={currentQuestion.points} onChange={(e) => handleCurrentQuestionChange('points', parseInt(e.target.value, 10) || 0)} className={inputClasses} />

                    <div className="flex gap-4 mt-7">
                        <button onClick={() => handleQuestionNavigation(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className="bg-gray-500 p-3 rounded-md flex items-center justify-center border-none cursor-pointer w-full disabled:opacity-50">
                            <span className="text-white font-bold">Prethodno</span>
                        </button>
                        <button onClick={() => handleQuestionNavigation(currentQuestionIndex + 1)} className="bg-[#00D4FF] p-3 rounded-md flex items-center justify-center border-none cursor-pointer w-full">
                            <span className="text-black font-bold">
                                {currentQuestionIndex === totalQuestions - 1 ? 'Završi i pregledaj' : 'Sljedeće'}
                            </span>
                        </button>
                    </div>
                </>
            )}

            {step === 3 && (
                <div className="text-white">
                    <h2 className="text-lg text-white mb-4 border-b border-[#00D4FF] pb-2">Pregled kviza</h2>
                    <div className="mb-4">
                        <p><strong className="text-[#00D4FF]">Cijena:</strong> {price}€</p>
                        <p><strong className="text-[#00D4FF]">Trajanje:</strong> {duration} minuta</p>
                        <p><strong className="text-[#00D4FF]">Pauza:</strong> {pause} sekundi</p>
                        <p><strong className="text-[#00D4FF]">Kategorija:</strong> {categories.
                            filter(cat=>cat.categoryId === categoryId).
                            map(cat=> cat.name)}</p>
                        <p><strong className="text-[#00D4FF]">Ukupno pitanja:</strong> {totalQuestions}</p>
                    </div>
                    <div>
                        <h3 className="text-md text-white mb-2">Pitanja:</h3>
                        {questions.map((q, index) => (
                            <div key={index} className="mb-3 p-2 border border-gray-600 rounded-md">
                                <p><strong className="text-[#00D4FF]">Pitanje {index + 1}:</strong> {q.text}</p>
                                <p className="text-green-400">Točan odgovor: {q.correctAnswer}</p>
                                <p className="text-gray-400">Trajanje: {q.duration}s, Bodovi: {q.points}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step !== 2 && (
                <div className="flex gap-4 mt-7">
                    {step > 1 && (
                        <button onClick={() => setQuiz(prevQuiz => ({ ...prevQuiz, step: prevQuiz.step - 1 }))} className="bg-gray-500 p-3 rounded-md flex items-center justify-center border-none cursor-pointer w-full">
                            <span className="text-white font-bold">Nazad</span>
                        </button>
                    )}
                    {step < 3 ? (
                        <button onClick={handleNextStep} className="bg-[#00D4FF] p-3 rounded-md flex items-center justify-center border-none cursor-pointer w-full">
                            <span className="text-black font-bold">Sljedeće</span>
                        </button>
                    ) : (
                        <button onClick={handleCreateQuiz} className="bg-[#00D4AA] p-3 rounded-md flex items-center justify-center border-none cursor-pointer w-full">
                            <span className="text-black font-bold">Napravi kviz</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

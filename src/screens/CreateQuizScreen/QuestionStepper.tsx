import React from 'react';

interface Props {
  total: number;
  current: number;
  completed: number;
  onSelect: (index: number) => void;
}

const QuestionStepper: React.FC<Props> = ({ total, current, completed, onSelect }) => 
{
    return (
        <div className="flex flex-wrap justify-center items-center gap-2 my-4">
            {Array.from({ length: total }).map((_, index) => 
            {
                const isCompleted = index < completed;
                const isCurrent = index === current;
                const isSelectable = index <= completed;

                let circleClasses = 'w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ';
                if (isCurrent) 
                {
                    circleClasses += 'bg-[#00D4FF] text-black border-2 border-[#00D4FF]';
                }
                else if (isCompleted) 
                {
                    circleClasses += 'bg-[#00D4AA] text-black border-2 border-[#00D4AA]';
                }
                else 
                {
                    circleClasses += 'bg-transparent text-white border-2 border-gray-500';
                }

                if (isSelectable) 
                {
                    circleClasses += ' cursor-pointer';
                }
                else 
                {
                    circleClasses += ' cursor-not-allowed opacity-50';
                }

                return (
                    <button
                        key={index}
                        disabled={!isSelectable}
                        onClick={() => onSelect(index)}
                        className={circleClasses}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
};

export default QuestionStepper;

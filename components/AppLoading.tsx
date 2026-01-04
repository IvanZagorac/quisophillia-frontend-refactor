import React from 'react';

interface AppLoadingProps {
  loadingText?: string;
}

const AppLoading: React.FC<AppLoadingProps> = ({ loadingText }) => 
{
    return (
        <div className="flex flex-1 justify-center items-center flex-col bg-white">
            <div className="border-4 border-gray-200 w-9 h-9 rounded-full border-l-[#5171A5] animate-spin"></div>
            {loadingText && <p className="mt-5 text-base text-gray-700">{loadingText}</p>}
        </div>
    );
};

export default AppLoading;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`;

const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #5171A5;
    animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingText = styled.p`
    margin-top: 20px;
    font-size: 16px;
    color: #333;
`;

interface AppLoadingProps {
  loadingText?: string;
}

const AppLoading: React.FC<AppLoadingProps> = ({ loadingText }) => {
    return (
        <Container>
            <Spinner />
            {loadingText && <LoadingText>{loadingText}</LoadingText>}
        </Container>
    );
};

export default AppLoading;


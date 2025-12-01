import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background-color: #0B1633;
    padding: 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 40px;
    }
`;

export const Title = styled.h1`
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    text-align: center;
`;

export const StepIndicator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const StepText = styled.p<{ active?: boolean }>`
    color: ${props => (props.active ? '#00D4FF' : '#555')};
    font-size: 12px;
    font-weight: ${props => (props.active ? 'bold' : 'normal')};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
    }
`;

export const Input = styled.input`
    border-bottom: 1px solid #00D4FF;
    color: white;
    margin-bottom: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
`;

export const Label = styled.p`
    color: #AAA;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const StyledSelect = styled.select`
    background-color: #19294d;
    color: white;
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #19294d; /* Add border for visibility */
    border-radius: 4px; /* Add border-radius for styling */
    outline: none;
`;

export const DatePickerContainer = styled.div`
    margin-top: 10px;
`;

export const Subtitle = styled.h2`
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    background-color: #00D4FF;
    padding: 12px;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    width: 100%;
`;

export const ButtonText = styled.span`
    color: black;
    font-weight: bold;
`;

/*
    StepContainer
*/
export const StepContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Circle = styled.div<{ completed?: boolean; active?: boolean }>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${props => (props.completed || props.active ? '#00D4FF' : '#19294d')};
    border: 2px solid ${props => (props.active ? '#00D4FF' : '#00D4FF')};
    margin-bottom: 5px;
`;

export const Line = styled.div`
    height: 2px;
    background-color: #00D4FF;
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
`;

export const StepLabel = styled.p<{ active?: boolean }>`
    color: ${props => (props.active ? '#00D4FF' : '#fff')};
    font-size: 12px;
    text-align: center;
    width: 80px;
    font-weight: ${props => (props.active ? 'bold' : 'normal')};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
        width: 60px;
    }
`;

/*
    Progress bar
*/
export const ProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
    gap: 3px;
`;

export const ProgressBarBox = styled.div<{ filled?: boolean }>`
    width: 10px;
    height: 10px;
    margin: 2px;
    border-radius: 1px;
    background-color: ${props => (props.filled ? '#00D4AA' : '#fff')};
    opacity: ${props => (props.filled ? 1 : 0.5)};
`;
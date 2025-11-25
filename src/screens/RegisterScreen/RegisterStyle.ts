import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    background-color: #2e2e2e; /* Assuming a background color from globalStyles or default */
`;

export const Title = styled.p`
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const RegisterButtonWrapper = styled.div`
    margin-top: 40px;
    button {
        background-color: #255A8B;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
    }
`;

export const Input = styled.input`
    border-bottom: 1px solid #207179;
    color: white;
    padding-bottom: 10px;
    margin-bottom: 20px;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
        color: #A4A6AC;
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
`;

export const RegisterPromptContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const RegisterLinkText = styled.span`
    margin-left: 10px;
    color: #06D3F6;
    font-weight: bold;
    cursor: pointer;
`;

export const EyeButton = styled.button`
    position: absolute;
    right: 10px;
    bottom: 10px; /* Adjusted from 20px to better align with input */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex; /* To center the icon if it's smaller than the button */
    align-items: center;
    justify-content: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

export const StyledSelect = styled.select`
    height: 50px;
    width: 100%;
    color: white;
    background-color: #2e2e2e; /* Match background or make it transparent */
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 0 10px;

    option {
        background-color: #2e2e2e;
        color: white;
    }
`;

export const PasswordInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    ${Input} {
        margin-bottom: 0; /* Remove default margin from Input */
    }
`;
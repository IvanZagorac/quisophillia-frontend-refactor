import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-height: 100vh; /* Ensure it takes full viewport height for centering */
    background-color: #2e2e2e; /* Assuming a background color from globalStyles or default */
`;

export const Title = styled.p`
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const LoginButtonWrapper = styled.div`
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
    box-sizing: border-box; /* Include padding and border in the element's total width and height */

    &::placeholder {
        color: #A4A6AC;
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
`;

export const RegisterContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    span {
        color: white; /* Assuming globalStyles.lightText is white */
    }
`;

export const RegisterText = styled.span`
    margin-left: 10px;
    color: #06D3F6;
    cursor: pointer;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px; /* Add some space below the logo */
`;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
    color: #F5F5F5;
    padding: 35px 40px;
    border: 1px solid #2B496C;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #0B2541;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 20px;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;

        & > * {
            margin-bottom: 20px;
        }

        & > *:last-child {
            margin-bottom: 0;
        }
    }
`;
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #06223B;
    margin-bottom: 20px;
    color: #F5F5F5;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        padding: 15px;
    }
`;

export const UserProfile = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    color: #F5F5F5;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        width: 100%;
        padding: 10px 0;
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 40px;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-right: 0;
        margin-top: 15px;
    }
`;

export const UserAvatarContainer = styled.div`
    width: 20%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
`;

export const UserAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
    }
`;

export const UserInfoContainer = styled.div`
    width: 75%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        text-align: center;
    }
`;

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const UserName = styled.p`
    font-size: 14px;
    font-family: 'Roboto-Regular', sans-serif;
    margin-bottom: 10px;
    color: #F5F5F5;
`;

export const UserTeam = styled.p`
    font-size: 14px;
    margin-left: 10px;
    font-family: 'Roboto-Regular', sans-serif;
    margin-bottom: 10px;
    color: #B4BECA;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-left: 0;
    }
`;

export const UserStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const StatText = styled.span`
    margin-left: 5px;
    font-size: 14px;
    font-family: 'Roboto-Medium', sans-serif;
    color: #B4BECA;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 5px 0;
    }
`;
import styled from 'styled-components';

export const SafeArea = styled.div`
    flex: 1;
    background-color: #06223B;
`;

export const HeaderDataContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameAndTeamContainer = styled.div`
    /* Add styles if needed */
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 600; /* semibold */
    font-family: 'Lato-Bold'; /* Assuming Lato is loaded globally */
    color: #EBECED;
`;

export const TextWrapper = styled.div`
    color: #E8EAEE;
    border-radius: 40px;
    align-items: center;
    border: 1px solid #2B496C;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
`;

export const Content = styled.div`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`;

export const ListContent = styled.div`
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const QuizCard = styled.div`
    background-color: #0C2844;
    color: white;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Equivalent to shadow on web */
    /* elevation: 3; - web equivalent is box-shadow */
`;

export const QuizHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const CreateQuizButton = styled.button`
    background-color: #255A8B;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 5px; /* Added border-radius for button */
    border: none;
    cursor: pointer;
    font-size: 16px;
`;

export const ButtonText = styled.span`
    /* This style is now directly on the button */
    color: white;
    font-family: 'Roboto-Medium'; /* Assuming Roboto is loaded globally */
`;

export const Input = styled.input`
    border-bottom: 1px solid #207179;
    color: white;
    background-color: #255A8B;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 25px;
    padding-right: 25px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    &::placeholder {
        color: #A4A6AC;
    }
`;

export const HeaderCardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const QuizTitle = styled.p`
    font-size: 14px;
    font-family: 'Roboto-Bold';
    color: #E8EAEE;
`;

export const QuizMeta = styled.p`
    font-size: 14px;
    font-family: 'Roboto-Regular';
    color: #E8EAEE;
`;

export const QuizSubtitle = styled.h2`
    font-size: 24px;
    font-family: 'Roboto-Medium';
    font-weight: 600; /* semibold */
    color: white;
    margin-bottom: 4px;
`;

export const FilterButton = styled.button`
    padding-right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const QuizCode = styled.p`
    font-size: 14px;
    font-family: 'Roboto-Regular';
    color: #B4BECA;
    margin-bottom: 12px;
`;

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const QuizFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    padding-top: 12px;
`;

export const QuizCreator = styled.p`
    font-size: 14px;
    font-family: 'Roboto-Italic';
    color: #B4BECA;
`;

export const ApplyButton = styled.button<{ applied: boolean }>`
    background-color: ${props => props.applied ? '#207179' : '#255A8B'};
    color: white;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
`;

export const ApplyButtonText = styled.span`
    font-family: 'Roboto-Medium';
    font-size: 14px;
    color: white;
`;

// Drawer styles (will be integrated into a web sidebar component)
export const DrawerContainer = styled.div`
    flex: 1;
    background-color: #06223B;
`;

export const HeaderUserProfile = styled.div`
    align-items: flex-start;
`;

export const NavItems = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const NavItem = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 15px;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%; /* Make button take full width */
    text-align: left; /* Align text to left */
`;

export const NavText = styled.span`
    margin-left: 10px;
    font-size: 16px;
    font-family: 'Roboto-Regular';
    color: white;
`;

export const LogoutButton = styled.button`
    margin-left: 20px;
    max-width: 200px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    border: 1px solid #1F3D5B;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 8px;
    align-items: center;
    background: none;
    cursor: pointer;
`;

export const LogoutText = styled.span`
    margin-left: 10px;
    font-size: 16px;
    font-family: 'Roboto-Medium';
    color: white;
`;

/*
Filter menu component
*/
export const FilterMenuContainer = styled.div`
    background-color: #E8EAEE;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); /* Equivalent to elevation */
    margin: 16px;
`;

export const SortContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FilterMenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CloseButton = styled.button` /* Changed from span to button */
    color: #007AFF;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px; /* To match X button size */
`;

export const FilterTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: black; /* Assuming default text color for filters */
`;

export const Label = styled.label`
    margin-top: 16px;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    color: black; /* Assuming default text color for filters */
`;

export const PrizeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
`;

export const CategoryFavoritWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SortPrizeWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDropdown = styled.select`
    background-color: #f0f0f0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    flex: 1;
    border-radius: 16px;
    border: 1px solid #ccc; /* Added default border */
    color: black; /* Default text color */
    font-size: 12px;
    outline: none;

    option {
        font-size: 12px;
        color: black;
        background-color: #f0f0f0;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

/*
    Filter display style
*/
export const FiltersDisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Allow items to wrap */
    margin-top: 30px;
`;

export const FilterItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 32%; /* This might need adjustment for responsiveness */
    background-color: #207179;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 16px;
    margin-right: 8px;
    margin-bottom: 8px;
    align-items: center; /* Vertically center content */
`;

export const FilterText = styled.span`
    color: white;
    margin-right: 4px;
`;

export const ClearButton = styled.button` /* Changed from Text to button */
    color: #B4BECA;
    font-size: 16px;
    padding-left: 4px;
    padding-right: 4px;
    background: none;
    border: none;
    cursor: pointer;
`;
import React, { useState } from 'react';
import {
    SafeArea, HeaderDataContainer, NameAndTeamContainer, HeaderTitle, TextWrapper, Content, ListContent,
    QuizCard, QuizHeader, CreateQuizButton, ButtonText, Input, HeaderCardContent, QuizTitle, QuizMeta,
    QuizSubtitle, FilterButton, QuizCode, WrapperButtons, QuizFooter, QuizCreator, ApplyButton, ApplyButtonText,
    DrawerContainer, HeaderUserProfile, NavItems, NavItem, NavText, LogoutButton, LogoutText,
    FilterMenuContainer, SortContainer, FilterMenuHeader, CloseButton, FilterTitle, Label, PrizeWrapper,
    CategoryFavoritWrapper, SortPrizeWrapper, StyledDropdown, Row, FiltersDisplayContainer, FilterItem, FilterText, ClearButton
} from './HomeStyle';
import Header  from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CustomIcon from '../../../components/Icon/CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setOpenMenu } from '../../store/openMenu/openMenuSlice';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FilterType } from '../../types/FilterType';
import { getDecodedRefreshToken, removeToken } from '../../api/authUtils';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';


// Mock data (keep for now)
const quizData = [
    {
        id: '1',
        title: 'General Knowledge',
        duration: '2min',
        prize: '10€',
        subtitle: 'Saturday night Quiz',
        code: 'XASDDAad',
        creator: 'Brandon Matrovs',
        isFavorite: true,
        applied: false
    },
    {
        id: '2',
        title: 'General Knowledge',
        duration: '2min',
        prize: '10€',
        subtitle: 'Saturday night Quiz',
        code: 'WWR2112SW',
        creator: 'Brandon Matrovs',
        isFavorite: false,
        applied: true
    },
    {
        id: '3',
        title: 'General Knowledge',
        duration: '34min',
        prize: '20€',
        subtitle: 'New',
        code: 'wfewfe3',
        creator: 'Brandon Matrovs',
        isFavorite: false,
        applied: true
    }
];

const QuizList = () =>
{
    const dispatch = useDispatch<AppDispatch>();
    const openMenu = useSelector((state: RootState) => state.menu.openMenu);
    const navigate = useNavigate();

    const [filterValue, setFilterValue] = useState<FilterType>({
        category: '',
        prize: 0,
        isFavorit: false
    })
    const [quizCode, setQuizCode] = useState<string>('');
    const [openFilter, setOpenFilter] = useState<boolean>(false);

    const doLogout = async () =>
    {
        try
        {
            const user = await getDecodedRefreshToken('refresh')
            await api(
                'auth/logout',
                'POST',
                {userId: user?.userId}
            );
            await removeToken('token');
            await removeToken('refresh');
            navigate('/login')

            alert('Successfully log outed!');
        }
        catch (e)
        {
            console.error(e);
            alert('An error occurred during logout.');
        }
    };

    const renderQuizItem = ({ item }: any) => (
        <QuizCard>
            <QuizHeader>
                <TextWrapper>
                    <QuizTitle>{item.title}</QuizTitle>
                </TextWrapper>
                <TextWrapper>
                    <QuizMeta>{item.duration}</QuizMeta>
                </TextWrapper>
                <TextWrapper>
                    <QuizMeta>{item.prize}</QuizMeta>
                </TextWrapper>
                {item.isFavorite ?
                    <CustomIcon icon={faStarSolid} color='gold'/> :
                    <CustomIcon icon={faStarRegular} color='gold'/>}

            </QuizHeader>

            <QuizSubtitle>{item.subtitle}</QuizSubtitle>
            <QuizCode>{item.code}</QuizCode>

            <QuizFooter>
                <QuizCreator>Created by {item.creator}</QuizCreator>
                <ApplyButton
                    applied={item.applied}
                    onClick={() => console.log(`Apply to ${item.id}`)}
                    disabled={item.applied}
                >
                    <ApplyButtonText>
                        {item.applied ? 'Applied' : 'Apply Now'}
                    </ApplyButtonText>
                </ApplyButton>
            </QuizFooter>
        </QuizCard>
    );

    const renderDrawerContent = () => (

        <DrawerContainer>
            <Header/>

            <NavItems>
                <NavItem>
                    <CustomIcon icon={faHome} size={20} color='#B4BECA'/>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faUser} size={20} color='#B4BECA'/>
                    <NavText>Profil</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faWallet} size={20} color='#B4BECA'/>
                    <NavText>Novčanik</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faExclamation} size={20} color='#B4BECA'/>
                    <NavText>Prijavi grešku</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faMessage} size={20} color='#B4BECA'/>
                    <NavText>Poruke</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faBell} size={20} color='#B4BECA'/>
                    <NavText>Obavijesti</NavText>
                </NavItem>
                <NavItem>
                    <CustomIcon icon={faChartLine} size={20} color='#B4BECA'/>
                    <NavText>Aktivni kvizovi</NavText>
                </NavItem>
            </NavItems>

            <LogoutButton  onClick={doLogout}>
                <CustomIcon icon={faArrowRightFromBracket} size={20} color='red'/>
                <LogoutText>Odllogiraj me</LogoutText>
            </LogoutButton>
        </DrawerContainer>

    );

    return (
        <SafeArea>
            {/* The Drawer component needs to be replaced with a web-compatible solution, perhaps a custom sidebar component */}
            {/* For now, we're directly rendering the main content */}
            {openMenu && renderDrawerContent() /* Temporarily render drawer content directly if open */}
            <Header/>

            <Content>
                <HeaderCardContent>
                    <HeaderTitle>Aktivni kvizovi</HeaderTitle>
                    <div>
                        <Input
                            placeholder="Quiz code"
                            onChange={(e) => setQuizCode(e.target.value)}
                        />
                    </div>
                    <FilterButton
                        onClick={()=> dispatch(setOpenMenu(!openMenu))}
                    >
                        <CustomIcon icon={faSliders} color='#E8EAEE'/>
                    </FilterButton>
                </HeaderCardContent>
                <FiltersDisplayContainer>
                    {filterValue.category !== '' && (
                        <FilterItem>
                            <FilterText>{filterValue.category}</FilterText>
                            <ClearButton onClick={() =>setFilterValue(prev => ({
                                ...prev,
                                category: ''
                            }))}>
                                X
                            </ClearButton>
                        </FilterItem>
                    )}
                    {filterValue.prize !== 0 && (
                        <FilterItem>
                            <FilterText>Prize: {filterValue.prize}</FilterText>
                            <ClearButton onClick={() => setFilterValue(prev => ({
                                ...prev,
                                prize: 0
                            }))}>
                                X
                            </ClearButton>
                        </FilterItem>
                    )}
                    {filterValue.isFavorit && (
                        <FilterItem>
                            <FilterText>Favorit: Yes</FilterText>
                            <ClearButton onClick={() => setFilterValue(prev => ({
                                ...prev,
                                isFavorit: false
                            }))}>
                                X
                            </ClearButton>
                        </FilterItem>
                    )}
                </FiltersDisplayContainer>


                {
                    openFilter && (
                        <FilterMenuContainer>
                            <FilterMenuHeader>
                                <FilterTitle>Filteri</FilterTitle>
                                <CloseButton onClick={() => setOpenFilter(!openFilter)}>
                                    X
                                </CloseButton>
                            </FilterMenuHeader>

                            <SortPrizeWrapper>
                                <SortContainer>
                                    <StyledDropdown
                                        onChange={e => console.log(e.target.value)}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Sortiraj</option>
                                        <option value="cijena">Cijeni</option>
                                        <option value="naziv">Nazivu</option>
                                    </StyledDropdown>
                                </SortContainer>
                                <SortContainer>
                                    <StyledDropdown
                                        onChange={e => {
                                            console.log(e.target.value);
                                            setFilterValue({...filterValue, category: e.target.value})
                                        }}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Kategorija</option>
                                        <option value="opce_znanje">Opće znanje</option>
                                        <option value="matematika">Matematika</option>
                                    </StyledDropdown>
                                </SortContainer>
                            </SortPrizeWrapper>
                            <PrizeWrapper>
                                <Label>Cijena: 0 - 10000</Label>
                                <input type="range" min="0" max="10000"
                                    onChange={e => {
                                        console.log(e.target.value);
                                        setFilterValue({...filterValue, prize: parseFloat(e.target.value)})
                                    }} />
                            </PrizeWrapper>
                            <CategoryFavoritWrapper>
                                <Row>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={filterValue.isFavorit}
                                            onChange={() => setFilterValue({...filterValue, isFavorit: !filterValue.isFavorit})}
                                        />
                                        Favorit
                                    </label>
                                </Row>
                            </CategoryFavoritWrapper>

                        </FilterMenuContainer>
                    )
                }
                <CreateQuizButton
                    onClick={() =>  navigate('/create-quiz')}
                >
                    <ButtonText>
                            Kreiraj svoj kviz
                    </ButtonText>
                </CreateQuizButton>

                <ListContent>
                    {quizData.map(item => renderQuizItem({ item }))}
                </ListContent>
            </Content>
            <Footer/>
        </SafeArea>
    );
};


export default QuizList;
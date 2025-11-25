import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../src/store/store';
import { setOpenMenu } from '../../src/store/openMenu/openMenuSlice';
import CustomIcon from '../Icon/CustomIcon';
import { faRankingStar, faMoneyBill, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import {
    HeaderContainer,
    UserProfile,
    UserAvatarContainer,
    UserAvatar,
    UserInfoContainer,
    UserProfileContainer,
    UserName,
    UserTeam,
    UserStats,
    FlexWrapper,
    StatText,
    HeaderRight
} from './HeaderStyle';

// Assuming images will be in the public directory
const userAvatarImg = '/assets/images/file.png';
const gameIconImg = '/assets/icons/game1.png';

const Header = () =>
{
    const dispatch = useDispatch<AppDispatch>();
    const openMenu = useSelector((state:RootState) => state.menu.openMenu )

    return (
        <HeaderContainer>
            <UserProfile>
                <UserAvatarContainer>
                    <UserAvatar src={userAvatarImg} alt="User Avatar" />
                </UserAvatarContainer>
                <UserInfoContainer>
                    <UserProfileContainer>
                        <UserName>Ivan Zagorac</UserName>
                        <UserTeam>(BalkanTeam)</UserTeam>
                    </UserProfileContainer>

                    <UserStats>
                        <FlexWrapper>
                            <CustomIcon icon={faRankingStar} size={16} color='#B4BECA'/>
                            <StatText>104.</StatText>
                        </FlexWrapper>
                        <FlexWrapper>
                            <img src={gameIconImg} alt="Game Icon" style={{ width: 16, height: 16 }} />
                            <StatText>1345</StatText>
                        </FlexWrapper>
                        <FlexWrapper>
                            <CustomIcon icon={faMoneyBill} size={16} color='#B4BECA'/>
                            <StatText>432.325$</StatText>
                        </FlexWrapper>
                    </UserStats>
                </UserInfoContainer>
            </UserProfile>
            <HeaderRight>
                <button onClick={() => dispatch(setOpenMenu(!openMenu))}>
                    {openMenu ?  <CustomIcon icon={faXmark} size={24} color='#B4BECA'/> :
                        <CustomIcon icon={faBars} size={24} color='#B4BECA'/>}
                </button>
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
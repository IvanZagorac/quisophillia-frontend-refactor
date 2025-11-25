import { FooterContainer, IconContainer } from './FooterStyle';
import CustomIcon from '../Icon/CustomIcon';
import { faPeopleGroup, faWallet, faPenToSquare, faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer = () =>
{
    return (
        <FooterContainer>
            <IconContainer>
                <CustomIcon icon={faBrain} color='#B4BECA'/>
                <CustomIcon icon={faPenToSquare} color='#B4BECA'/>
                <CustomIcon icon={faPeopleGroup} color='#B4BECA'/>
                <CustomIcon icon={faWallet} color='#B4BECA'/>
            </IconContainer>
        </FooterContainer>
    );
};

export default Footer;
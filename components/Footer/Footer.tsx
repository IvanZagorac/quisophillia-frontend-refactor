import { View} from 'react-native';
import { footerStyles } from './FooterStyle';
import CustomIcon from '../Icon/CustomIcon';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer= () => 
{
    return (
        
        <View style={footerStyles.footer}>
            <View style={footerStyles.iconContainer}>
                <CustomIcon icon={faBrain} color='#B4BECA'/>
                <CustomIcon icon={faPenToSquare} color='#B4BECA'/>
                <CustomIcon icon={faPeopleGroup} color='#B4BECA'/>
                <CustomIcon icon={faWallet} color='#B4BECA'/>
            </View>
        </View>
    );
};

export default Footer;
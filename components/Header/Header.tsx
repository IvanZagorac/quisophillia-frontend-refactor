import { View, Image, Text, TouchableOpacity} from 'react-native';
import { headerStyles } from './HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../src/store/store';
import { setOpenMenu } from '../../src/store/openMenu/openMenuSlice';
import CustomIcon from '../Icon/CustomIcon';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header= () => 
{
    const dispatch = useDispatch<AppDispatch>();
    const openMenu = useSelector((state:RootState) => state.menu.openMenu )
    
    return (
        
        <View style={headerStyles.header}>
            <View style={headerStyles.userProfile}>
                <View style={headerStyles.userAvatarContainer}>
                    <Image 
                        source={require('../../assets/images/file.png')}
                        style={headerStyles.userAvatar}
                    />
                </View>
                <View style={headerStyles.userInfoContainer}>
                    <View style={headerStyles.userProfileContainer}>
                        <Text style={headerStyles.userName}>Ivan Zagorac</Text>
                        <Text style={headerStyles.userTeam}>(BalkanTeam)</Text>
                    </View>
               
                    <View style={headerStyles.userStats}>
                        <View style={headerStyles.flexWrapper}> 
                            <CustomIcon icon={faRankingStar} size={16} color='#B4BECA'/>
                            <Text style={headerStyles.statText}>104.</Text>
                        </View>
                        <View style={headerStyles.flexWrapper}>
                            <Image source={require('../../assets/icons/game1.png')}/>
                            <Text style={headerStyles.statText}>1345</Text>
                        </View>
                        <View style={headerStyles.flexWrapper}>
                            <CustomIcon icon={faMoneyBill} size={16} color='#B4BECA'/>
                            <Text style={headerStyles.statText}>432.325$</Text>
                        </View> 
                        
                       
                    </View>
                </View>
            </View>
            <View style={headerStyles.headerRight}>
                <TouchableOpacity onPress={() => dispatch(setOpenMenu(!openMenu))}>
                    {openMenu ?  <CustomIcon icon={faXmark} size={24} color='#B4BECA'/> :  
                        <CustomIcon icon={faBars} size={24} color='#B4BECA'/>}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header; 
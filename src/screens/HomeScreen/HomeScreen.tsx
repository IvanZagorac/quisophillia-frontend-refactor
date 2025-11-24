import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Drawer } from 'react-native-drawer-layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setOpenMenu } from '../../store/openMenu/openMenuSlice';
import { homeStyles } from './HomeStyle';
import Header  from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CustomIcon from '../../../components/Icon/CustomIcon';
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
import { Dropdown } from 'react-native-element-dropdown';
import { Checkbox } from 'react-native-paper';
import { FilterType } from '../../types/FilterType';
import { getDecodedRefreshToken, removeToken } from '../../api/authUtils';
import api from '../../api/api';
import { navigate } from '../../../components/Navigation';



// Mock data
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
            navigate('Login')
          
            Alert.alert('Successfully log outed!');
        }
        catch (e) 
        {
            console.log(e);
        }
    };

    const renderQuizItem = ({ item }: any) => (
        <View style={homeStyles.quizCard}>
            <View style={homeStyles.quizHeader}>
                <View style={homeStyles.textWrapper}>
                    <Text style={homeStyles.quizTitle}>{item.title}</Text>
                </View>
                <View style={homeStyles.textWrapper}>
                    <Text style={homeStyles.quizMeta}>{item.duration}</Text>
                </View>
                <View style={homeStyles.textWrapper}>
                    <Text style={homeStyles.quizMeta}>{item.prize}</Text>
                </View>
                {item.isFavorite ? 
                    <CustomIcon icon={faStarSolid} color='gold'/> :
                    <CustomIcon icon={faStarRegular} color='gold'/>}
              
            </View>
      
            <Text style={homeStyles.quizSubtitle}>{item.subtitle}</Text>
            <Text style={homeStyles.quizCode}>{item.code}</Text>
      
            <View style={homeStyles.quizFooter}>
                <Text style={homeStyles.quizCreator}>Created by {item.creator}</Text>
                <TouchableOpacity 
                    style={[homeStyles.applyButton, item.applied ? homeStyles.appliedButton : null]}
                    onPress={() => console.log(`Apply to ${item.id}`)}
                    disabled={item.applied}
                >
                    <Text style={homeStyles.applyButtonText}>
                        {item.applied ? 'Applied' : 'Apply Now'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderDrawerContent = () => (
        
        <View style={homeStyles.drawerContainer}>
            {/* User Profile Section */}
            
            <SafeAreaView>
                <Header/>
            </SafeAreaView>
           

            {/* Navigation Items */}
            <View style={homeStyles.navItems}>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faHome} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faUser} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faWallet} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Novčanik</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faExclamation} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Prijavi grešku</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faMessage} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Poruke</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faBell} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Obavijesti</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyles.navItem}>
                    <CustomIcon icon={faChartLine} size={20} color='#B4BECA'/>
                    <Text style={homeStyles.navText}>Aktivni kvizovi</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity  onPress={doLogout} style={homeStyles.logoutButton}>
                <CustomIcon icon={faArrowRightFromBracket} size={20} color='red'/>
                <Text style={homeStyles.logoutText}>Odllogiraj me</Text>
            </TouchableOpacity>
        </View>
        
    );

    return (
        <Drawer
            open={openMenu}
            onOpen={() => dispatch(setOpenMenu(true))}
            onClose={() => dispatch(setOpenMenu(false))}
            renderDrawerContent={renderDrawerContent}
            drawerPosition="left"
            drawerStyle={homeStyles.drawerStyle}
        >
            
            <SafeAreaView style={homeStyles.safeArea}>
                <Header/>

                {/* Content */}
                <View style={homeStyles.content}>
                    <View style={homeStyles.headerCardContent}>
                        <Text style={homeStyles.headerTitle}>Aktivni kvizovi</Text>
                        <View>
                            <TextInput
                                style={homeStyles.input}
                                placeholderTextColor="#A4A6AC"
                                placeholder="Quiz code"
                                onChangeText={(item) => setQuizCode(item)}
                            />
                        </View>
                        <TouchableOpacity 
                            style={homeStyles.filterOpacity
                            }
                            onPress={()=> setOpenFilter(!openFilter)}
                        >
                            <CustomIcon icon={faSliders} color='#E8EAEE'/> :
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.filtersContainer}>
                        {filterValue.category !== '' && (
                            <View style={homeStyles.filterItem}>
                                <Text style={homeStyles.filterText}>{filterValue.category}</Text>
                                <TouchableOpacity onPress={() =>setFilterValue(prev => ({
                                    ...prev,
                                    category: ''
                                }))}>
                                    <Text style={homeStyles.clearButton}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {filterValue.prize !== 0 && (
                            <View style={homeStyles.filterItem}>
                                <Text style={homeStyles.filterText}>Prize: {filterValue.prize}</Text>
                                <TouchableOpacity onPress={() => setFilterValue(prev => ({
                                    ...prev,
                                    prize: 0
                                }))}>
                                    <Text style={homeStyles.clearButton}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {filterValue.isFavorit && (
                            <View style={homeStyles.filterItem}>
                                <Text style={homeStyles.filterText}>Favorit: Yes</Text>
                                <TouchableOpacity onPress={() => setFilterValue(prev => ({
                                    ...prev,
                                    isFavorit: false
                                }))}>
                                    <Text style={homeStyles.clearButton}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    

                    {
                        openFilter && (
                            <View style={homeStyles.container}>
                                {/* Naslov + Zatvori gumb */}
                                <View style={homeStyles.header}>
                                    <Text style={homeStyles.title}>Filteri</Text>
                                    <TouchableOpacity onPress={() => setOpenFilter(!openFilter)}>
                                        <Text style={homeStyles.close}>X</Text>
                                    </TouchableOpacity>
                                </View>
                      
                                {/* Sortiranje */}
                                
                                <View style={homeStyles.sortPrizeWrapper}>
                                    <View style={homeStyles.sortContainer}>
                                        <Dropdown 
                                            style={homeStyles.picker}
                                            placeholder='Sortiraj'
                                            placeholderStyle={homeStyles.placeholderStyle}
                                            selectedTextStyle={homeStyles.selectedTextStyle}
                                            itemTextStyle={homeStyles.itemTextStyle}
                                            labelField="label"
                                            valueField="value"
                                            onChange={item => 
                                            {
                                                console.log(item);
                                            }}
                                            data={[
                                                { label: 'Cijeni', value: 'cijena' },
                                                { label: 'Nazivu', value: 'naziv' },
                                            ]}>  
                                        </Dropdown>
                                    </View>
                                    <View style={homeStyles.sortContainer}>
                                        <Dropdown 
                                            style={homeStyles.picker}
                                            placeholder='Kategorija'
                                            placeholderStyle={homeStyles.placeholderStyle}
                                            selectedTextStyle={homeStyles.selectedTextStyle}
                                            itemTextStyle={homeStyles.itemTextStyle}
                                            labelField="label"
                                            valueField="value"
                                            onChange={item => 
                                            {
                                                console.log(item.value);
                                                setFilterValue({...filterValue, category: item.value})
                                            }}
                                            data={[
                                                { label: 'Opće znanje', value: 'opce_znanje' },
                                                { label: 'Matematika', value: 'matematika' },
                                            ]}>  
                                        </Dropdown>
                                    </View>
                                </View>
                                <View style={homeStyles.prizeWrapper}>
                                    <Text style={homeStyles.label}>Cijena: 0 - 10000</Text>
                                    <Slider minimumValue={0} maximumValue={10000} style={{ width: '60%' }} 
                                        onValueChange={item => 
                                        {
                                            console.log(item);
                                            setFilterValue({...filterValue, prize: item})
                                        }} />
                                </View>
                                <View style={homeStyles.categoryFavoritWrapper}>
                                    {/* Favorit toggle */}
                                    <View style={homeStyles.row}>
                                        <Checkbox.Item
                                            label={'Favorit'}
                                            status={filterValue.isFavorit ? 'checked' : 'unchecked'}
                                            onPress={() => setFilterValue({...filterValue, isFavorit: !filterValue.isFavorit})}
                                        />
                                    </View>
                                </View>
                               
                            </View>
                        )
                    }
                    <TouchableOpacity 
                        style={homeStyles.createQuizButton}
                        onPress={() =>  navigate('CreateQuiz')}
                    >
                        <Text style={homeStyles.buttonText}>
                                Kreiraj svoj kviz
                        </Text>
                    </TouchableOpacity>
                   
                    <FlatList
                        data={quizData}
                        renderItem={renderQuizItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={homeStyles.listContent}
                    />
                </View>
                <Footer/>
            </SafeAreaView>
            
        </Drawer>
        
    );
};


export default QuizList;
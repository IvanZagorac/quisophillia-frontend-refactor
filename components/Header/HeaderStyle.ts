import { StyleSheet } from 'react-native';
export const headerStyles = StyleSheet.create({
    userProfile: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        color: '#F5F5F5',
    },
    hamburgerIcon: {
        width: 24,
        height: 24,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#F5F5F5',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#06223B',
        marginBottom: 20,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 40
    },
    userAvatarContainer: {
        flexDirection: 'row',
        width: '20%',
    },
    userAvatar: {
        width: 32,
        height: 32,
        borderRadius: 40,
    },
    flexWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 5
    },
    userInfoContainer: {
        width: '75%'
    },
    userProfileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        marginBottom: 10,
        color: '#F5F5F5',
    },
    userTeam: {
        fontSize: 14,
        marginLeft: 10,
        fontFamily: 'Roboto-Regular',
        marginBottom: 10,
        color: '#B4BECA',
    },
    userStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    statText: {
        marginLeft: 5,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#B4BECA',
    },
})
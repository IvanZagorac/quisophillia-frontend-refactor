import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
export const homeStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#06223B',
    },
    headerDataContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    nameAndTeamContainer: {
    },
    
    headerTitle: {
        fontSize: 24,
        fontWeight: 'semibold',
        fontFamily: 'Lato',
        color: '#EBECED',
    },
    textWrapper: {
        color: '#E8EAEE',
        borderRadius: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2B496C',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    listContent: {
        paddingBottom: 20,
        paddingTop: 10,
    },
    quizCard: {
        backgroundColor: '#0C2844',
        color: 'white',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quizHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    createQuizButton: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    buttonText: {
        backgroundColor: '#255A8B',
        width: '40%',
        paddingVertical: 5,
        paddingHorizontal: 15,
        color: 'white'
    },
    input: {
        borderBottomWidth: 1,
        color: 'white',
        backgroundColor: '#255A8B',
        paddingVertical: 5,
        paddingHorizontal: 25,
    },
    headerCardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quizTitle: {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: '#E8EAEE',
    },
    quizMeta: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#E8EAEE',
    },
    quizSubtitle: {
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
        fontWeight: 'semibold',
        color: 'white',
        marginBottom: 4,
    },
    filterOpacity: {
        paddingRight: 10
    },
    quizCode: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#B4BECA',
        marginBottom: 12,
    },
    wrapperButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    quizFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 12,
    },
    quizCreator: {
        fontSize: 14,
        fontFamily: 'Roboto-Italic',
        color: '#B4BECA',
    },
    applyButton: {
        backgroundColor: '#255A8B',
        color: 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 15,
    },
    appliedButton: {
        backgroundColor: '#207179',
        color: 'white',
    },
    applyButtonText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: 'white'
    },
    // Drawer styles
    drawerStyle: {
        width: width * 1,
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: '#06223B',
    },
    headerUserProfile: {
        alignItems: 'flex-start',
    },
   
   
    navItems: {
        paddingVertical: 10,
    },
    navItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    navText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: 'white',
    },
    logoutButton: {
        marginLeft: 20,
        maxWidth: 200,
        marginTop: 50,
        flexDirection: 'row',
        borderColor: '#1F3D5B',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        color: 'white',
    },

    /* 
    Filter menu component
    */
    container: {
        backgroundColor: '#E8EAEE',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        margin: 16,
    },
    sortContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    close: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: {
        marginTop: 16,
        marginBottom: 8,
        fontWeight: '600',
        fontSize: 12
    },
    prizeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10
    },
    categoryFavoritWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    sortPrizeWrapper: {
        display: 'flex',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', // or 'flex-start'
        alignItems: 'center',
    },
    picker: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingLeft: 10,
        flex: 1,
        borderRadius: 16,
    },
    placeholderStyle: {
        fontSize: 12,
    },
    selectedTextStyle: {
        fontSize: 12, // selected item text font size
    },
      
    itemTextStyle: {
        fontSize: 12, // dropdown list item font size
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /*
        Filter display style
    */
    filtersContainer: {
        flexDirection: 'row',
        
        marginTop: 30
    },
    filterItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '32%',
        backgroundColor: '#207179',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    filterText: {
        color: 'white',
        marginRight: 4,
    },
    clearButton: {
        color: '#B4BECA',
        fontSize: 16,
        paddingHorizontal: 4,
    },
});
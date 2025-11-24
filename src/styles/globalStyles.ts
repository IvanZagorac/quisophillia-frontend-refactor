import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    backgroundColor:{
        backgroundColor: '#06223B',
    },
    container:{
        backgroundColor: '#06223B',
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: 'white'
    },
    headers: {
        fontFamily: 'PlayfairDisplay-Regular',
        color: 'white',
        fontSize: 24,
        marginBottom: 20
    },
    lightText: {
        color: '#B4BECA',
        fontSize: 16
    },
    mainBtn: {
        backgroundColor: '#255A8B',
        maxWidth: 120,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 15,
    }
});
import { StyleSheet } from 'react-native';
export const createQuizStyle = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0B1633', padding: 20 },
    title: { fontSize: 22, color: 'white', marginBottom: 20, textAlign: 'center' },
    stepIndicator: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
    step: { color: '#555', fontSize: 12 },
    activeStep: { color: '#00D4FF', fontWeight: 'bold' },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#00D4FF',
        color: 'white',
        marginBottom: 15,
        paddingVertical: 8,
    },
    label: { color: '#AAA', marginTop: 10, marginBottom: 5 },
    picker: { backgroundColor: '#19294d', color: 'white', marginBottom: 15 },
    datePickerContainer: { marginTop: 10 },
    subtitle: { fontSize: 18, color: 'white', marginBottom: 10 },
    button: {
        backgroundColor: '#00D4FF',
        padding: 12,
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: { color: 'black', fontWeight: 'bold' },
    /* 
        StepContainer
    */
    containerStep: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 },
    stepContainer: { alignItems: 'center' },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#19294d',
        borderWidth: 2,
        borderColor: '#00D4FF',
        marginBottom: 5,
    },
    completedCircle: {
        backgroundColor: '#00D4FF',
    },
    activeCircle: {
        backgroundColor: '#00D4FF',
        borderColor: '#00D4FF',
    },
    line: {
        height: 2,
        backgroundColor: '#00D4FF',
        flex: 1,
        marginHorizontal: 5,
    },
    labelStep: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        width: 80,
    },
    activeLabel: {
        fontWeight: 'bold',
        color: '#00D4FF',
    },

    /* 
        Progress bar    
    */

    containerProgress: {
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        gap: 3,
    },
    box: {
        width: 10,
        height: 10,
        margin: 2,
        borderRadius: 1,
    },
    filledBox: {
        backgroundColor: '#00D4AA',
    },
    emptyBox: {
        backgroundColor: '#fff',
        opacity: 0.5,
    },
});
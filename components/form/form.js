// A component of a white form with a shadow box and input for card number,
// card name, CVV and drop down for month and year

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import useeffect
import { useEffect } from 'react';

// import components
import CreditCard from '../creditcard/creditcard';

export default function Form() {

    // use the hook to update the cardinput in the form
    const [cardInput, setCardInput] = React.useState('');
    const [cardName, setCardName] = React.useState('');
    const [cardMonth, setCardMonth] = React.useState('');
    const [cardYear, setCardYear] = React.useState('');
    const [cardCVV, setCardCVV] = React.useState('');

    // see which form input being selected by the user
    const [selectedInput, setSelectedInput] = React.useState('');
   


    return (
        <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.formTitle}>Card Number</Text>
            <TextInput
            style={styles.formInput}
            keyboardType="numeric"
            onFocus={() => setSelectedInput('cardNumber')}
            onChangeText={(text) => setCardInput(text)}
            />
            <Text style={styles.formTitle}>Card Name</Text>
            <TextInput
            style={styles.formInput}
            onFocus={() => setSelectedInput('cardName')}
            onChangeText={(text) => setCardName(text)}
            />
            <Text style={styles.formTitle}
            >CVV</Text>
            <TextInput 
            style={styles.formInput}
            keyboardType="numeric"
            onFocus={() => setSelectedInput('cardCVV')}
            onChangeText={(text) => setCardCVV(text)}
             />
            <Text style={styles.formTitle}>Expiration Date</Text>
            <View style={styles.formPicker}>
            <Picker style={styles.formPickerItem}
            onFocus={() => setSelectedInput('cardMonth')}
            selectedValue={cardMonth}
            onValueChange={(itemValue, itemIndex) => setCardMonth(itemValue)}
            >
                <Picker.Item label="January" value="january" />
                <Picker.Item label="February" value="february" />
                <Picker.Item label="March" value="march" />
                <Picker.Item label="April" value="april" />
                <Picker.Item label="May" value="may" />
                <Picker.Item label="June" value="june" />
                <Picker.Item label="July" value="july" />
                <Picker.Item label="August" value="august" />
                <Picker.Item label="September" value="september" />
                <Picker.Item label="October" value="october" />
                <Picker.Item label="November" value="november" />
                <Picker.Item label="December" value="december" />
            </Picker>
            <Picker 
            style={styles.formPickerItem}
            onFocus={() => setSelectedInput('cardYear')}
            selectedValue={cardYear}
            onValueChange={(itemValue, itemIndex) => setCardYear(itemValue)}
            >
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2022" value="2022" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2024" value="2024" />
                <Picker.Item label="2025" value="2025" />
                <Picker.Item label="2026" value="2026" />
                <Picker.Item label="2027" value="2027" />
                <Picker.Item label="2028" value="2028" />
                <Picker.Item label="2029" value="2029" />
                <Picker.Item label="2030" value="2030" />
            </Picker>
            </View>
        </View>
        <CreditCard cardNumber={cardInput} cardName={cardName} cardMonth={cardMonth} cardYear={cardYear} cardCVV={cardCVV} selectedInput={selectedInput} />
        </View>
        
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // put the form in the bottom of the screen
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    form: {
        backgroundColor: '#fff',
        width: 300,
        height: 400,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        padding: 20,
    },
    formTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    formInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
    formPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    formPickerItem: {
        width: 100,
    },
    });
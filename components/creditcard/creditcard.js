// A compnent of an empty black square with box shadow and border radius

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


// the function takes in a prop called 'cardNumber'
export default function CreditCard({ cardNumber, cardName, cardMonth, cardYear, cardCVV, selectedInput }) {

    // a function that takes in the cardYear and shortens it to the last two digits
    const shortYear = (cardYear) => {
        return cardYear.slice(2);
    }

    // Shorten the month to the first three letters
    const shortMonth = (cardMonth) => {
        return cardMonth.slice(0, 3);
    }

    // a function that takes in the cardNumber and shortens it to the last four digits
    const shortNumber = (cardNumber) => {
        return cardNumber.slice(12);
    }

    // make sure the cardnumber is 12 digits long, otherwise fill it with #'s
    const fillNumber = (cardNumber) => {
        if (cardNumber.length < 16) {
            return cardNumber.padEnd(16, '#');
        } else {
            return cardNumber;
        }
    }

    // make a space between every four digits
    const spaceNumber = (cardNumber) => {
        return cardNumber.replace(/(.{4})/g, '$1 ');
    }

    // return different images based on the first digit of the card number
    const cardType = (cardNumber) => {
        if (cardNumber[0] === '4') {
            // get the image from the assetdirectory
            return require('../../assets/visa.png');
        }
        else if(cardNumber[0] === '3' && cardNumber[1] === '0' ) {
            return require('../../assets/dinersclub.png');
        }
        else if (cardNumber[0] === '5') {
            return require('../../assets/mastercard.png');
        } else if (cardNumber[0] === '3') {
            return require('../../assets/amex.png');
        }
        else if (cardNumber[0] === '6') {
            return require('../../assets/discover.png');
        }
        
        else {
            return require('../../assets/Gringotts.png');
        }
    }

    // return the mean value of the card number
    const cardMean = (cardNumber) => {
        let sum = 0;
        for (let i = 0; i < cardNumber.length; i++) {
            sum += parseInt(cardNumber[i] );
        }
        // return and int that has to be between 1 and 9
        return Math.floor(sum) % 10;
    }
    

    // return different if selectedInput is cardCVV
    if (selectedInput !== 'cardCVV') {
        
    return (
        <View style={styles.container}>

        <Image source={cardType(cardNumber)} style={styles.cardType} />
        <Text style={[styles.cardNumberTitle,
        /*if selected item is cardNumber, make the font glow*/
        selectedInput === 'cardNumber' ? styles.selected : null
        ] }>Card Number</Text>
        <Text style={[styles.cardNumber,
        /*if selected item is cardNumber, make the font glow*/
        selectedInput === 'cardNumber' ? styles.selected : null
        ]}>{spaceNumber(fillNumber(cardNumber))}</Text>
        <Text style={[styles.cardNameTitle,
        /*if selected item is cardName, make the font glow*/
        selectedInput === 'cardName' ? styles.selected : null
        ]}>Card Holder</Text>
        <Text style={[styles.cardName,
        /*if selected item is cardName, make the font glow*/
        selectedInput === 'cardName' ? styles.selected : null
        ]}>{cardName}</Text>
        <Text style={[styles.cardDate,
        /*if selected item is cardMonth or the cardYear, make the font glow*/
        selectedInput === 'cardMonth' || selectedInput === 'cardYear' ? styles.selected : null
        ]}>{shortMonth(cardMonth)} / {shortYear(cardYear)}</Text>
        </View>
    );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.cardCVVtitle}>CVV</Text>
                <Text style={styles.cardCVV}>{cardCVV}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -40,
        alignItems: 'flex-start',
        width: 200,
        height: 120,
        backgroundColor: '#000',
        // add box shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        // add border radius
        borderRadius: 10,
        transition: 'all 0.5s ease-in-out',
    },
    // place the cardtype image in the top right corner
    cardType: {
        position: 'absolute',
        top: 10,
        right: 10,
        // limit with max width and height
        maxWidth: 50,
        maxHeight: 50,
        // don't crop the image
        resizeMode: 'contain',
        //add some white glow
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        transition: 'all 0.5s ease-in-out',


    },
    cardNumberTitle: {
        color: '#fff',
        fontSize: 6,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    cardNameTitle: {
        color: '#fff',
        fontSize: 6,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    cardNumber: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 10,
        transition: 'all 0.5s ease-in-out',
    },
    cardName: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 10,
    
    },
    // carddate in down right corner
    cardDate: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    // Place the cvv in the bottom right corner
    cardCVVtitle: {
        color: '#fff',
        fontSize: 6,
        fontWeight: 'bold',
        padding: 10,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    cardCVV: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    // make the font glow
    selected: {
        // golden textshadowcolor
        textShadowColor: '#FFD700',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
    }
});
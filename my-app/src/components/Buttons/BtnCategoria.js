// CategoryButton.js
import React from 'react';
import { TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors';


export default function BtnCatergoria({ icon, onPress }) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
            underlayColor = {Colors.VerdeClaro}
        >
            <Image source={icon} style={styles.icon} />
        </TouchableHighlight>
    );
}



const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 5,
        marginBottom: 30,
        backgroundColor: Colors.VerdeEscuro,
        elevation: 1
    },
    selected: {
        backgroundColor: Colors.VerdeEscuro,
    },
    icon: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
});


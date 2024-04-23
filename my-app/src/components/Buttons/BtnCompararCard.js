import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';

export default function BtnCompararCard() {
    return (
        <View style={style.container}>
            <PigBank />
            <Text style={style.text}>Comparar</Text>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.VerdeClaro,
        padding: 8,
        gap: 8,
        borderRadius: 18
    },
    text: {
        color: Colors.VerdeEscuro,
        fontSize: 12,
        fontWeight: '600'

    },

});
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';

export default function BtnComparar() {
    return (

        <View style={[style.container]}>
            <TouchableOpacity>
                <PigBank />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        alignItems: 'center',
    },

});
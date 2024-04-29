import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';

export default function BtnComparar() {
    return (

        <View style={[styles.container, styles]}>
            <TouchableOpacity>
                <PigBank />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        alignItems: 'center',
    },

});
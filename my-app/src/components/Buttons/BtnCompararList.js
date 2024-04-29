import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';

export default function BtnCompararList() {
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
        padding: 8,
        borderRadius: 15,
        backgroundColor: Colors.VerdeClaro,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
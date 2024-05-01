import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';

export default function BtnComparaVizList() {
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
        padding: 8,
        borderRadius: 15,
        backgroundColor: Colors.VerdeClaro,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { FontAwesome6 } from '@expo/vector-icons'

export default function BtnAddCirc() {

    return (
        <TouchableOpacity>
            <View style={style.container}>
                <FontAwesome6 name='plus' size={12} color={Colors.VerdeEscuro} />
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 15,
        // backgroundColor: Colors.VerdeClaro,
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

export default function BtnCancelar() {
    return (
        <View style={style.container}>
            <Ionicons name= 'close-outline' size={20} color={Colors.VerdeEscuro}/>
            <Text style={style.text}>Cancelar</Text>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.VerdeEscuro,
        paddingVertical: 5,
        paddingHorizontal: 10,
        gap: 2,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.VerdeEscuro,
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    },

});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

export default function BtnSalvar() {
    return (
        <View style={style.container}>
            <Ionicons name='checkmark-outline' size={20} color={Colors.VerdeEscuro}/> 
            <Text style={style.text}>Salvar</Text>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.VerdeClaro,
        paddingVertical: 5,
        paddingHorizontal: 20,
        gap: 2,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    text: {
        color: Colors.VerdeEscuro,
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    },

});
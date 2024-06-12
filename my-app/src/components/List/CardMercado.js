import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import Mortari from '../../../assets/images/home/mercados/mortari'

export default function CardMercado() {
    return (
        <View style={style.container}>

            <TouchableOpacity style={style.inner}>
                <Mortari />
                <Text style={style.titulo}>Supermercado Mortari</Text>
                <Text style={style.subtitulo}>R$ 0,80</Text>
            </TouchableOpacity>

        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        paddingVertical: 10,

    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    titulo: {
        fontFamily: 'Montserrat_600SemiBold',
        color: Colors.Preto,

    },
    subtitulo: {
        color: Colors.Preto,
        fontFamily: 'Montserrat_600SemiBold'
    },



});


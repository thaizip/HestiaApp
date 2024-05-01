import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors';

export default function CardMercado() {
    return (
        <View style={style.container}>
            <View style={style.inner}>
                <Text>Img Mercado</Text>
                <Text style={style.titulo}>Supermercado Mortari</Text>
                <Text style={style.subtitulo}>R$ 0,80</Text>
            </View>
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
    }


});


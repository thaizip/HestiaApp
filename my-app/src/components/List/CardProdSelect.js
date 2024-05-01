import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import BtnQuant from '../Buttons/BtnQuant';

export default function CardProdSelect() {
    return (
        <View style={style.container}>
            <View style={style.inner}>
                <Image source={require('../../../assets/images/product/imgBatata.png')} style={{ width: '14%', aspectRatio: 1 }} />
                <View>
                    <Text style={style.titulo}>Batata Inglesa</Text>
                    <Text style={style.subtitulo}>100g</Text>
                </View>
                <BtnQuant />
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
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        borderRadius: 10,
        paddingVertical: 10,

    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 25,
    },
    titulo: {
        fontFamily: 'Montserrat_600SemiBold',
        color: Colors.Preto,

    },
    subtitulo: {
        color: Colors.Preto,
        fontFamily: 'Montserrat_400Regular'
    }


});


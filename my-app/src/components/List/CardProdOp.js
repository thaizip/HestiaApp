import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import BtnQuant from '../Buttons/BtnQuant';
import BtnAddCirc from '../Buttons/BtnAddCirc';

export default function CardProdOp() {
    return (
        <View style={style.container}>
            <View style={style.inner}>
                <Image source={require('../../../assets/images/product/imgBatata.png')} />
                <View style={{gap: 5}}>
                    <Text style={style.titulo}>Batata Inglesa</Text>
                    <Text style={style.subtitulo}>100g</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <BtnQuant />
                        <BtnAddCirc />
                    </View>
                </View>

            </View>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        paddingVertical: 15,
        marginEnd: 10,
    },
    inner: {
        alignItems: 'center',
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


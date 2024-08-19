import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import BtnQuant from '../Buttons/BtnQuant';
import BtnAddCirc from '../Buttons/BtnAddCirc';
import { imagePaths } from '../../../assets/images/imagesPaths';

export default function CardProdOp({ data, onAddProduct }) {
    const getImageSource = (imgUrl) => {
        return imagePaths[imgUrl] || require('../../../assets/images/imgPadrao.png');
    };
    const handleAddProduct = () => {
        onAddProduct(data);
    };

    return (
        <View style={style.container}>
            <View style={style.inner}>
            <Image source={getImageSource(data.imgUrl)} style={style.image} />
                <View style={{ gap: 5 }}>
                    <Text style={style.titulo}>{data.name}</Text>
                    <Text style={style.subtitulo}>100g</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <BtnQuant />
                        <TouchableOpacity onPress={handleAddProduct}>
                            <BtnAddCirc />
                        </TouchableOpacity>
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
    },

    image: {
        width: "100%",
        justifyContent: 'flex-start',
        resizeMode: 'contain' 
    }
});


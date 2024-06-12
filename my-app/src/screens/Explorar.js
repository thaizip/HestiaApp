import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'

import Fonts from '../../assets/fonts/fonts';
import CardProduto from '../components/List/CardProduto';
import Search from '../components/Search';

export default function Explorar() {
    return (
        <Fonts font={
            <ScrollView style={style.container}>
                <View>
                    <Text style={style.titulo}>Explorar</Text>
                    <Text style={style.subtitulo}>Com o que deseja economizar hoje?  </Text>
                    <Search/>
                    <Text>Categorias</Text>
                </View>
                <View style={style.containerCard}>
                    <View style={style.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
                    <View style={style.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
                    <View style={style.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
                </View>



            </ScrollView>
        } />
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
        paddingVertical: 50,
        paddingHorizontal: 25,
        marginTop: 15
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 35,
        fontFamily: 'Montserrat_600SemiBold'
    },
    subtitulo: {
        fontSize: 17,
        fontFamily: 'Montserrat_400Regular'
    },
    containerCard:{
        marginBottom: 70,
    },
    Card: {
        flexDirection: 'row',
    }
});









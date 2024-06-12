import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'

import Fonts from '../../assets/fonts/fonts';
import Search from '../components/Search';
import CardListas from '../components/List/CardListas';
import BtnNewList from '../components/Buttons/BtnNewList';

export default function Listas() {
    return (
        <Fonts font={
            <ScrollView style={style.container}>
                <View>
                    <Text style={style.titulo}>Listas</Text>
                    <Text style={style.subtitulo}>Com o que deseja economizar hoje?  </Text>
                    <Search />
                    <BtnNewList />
                </View>
                <View style={style.containerCard}>
                    <CardListas />
                    <CardListas />
                    <View style={style.divider} />
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
        fontFamily: 'Montserrat_400Regular',
        paddingBottom: 10
    },
    containerCard: {
        marginBottom: 70,
    },
    Card: {
        flexDirection: 'row',
    }
});









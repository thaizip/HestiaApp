import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import {  Ionicons} from '@expo/vector-icons';
import Fonts from '../../../assets/fonts/fonts';
import CardProdutoVizList from '../../components/List/CardProdutoVizList';
import CardAddItem from '../../components/List/CardAddItem';


export default function Vizualizar() {
    return (
        <Fonts font={
            <ScrollView style={style.container}>
                <Text style={style.titulo}>Churrasco Dia dos Pais</Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <Ionicons name='bag-outline' size={20} />
                    <Text style={style.subtitulo}>12 itens  </Text>
                </View>
                <View style={style.containerCard}>
                    <View style={style.Card}>
                        <CardProdutoVizList />
                        <CardProdutoVizList />
                    </View>
                    <CardAddItem />
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
        paddingHorizontal: 25
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 25,
        fontFamily: 'Montserrat_600SemiBold'
    },
    subtitulo: {
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular'
    },
    containerCard: {
        marginBottom: 70,
    },
    Card: {
        flexDirection: 'row',
    }
});









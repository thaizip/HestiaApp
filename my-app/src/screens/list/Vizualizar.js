import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import Fonts from '../../../assets/fonts/fonts';
import CardProdutoList from '../../components/List/CardProdutoList';
import CardAddItem from '../../components/List/CardAddItem';
import {  Feather, Ionicons} from '@expo/vector-icons';

export default function Vizualizar() {
    return (
        <Fonts font={
            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>Churrasco Dia dos Pais</Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <Ionicons name='bag-outline' size={20} />
                    <Text style={styles.subtitulo}>12 itens  </Text>
                </View>
                <View style={styles.containerCard}>
                    <View style={styles.Card}>
                        <CardProdutoList />
                        <CardProdutoList />
                    </View>
                    <CardAddItem />
                </View>

            </ScrollView>
        } />
    );
}

const styles = StyleSheet.create({
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









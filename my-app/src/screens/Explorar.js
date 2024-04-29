import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'

import Fonts from '../../assets/fonts/fonts';
import CardProduto from '../components/List/CardProduto';
import Search from '../components/Search';

export default function Explorar() {
    return (
        <Fonts font={
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Explorar</Text>
                    <Text style={styles.subtitulo}>Com o que deseja economizar hoje?  </Text>
                    <Search/>
                    <Text>Categorias</Text>
                </View>
                <View style={styles.containerCard}>
                    <View style={styles.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
                    <View style={styles.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
                    <View style={styles.Card}>
                        <CardProduto />
                        <CardProduto />

                    </View>
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
        paddingHorizontal: 25,
        marginVertical: 15
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









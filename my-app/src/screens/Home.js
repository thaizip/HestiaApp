import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'
import Banner from '../components/Home/Banner';
import CardListHome from '../components/Home/CardListHome';
import Fonts from '../../assets/fonts/fonts';
import CardProduto from '../components/List/CardProduto';
import ModAdd from '../components/modais/ModAdd';

export default function Home() {
    return (
        <Fonts font={
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Bem - Vindo</Text>
                    <Text>Nome do usuário </Text>
                </View>
                <Banner />
                <View style={styles.containerCard}>
                    <Text style={styles.tituloCard}>Minhas Listas</Text>
                    <CardListHome />
                    <CardListHome />
                    <CardListHome />
                </View>
                <View style={styles.containerMerc}>
                    <Text style={{fontSize: 25, fontFamily: 'Montserrat_600SemiBold'}}>Mercados</Text>
                </View>
                <ModAdd/>             
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
        fontSize: 35,
        fontFamily: 'Montserrat_600SemiBold'
    },
    containerCard: {
        backgroundColor: Colors.Branco,
        borderRadius: 15
    },
    tituloCard: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold',
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 5
    },
    containerMerc:{
        alignItems: 'center',
        paddingTop: 15
    },
    CardMerc:{
        flexDirection: 'row',
        
    }
});









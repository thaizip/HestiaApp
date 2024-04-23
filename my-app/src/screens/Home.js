import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'
import Banner from '../components/Home/Banner';
import CardListHome from '../components/Home/CardListHome';

export default function Home() {
    return (
        <View style={styles.container}>
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

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
        padding: 30
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 35,
        fontWeight: '700',
    },
    containerCard: {
        backgroundColor: Colors.Branco,
        borderRadius: 15
    },
    tituloCard: {
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 5
    }
});

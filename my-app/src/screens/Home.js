import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../assets/colors/colors'
import Banner from '../components/Home/Banner';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Bem - Vindo</Text>
                <Text>Nome do usuário </Text>
            </View>
            <Banner/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Branco,
        padding: 30
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 35,
        fontWeight: '700',
    }
});

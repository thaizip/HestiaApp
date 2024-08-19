import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../assets/colors/colors';
import Fonts from '../../assets/fonts/fonts';
import CardListas from '../components/List/CardListas';
import Search from '../components/Search';
import BtnNewList from '../components/Buttons/BtnNewList';
import apiStore from '../service/apiStore'; // Verifique se o caminho está correto

export default function Listas() {
    const navigation = useNavigation();
    const [listas, setListas] = useState([]);

    useEffect(() => {
        async function fetchListas() {
            try {
                const response = await apiStore.get('/lista');
                setListas(response.data);
            } catch (error) {
                console.error("Erro ao buscar listas:", error.message);
            }
        }

        fetchListas();
    }, []);

    const handleListaPress = (lista) => {
        navigation.navigate('Visualizar', { lista });
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.titulo}>Listas</Text>
                <Text style={styles.subtitulo}>Com o que deseja economizar hoje?</Text>
                <Search />
                <BtnNewList />
            </View>
            <View style={styles.containerCard}>
                {listas.map((data, i) => (
                    <TouchableOpacity key={i} onPress={() => handleListaPress(data)}>
                        <CardListas data={data} />
                    </TouchableOpacity>
                ))}
                <View style={styles.divider} />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
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
    }
});

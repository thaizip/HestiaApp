import React, {useEffect,useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../../../assets/fonts/fonts';
import CardProdutoVizList from '../../components/List/CardProdutoVizList';
import CardAddItem from '../../components/List/CardAddItem';
import apiStore from '../../service/apiStore';


export default function Visualizar({ route }) {
    const { lista } = route.params; // Recebe os dados da lista selecionada

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Função para carregar os produtos da lista selecionada
        async function fetchProdutosDaLista() {
            try {
                const response = await apiStore.get(`/lista/${lista.id}`); // Endpoint para buscar produtos da lista
                setProdutos(response.data);
                console.log(JSON.stringify(response.data, null, 2));


            } catch (error) {
                console.error("Erro ao buscar produtos da lista:", error.message);
            }
        }

        fetchProdutosDaLista();
    }, [lista]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>{lista.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='bag-outline' size={20} color={Colors.Preto} />
                <Text style={styles.subtitulo}>{produtos.length} itens</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={styles.Card}>
                    {produtos.map((produto, index) => (
                        <CardProdutoVizList key={index} produto={produto} />
                    ))}
                </View>
                <CardAddItem />
            </View>
        </ScrollView>
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









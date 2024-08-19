import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/colors/colors'
import Banner from '../components/Home/Banner';
import CardListHome from '../components/Home/CardListHome';
import Fonts from '../../assets/fonts/fonts';

import apiStore from '../service/apiStore';
import BtnCatergoria from '../components/Buttons/BtnCategoria';
import Categorias from '../components/Categorias';
import SlideMercado from '../components/Home/SlideMercados';


export default function Home() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        apiStore.get('/lista')
            .then((response) => {
                setLista(response.data.slice(0,3))
                // console.log(JSON.stringify(response.data, null, 2));
            })
            .catch((error) => {
                console.error("Erro ao buscar lista:", error.message);
            });
    }, []);

    return (
        <Fonts font={
            <ScrollView style={style.container}>
                <View>
                    <Text style={style.titulo}>Bem - Vindo</Text>
                    {/* <Text>Nome do usuário </Text> */}
                </View>
                <Banner />
                <Categorias/>
                <View style={style.containerCard}>
                    <Text style={style.tituloCard}>Minhas Listas</Text>
                    {lista.map((data, i) => (
                        <CardListHome key={i} data={data} />
                    ))}
                    
                </View>
                <View style={style.containerMerc}>
                    <Text style={{ fontSize: 25, fontFamily: 'Montserrat_600SemiBold', marginBottom:20 }}>Mercados</Text>
                    <SlideMercado/>
                </View>
            </ScrollView>
        } />
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
        paddingTop: 60,
        paddingHorizontal: 25,
        marginTop: 0 
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
    containerMerc: {
        alignItems: 'center',
        paddingTop: 30
    },
    CardMerc: {
        flexDirection: 'row',

    }
});









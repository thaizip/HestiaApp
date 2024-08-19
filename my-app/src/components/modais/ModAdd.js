import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons } from '@expo/vector-icons';
import Search from '../Search';
import BtnFechar from '../Buttons/BtnFechar'
import CardList from '../List/CardList';
import BtnNewList from '../Buttons/BtnNewList';
import CardProdSelect from '../List/CardProdSelect';

import apiStore from '../../service/apiStore';

export default function ModAdd({ handleClose }) {


    const [lista, setLista] = useState([]);

    useEffect(() => {
        apiStore.get('/lista')
            .then((response) => {
                setLista(response.data)
                console.log(JSON.stringify(response.data, null, 2));
            })
            .catch((error) => {
                console.error("Erro ao buscar lista:", error.message);
            });
    }, []);

    return (


        <View style={style.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} onPress={handleClose}></TouchableOpacity>
            <View style={style.content}>
                <View>
                    <View style={style.head}>
                        <Text style={style.titulo}>Adicionar</Text>
                        <TouchableOpacity onPress={handleClose}>
                            <BtnFechar />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Ionicons name="bag-check-outline" size={20} />
                        <Text style={style.subtitulo}>Em qual lista deseja salvar?  </Text>
                    </View>
                </View>
                <Search />
                <BtnNewList />
                <View style={style.containerList}>
                    <CardProdSelect />
                    {lista.map((data, i) => (
                        <CardList key={i} data={data} />
                    ))}
                </View>
            </View>
        </View>


    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    content: {
        backgroundColor: Colors.Fundo,
        paddingBottom: 10,
        paddingHorizontal: 25,
        paddingTop: 20,
        borderRadius: 10
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 25,
        fontFamily: 'Montserrat_600SemiBold'
    },

    subtitulo: {
        fontSize: 15,
        color: Colors.Preto,
        fontFamily: 'Montserrat_400Regular'
    },
    containerList: {
        gap: 12,
        zIndex: 9
    }

});

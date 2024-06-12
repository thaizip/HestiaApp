import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons } from '@expo/vector-icons';
import Search from '../Search';
import BtnFechar from '../Buttons/BtnFechar'
import CardMercado from '../List/CardMercado';
import BtnNewList from '../Buttons/BtnNewList';
import CardProdSelect from '../List/CardProdSelect';


export default function ModCompararItem({ handleClose }) {
    return (
        <View style={style.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} onPress={handleClose}></TouchableOpacity>
            <View style={style.content}>
                <View>
                    <View style={style.head}>
                        <Text style={style.titulo}>Comparar</Text>
                        <TouchableOpacity onPress={handleClose}>
                            <BtnFechar />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Ionicons name="bag-check-outline" size={20} />
                        <Text style={style.subtitulo}>Qual preço é melhor para você ?</Text>
                    </View>
                </View>
                <Search />
                <BtnNewList />
                <View style={style.containerList}>
                    <CardProdSelect />
                    <CardMercado />
                    <CardMercado />
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
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 15
    },
    containerList: {
        gap: 12,
    }

});









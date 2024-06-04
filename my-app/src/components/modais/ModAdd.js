import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons } from '@expo/vector-icons';
import Search from '../Search';
import BtnFechar from '../Buttons/BtnFechar'
import CardList from '../List/CardList';
import BtnNewList from '../Buttons/BtnNewList';
import CardProdSelect from '../List/CardProdSelect';


export default function ModAdd() {

    return (
        <ScrollView style={style.container}>
            <View>
                <View style={style.head}>
                    <Text style={style.titulo}>Adicionar</Text>
                    <TouchableOpacity>
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
                <CardList />
                <CardList />
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.Fundo,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        padding: 15
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
    }

});

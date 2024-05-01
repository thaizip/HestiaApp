import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Octicons } from '@expo/vector-icons';
import Search from '../Search';
import BtnFechar from '../Buttons/BtnFechar'
import BtnCancelar from '../Buttons/BtnCancelar'
import BtnSalvar from '../Buttons/BtnSalvar'
import CardProdOp from '../List/CardProdOp';



export default function ModAddItem() {

    return (
        <ScrollView style={style.container}>
            <View>
                <View style={style.head}>
                    <Text style={style.titulo}>Novo Item</Text>
                    <TouchableOpacity>
                        <BtnFechar />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Octicons name="checklist" size={18} />
                    <Text style={style.subtitulo}>O que mais precisa?</Text>
                </View>
                <View style={style.inner}>
                    <Text style={style.text}>Pesquisar Item</Text>
                    <Search />
                </View>
                <View>
                    <Text style={style.text}>Algumas Opções </Text>
                    <View style={style.divider} />

                    <View style={{ flexDirection: 'row' }}>
                        <CardProdOp />
                        <CardProdOp />
                    </View>
                    <View style={style.buttons}>
                        <BtnCancelar />
                        <BtnSalvar />
                    </View>

                </View>


            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
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
    inner: {
        marginVertical: 10,
        gap: 5
    },
    input: {
        backgroundColor: Colors.Branco,
        height: 45,
        borderRadius: 15,
        marginBottom: 10,
        padding: 10
    },
    text: {
        fontFamily: 'Montserrat_500Medium'
    },

    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.Preto,
        flex: 1,
        marginVertical: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10, 
        marginVertical: 20,
    }

});










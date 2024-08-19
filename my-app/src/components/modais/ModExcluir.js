import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons } from '@expo/vector-icons';
import BtnFechar from '../Buttons/BtnFechar'
import BtnCancelar from '../Buttons/BtnCancelar'
import BtnSalvar from '../Buttons/BtnSalvar'
import apiStore from '../../service/apiStore';

export default function ModExcluir({ handleClose, listaId }) {

    const deletelista = async (listaId) => {
        try {
            const response = await apiStore.delete('/lista/' + listaId)
            console.log(response.data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const ExcluirLista = async () => {
        try {
            await deletelista(listaId)
            handleClose()
        } catch (error) {
            console.log('Error ao excluir lista', error)
        }
    }
    return (
        <View style={style.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} onPress={handleClose}></TouchableOpacity>
            <View style={style.content}>
                <View style={style.head}>
                    <Text style={style.titulo}>Excluir Lista</Text>
                    <TouchableOpacity onPress={handleClose}>
                        <BtnFechar />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingEnd: 35 }}>
                    <Ionicons name="bag-remove-outline" size={25} />
                    <Text style={style.subtitulo}>Tem certeza que deseja excluir a lista 'nome da lista' ? </Text>
                </View>
                <View style={style.buttons}>
                    <TouchableOpacity onPress={handleClose}>
                        <BtnCancelar />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ExcluirLista}>
                        <BtnSalvar />
                    </TouchableOpacity>

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
        fontSize: 18,
        color: Colors.Preto,
        fontFamily: 'Montserrat_400Regular'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginVertical: 20,
    }

});










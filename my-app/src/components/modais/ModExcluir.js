import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import { Ionicons} from '@expo/vector-icons';
import BtnFechar from '../Buttons/BtnFechar'
import BtnCancelar from '../Buttons/BtnCancelar'
import BtnSalvar from '../Buttons/BtnSalvar'

export default function ModExcluir() {

    return (
        <ScrollView style={style.container}>
            <View>
                <View style={style.head}>
                    <Text style={style.titulo}>Excluir Lista</Text>
                    <TouchableOpacity>
                        <BtnFechar />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingEnd: 35}}>
                    <Ionicons name="bag-remove-outline" size={25} />
                    <Text style={style.subtitulo}>Tem certeza que deseja excluir a lista 'nome da lista' ? </Text>
                </View>
                <View style={style.buttons}>
                    <BtnCancelar />
                    <BtnSalvar />
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










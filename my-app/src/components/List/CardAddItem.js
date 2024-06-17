import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from "react-native";
import { Colors } from "../../../assets/colors/colors";
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModAddItem from '../modais/ModAddItem'

export default function CardAddItem() {
    const [vizibleModal, setVisibleModal] = useState(false);

    return (
        <View >
            <TouchableOpacity style={style.containerCard} onPress={() => setVisibleModal(true)}>
                <View style={style.containerInner}>
                    <AntDesign name='pluscircle' size={45} color={Colors.VerdeEscuro} />
                    <Text style={style.titulo}>Adicionar Itens</Text>
                </View>
            </TouchableOpacity>

            <Modal
                visible={vizibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            >
                <ModAddItem
                    handleClose={() => setVisibleModal(false)}
                />
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    containerCard: {
        width: '49%',
        backgroundColor: Colors.VerdeClaro,
        borderRadius: 15,
        padding: 15,
        marginEnd: 8,
        marginBottom: 10,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 1,
        margin: 2,
        justifyContent: 'center'
    },
    containerInner: {
        alignItems: 'center',
        justifyContent: "center",
        gap: 15,
    },
    titulo: {
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold',
        color: Colors.VerdeEscuro,
        textAlign: 'center',
    }
})

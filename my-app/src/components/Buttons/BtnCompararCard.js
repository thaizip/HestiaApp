import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';
import ModCompararItem from '../modais/ModCompararItem';

export default function BtnCompararCard() {
    const [vizibleModal, setVisibleModal] = useState(false);

    return (
        <View >
            <TouchableOpacity style={style.container} onPress={() => setVisibleModal(true)}>
                <PigBank />
                <Text style={style.text}>Comparar</Text>
            </TouchableOpacity>

            <Modal
                visible={vizibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            >
                <ModCompararItem
                    handleClose={() => setVisibleModal(false)}
                />
            </Modal>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.VerdeClaro,
        padding: 5,
        gap: 2,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        width: '72%'
    },
    text: {
        color: Colors.VerdeEscuro,
        fontSize: 12,
        fontWeight: '600'

    },

});
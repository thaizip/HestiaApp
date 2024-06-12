import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

import ModExcluir from '../Modais/ModExcluir';

export default function BtnExcluir() {
    const [vizibleModal, setVisibleModal] = useState(false);
    return (
        <View >
            <TouchableOpacity style={style.container} onPress={() => setVisibleModal(true)}>
                <Ionicons name="trash-outline" size={32} color={Colors.VerdeClaro} />
            </TouchableOpacity>

            <Modal
                visible={vizibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            >
                <ModExcluir
                    handleClose={() => setVisibleModal(false)}
                />
            </Modal>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
   
})



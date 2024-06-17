import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { AntDesign } from '@expo/vector-icons';

import ModNewList from '../modais/ModNewList'

export default function BtnNewList() {
    const [vizibleModal, setVisibleModal] = useState(false);
    return (
        <View >
            <TouchableOpacity style={style.container} onPress={() => setVisibleModal(true)}>
                <AntDesign name='pluscircle' size={20} color={Colors.VerdeEscuro} />
                <Text style={style.text}>Nova Lista</Text>
            </TouchableOpacity>

            <Modal 
                visible={vizibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            > 
                <ModNewList
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
        marginVertical: 15
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    }
})



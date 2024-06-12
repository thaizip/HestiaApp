import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import PigBank from '../../../assets/images/icons/pigBank';
import ModCompararItem from '../../components/Modais/ModCompararItem'


export default function BtnComparaVizList() {
    const [vizibleModal, setVisibleModal] = useState(false);

    return (

        <View >
            <TouchableOpacity style={style.container} onPress={() => setVisibleModal(true)}>
                <PigBank />
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
        padding: 8,
        borderRadius: 15,
        backgroundColor: Colors.VerdeClaro,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { FontAwesome6 } from '@expo/vector-icons';

export default function BtnAdd() {
    const [visibleModal, setVisibleModal] = useState(false);
    const [ModAddComponent, setModAddComponent] = useState(null);

    const openModal = async () => {
        if (!ModAddComponent) {
            const { default: ModAdd } = await import('../Modais/ModAdd');
            setModAddComponent(() => ModAdd);
        }
        setVisibleModal(true);
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={openModal}>
                <FontAwesome6 name='plus' size={12} />
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            >
                {ModAddComponent && (
                    <ModAddComponent handleClose={() => setVisibleModal(false)} />
                )}
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        alignItems: 'center',
        padding: 5,
    },
});

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../../../assets/colors/colors';
import BtnComparar from '../Buttons/BtnComparar';
import Fonts from '../../../assets/fonts/fonts';

export default function CardListHome() {
    return (
        <Fonts font={
            <View style={styles.container}>
                <View style={styles.inner}>
                    <FontAwesomeIcon icon={faListCheck} size={20} />
                    <TouchableOpacity>
                        <Text style={{ color: Colors.Preto, fontFamily: 'Montserrat_500Medium'}}>Nome da lista</Text>
                    </TouchableOpacity>
                </View>
                <BtnComparar />
            </View>
        } />

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: Colors.Preto,
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }

});


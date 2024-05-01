import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons'
import { Colors } from '../../../assets/colors/colors';
import BtnAdd from '../Buttons/BtnAdd';

export default function CardList() {
    return (

        <View style={style.container}>
            <View style={style.inner}>
                <FontAwesome6 name='list-check' size={20} />
                <TouchableOpacity>
                    <Text style={{ color: Colors.Preto, fontFamily: 'Montserrat_500Medium' }}>Nome da lista</Text>
                </TouchableOpacity>
            </View>
            <BtnAdd />
        </View>


    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        padding: 10,
        color: Colors.Preto,
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }

});


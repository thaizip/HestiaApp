import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome6} from '@expo/vector-icons'
import { Colors } from '../../../assets/colors/colors';
import BtnComparar from '../Buttons/BtnComparar';
import Fonts from '../../../assets/fonts/fonts';

export default function CardListHome() {
    return (
        <Fonts font={
            <View style={style.container}>
                <View style={style.inner}>
                <FontAwesome6 name='list-check'size={20}/>

                    <TouchableOpacity>
                        <Text style={{ color: Colors.Preto, fontFamily: 'Montserrat_500Medium'}}>Nome da lista</Text>
                    </TouchableOpacity>
                </View>
                <BtnComparar />
            </View>
        } />

    );
}

const style = StyleSheet.create({
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
        gap: 15,
     
    }

});


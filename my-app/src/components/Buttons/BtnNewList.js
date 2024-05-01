import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { AntDesign } from '@expo/vector-icons';

export default function BtnNewList() {
    return (
        <View style={style.container}>
            <AntDesign name='pluscircle' size={20} color={Colors.VerdeEscuro} />
            <Text style={style.text}>Nova Lista</Text>
        </View>

    );
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15
    },
    text:{
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    }
})



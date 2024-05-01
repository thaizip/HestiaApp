import React  from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { FontAwesome6 } from '@expo/vector-icons'

export default function BtnAdd() {

    return (

        <View style={style.container}>
            <TouchableOpacity>
                <FontAwesome6 name='plus' size={12} />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
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
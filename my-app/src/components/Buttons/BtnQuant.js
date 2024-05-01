import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { AntDesign } from '@expo/vector-icons';

export default function BtnQuant() {
    const [quant, setQuant] = useState(1)

    const AddQuant = () => {
        setQuant(quant + 1)
    }
    const RemQuant = () => {
        if (quant > 0) {
            setQuant(quant - 1)
        }
    }

    return (
        <View style={style.container}>
                <TouchableOpacity onPress={RemQuant}>
                    <AntDesign name='minuscircleo' size={25} color={Colors.VerdeEscuro} />
                </TouchableOpacity>
                <Text style={style.text}>{quant}</Text>
                <TouchableOpacity onPress={AddQuant}>
                    <AntDesign name='pluscircleo' size={25} color={Colors.VerdeEscuro} />
                </TouchableOpacity>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.VerdeClaro,
        paddingVertical: 3,
        paddingHorizontal: 10,
        gap: 10,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },

    text: {
        color: Colors.VerdeEscuro,
        fontSize: 20,

    },

});
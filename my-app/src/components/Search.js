import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../assets/colors/colors';

export default function Search() {
    return (
        <View style={style.container}>
            <Feather name="search" size={20} style={style.icon} />
            <TextInput
                style={style.input}
                autoCapitalize="none"
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        backgroundColor: Colors.Branco,
        height: 45,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
        color: Colors.Preto
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.Preto,
    }
});

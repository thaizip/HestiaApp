import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../assets/colors/colors';

export default function Search() {
    return (
        <View style={styles.container}>
            <Feather name="search" size={20} style={styles.icon} />
            <TextInput
                style={styles.input}
                autoCapitalize="none"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        backgroundColor: Colors.Branco,
        height: 45,
        marginVertical: 15,
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

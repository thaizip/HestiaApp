import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../../../assets/colors/colors';

export default function CardList() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <FontAwesomeIcon icon={faListCheck} size={20}  />
                <Text style={{color: Colors.Preto}}>Nome da lista</Text>
            </View>
            <Text>Button</Text>
        </View>
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
        padding: 15,
        color: Colors.Preto,
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }

});


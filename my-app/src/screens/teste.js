import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import apiStore from '../service/apiStore';
import CardListas from '../../assets/images/product/1.png';

export default function Teste() {

    const teste = require('../../assets/images/product/1.png')
    return (
        <ScrollView style={styles.container}>
            <View>
               
                <Text> tela para teste </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

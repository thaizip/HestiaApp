import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import Imagem from '../../../assets/images/home/banner';
import Fonts from '../../../assets/fonts/fonts';

export default function Banner() {
    return (
        <Fonts font={
            <View style={styles.banner}>
                <View style={styles.inner}>
                    <Text style={styles.tituloBanner}>Bora Economizar ?</Text>
                    <Text style={styles.textBanner}>Crie sua lista e {'\n'}
                        vamos comparar ! </Text>
                </View>
                <Imagem />
            </View>
        } />

    );
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        backgroundColor: Colors.VerdeEscuro,
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginVertical: 10

    },
    inner: {
        gap: 5
    },
    tituloBanner: {
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold',
        color: Colors.VerdeClaro,

    },
    textBanner: {
        fontSize: 15,
        fontFamily: 'Montserrat_300Light',
        color: Colors.VerdeClaro,

    }
});


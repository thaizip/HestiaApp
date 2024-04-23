import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import Imagem from '../../../assets/images/home/banner';
export default function Banner() {
    return (
        <View style={styles.banner}>
            <View style={styles.inner}>
                <Text style={styles.tituloBanner}>Bora Economizar ?</Text>
                <Text style={styles.textBanner}>Crie sua lista e {'\n'}
                    vamos comparar ! </Text>
            </View>
            {/* <Image source={require('../../../assets/images/home/banner.png')} style={{ flex: 1 }} /> */}
            <Imagem />
        </View>
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
        gap: 10
    },
    tituloBanner: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.VerdeClaro,

    },
    textBanner: {
        fontSize: 15,
        fontWeight: '200',
        color: Colors.VerdeClaro,

    }
});


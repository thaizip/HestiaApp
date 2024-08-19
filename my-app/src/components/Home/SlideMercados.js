import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Mortari from '../../../assets/images/home/mercados/mortari';
// import Simone from '../../../assets/images/home/mercados/simone'
import Savegnago from '../../../assets/images/home/mercados/savegnago'
import { Colors } from '../../../assets/colors/colors';


export default function SlideMercado() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.card}>
                <Mortari/>
            </View>
            <View style={styles.card}>
                {/* <Simone/> */}
                <Mortari/>
            </View>
            <View style={styles.card}>
                <Savegnago/>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    card: {
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        padding: 20,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        width: 200, 
    },
   
});


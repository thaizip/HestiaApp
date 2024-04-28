import React from 'react';
import { ScrollView, StyleSheet, Text, View,  } from 'react-native';
import { Colors } from '../../../assets/colors/colors'
import Search from '../Search';
import Fonts from '../../../assets/fonts/fonts';
import { Modalize } from 'react-native-modalize';

export default function ModAdd() {
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Adicionar</Text>
                <Text>Em qual lista deseja salvar?  </Text>
            </View>
            <Search />
            <Text>Nova lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
        paddingVertical: 50,
        paddingHorizontal: 25,
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 35,
        fontFamily: 'Montserrat_600SemiBold'
    },
  
   
});









import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Colors } from '../../assets/colors/colors';
import BtnCatergoria from './Buttons/BtnCategoria';
import PigBank from '../../assets/images/icons/pigBank';

const categories = [
    { name: 'Todas', icon: require('../../assets/images/icons/categorias/todos.png') },
    { name: 'Hortifruti', icon: require('../../assets/images/icons/categorias/hortifrutes.png') },
    { name: 'Padaria', icon: require('../../assets/images/icons/categorias/padaria.png') },
    { name: 'Laticinios', icon: require('../../assets/images/icons/categorias/laticinios.png') },
    { name: 'Proteina', icon: require('../../assets/images/icons/categorias/proteina.png') },
    { name: 'Bebidas', icon: require('../../assets/images/icons/categorias/bebidas.png') },
    { name: 'Mercearia', icon: require('../../assets/images/icons/categorias/mercearia.png') },
    { name: 'Limpeza', icon: require('../../assets/images/icons/categorias/limpeza.png') },
    { name: 'Bebes', icon: require('../../assets/images/icons/categorias/bebes.png') },
    { name: 'Autocuidado', icon: require('../../assets/images/icons/categorias/autocuidado.png') },
];

export default function Categorias({ onSelectCategory }) {

    const handleCategoryPress = (category) => {
        onSelectCategory(category.name); // Chama a função para filtrar por categoria
    };


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
            {categories.map((category) => (
                <BtnCatergoria
                    key={category.name}
                    icon={category.icon}
                    onPress={() => handleCategoryPress(category)}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        flexDirection: 'row',
        marginVertical: 10,
    },
});


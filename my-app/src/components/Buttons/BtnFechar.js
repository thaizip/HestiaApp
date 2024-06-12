import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

export default function BtnFechar() {
    return (
        <View >
            <Ionicons name="close-circle-outline" size={35} color={Colors.Preto}/> 
        </View>

    );
}

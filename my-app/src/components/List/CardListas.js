import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { Colors } from "../../../assets/colors/colors";

export default function CardListas() {
    const [expanded, setExpanded] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        Animated.timing(slideAnim, {
            toValue: expanded ? 0 : -80,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => setExpanded(!expanded));
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.inner, { transform: [{ translateX: slideAnim }] }]}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.titulo}>Churrasco Dia dos Pais</Text>
                        <Text style={styles.subtitulo}>12 itens</Text>
                    </View>
                    <TouchableOpacity onPress={toggleExpand}>
                        <Text style={{ fontSize: 28 }}>...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgContainer}>
                    <View style={styles.imgBoxL}>
                        <Image
                            source={require('../../../assets/images/product/imgBatata.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.imgBoxL}>
                        <Image
                            source={require('../../../assets/images/product/imgBatata.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.column}>
                        <View style={styles.imgBoxS}>
                            <Image
                                source={require('../../../assets/images/product/imgBatata.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.imgBoxS}>
                            <Image
                                source={require('../../../assets/images/product/imgBatata.png')}
                                style={styles.image}
                            />
                        </View>
                    </View>
                </View>
            </Animated.View>
            {expanded && (
                <View style={styles.optionsContainer}>
                    <View style={{padding: 8}}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>Icon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>Icon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>ICon</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
        overflow: 'hidden',
    },
    inner: {
        width: '100%',
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        padding: 15,
        elevation: 1,
        zIndex: 2, // Mantém o card acima dos botões
        position: 'relative', // Necessário para zIndex funcionar corretamente
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 14,
        marginBottom: 10,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgBoxL: {
        width: '30%',
        height: 150,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#EEEE',
        overflow: 'hidden',
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    column: {
        width: '30%',
        justifyContent: 'space-between',
    },
    imgBoxS: {
        width: '100%',
        height: 70,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#EEE',
        overflow: 'hidden',
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', // Redimensiona a imagem para caber completamente sem cortar
    },
    optionsContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.VerdeEscuro,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 80, // Ajuste a largura conforme necessário
    },
    optionButton: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});


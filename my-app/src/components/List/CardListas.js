
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { Colors } from "../../../assets/colors/colors";
import { AntDesign } from '@expo/vector-icons';
import PigBank2 from '../../../assets/images/icons/pigBank2';
import BtnExcluir from '../Buttons/BtnExclui';
import { imagePaths } from '../../../assets/images/imagesPaths';

const max_img = 4;

export default function CardListas({ data }) {
    const [expanded, setExpanded] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        Animated.timing(slideAnim, {
            toValue: expanded ? 0 : -80,
            duration: 150,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => setExpanded(!expanded));
    };

    const imagesToDisplay = [...data.products.map(product => product.imgUrl), ...Array(max_img - data.products.length).fill(null)];

    const getImageSource = (imgUrl) => {
        return imagePaths[imgUrl] || require('../../../assets/images/imgPadrao.png')
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.inner, { transform: [{ translateX: slideAnim }] }]}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.titulo}>{data.name}</Text>
                        <Text style={styles.subtitulo}>{`${data.products.length} itens`}</Text>
                    </View>
                    <TouchableOpacity onPress={toggleExpand}>
                        <Text style={{ fontSize: 28 }}>...</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgContainer}>
                    {/* Coluna 1 */}
                    <View style={styles.column}>
                        {imagesToDisplay.slice(0, 1).map((imgUrl, index) => (
                            <View key={index} style={styles.imgBoxL}>
                                <Image
                                    source={getImageSource(imgUrl)}
                                    style={styles.image}
                                />
                            </View>
                        ))}
                    </View>
                    {/* Coluna 2 */}
                    <View style={styles.column}>
                        {imagesToDisplay.slice(1, 2).map((imgUrl, index) => (
                            <View key={index} style={styles.imgBoxL}>
                                <Image
                                    source={getImageSource(imgUrl)}
                                    style={styles.image}
                                />
                            </View>
                        ))}
                    </View>
                    {/* Coluna 3 */}
                    <View style={styles.column}>
                        {imagesToDisplay.slice(2).map((imgUrl, index) => (
                            <View key={index} style={styles.imgBoxS}>
                                <Image
                                    source={getImageSource(imgUrl)}
                                    style={styles.image}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </Animated.View>
            {expanded && (
                <View style={styles.optionsContainer}>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button}>
                            <PigBank2 />
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity style={styles.button}>
                            <AntDesign name="sharealt" size={30} color={Colors.VerdeClaro} />
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <View style={styles.buttonTrash}>
                            <BtnExcluir />
                        </View>
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
    column: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imgBoxL: {
        height: 150,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#EEEE',
        overflow: 'hidden',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10
    },
    imgBoxS: {
        height: 70,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#EEE',
        overflow: 'hidden',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
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
        width: 87,
        paddingLeft: 5,
        paddingVertical: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 0.70,
        borderBottomColor: Colors.VerdeClaro
    },
    buttonTrash: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 2
    }
});


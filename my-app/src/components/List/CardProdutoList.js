import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../assets/colors/colors";
import BtnQuant from '../Buttons/BtnQuant'
import BtnCompararList from "../Buttons/BtnCompararList";

export default function CardProduto() {
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerImg}>
                <Image source={require('../../../assets/images/product/imgBatata.png')} />
            </View>
            <View style={styles.containerInner}>
                <Text style={styles.titulo}>Batata Inglesa</Text>
                <Text style={styles.descricao}>Versátil e nutritiva. Usada para fazer purê, ou fritas.</Text>
                <Text style={styles.peso}>100g</Text>
                <View style={styles.buttons}>
                    <BtnQuant />
                    <BtnCompararList/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerCard: {
        width: '49%',
        backgroundColor: Colors.Branco,
        borderRadius: 15,
        padding: 15,
        marginEnd: 8,
        marginBottom: 10,
        marginVertical: 10,
        alignSelf: 'flex-start',
        elevation: 1,

    },
    containerImg: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerInner: {
        gap: 5,

    },
    titulo: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    },
    descricao: {
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium'
    },
    peso: {
        fontSize: 12,
        fontFamily: 'Montserrat_300Light'
    },
    buttons: {
        paddingTop: 8,
        flexDirection: 'row',
        gap: 10
    },



})
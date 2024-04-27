import { View, Text, StyleSheet, Image } from "react-native";
import BtnCompararCard from "../Buttons/BtnCompararCard";
import { Colors } from "../../../assets/colors/colors";
import BtnAdd from "../Buttons/BtnAdd";

export default function CardProduto() {
    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                    <BtnAdd />
                </View>
                <View style={styles.containerImg}>
                    <Image source={require('../../../assets/images/product/imgBatata.png')} />
                </View>
                <View style={styles.containerInner}>
                    <Text style={styles.titulo}>Batata Inglesa</Text>
                    <Text style={styles.descricao}>Versátil e nutritiva. Usada para fazer purê, ou fritas.</Text>
                    <Text style={styles.peso}>100g</Text>
                    <BtnCompararCard />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    containerCard: {
        width: '48%',
        backgroundColor: Colors.Branco,
        borderRadius: 15,
        padding: 15,
        marginEnd: 10,
        marginBottom: 10,
        marginVertical: 10
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
    }

})
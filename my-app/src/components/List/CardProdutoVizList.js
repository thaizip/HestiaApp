import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../assets/colors/colors";
import BtnQuant from '../Buttons/BtnQuant'
import BtnCompararVizList from "../Buttons/BtnCompararVizList";

export default function CardProdutoVizList() {
    return (
        <View style={style.containerCard}>
            <View style={style.containerImg}>
                <Image source={require('../../../assets/images/product/imgBatata.png')} />
            </View>
            <View style={style.containerInner}>
                <Text style={style.titulo}>Batata Inglesa</Text>
                <Text style={style.descricao}>Versátil e nutritiva. Usada para fazer purê, ou fritas.</Text>
                <Text style={style.peso}>100g</Text>
                <View style={style.buttons}>
                    <BtnQuant />
                    <BtnCompararVizList/>
                </View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({

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
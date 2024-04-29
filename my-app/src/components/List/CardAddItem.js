    import { View, Text, StyleSheet, Image } from "react-native";
    import { Colors } from "../../../assets/colors/colors";
    import { AntDesign } from '@expo/vector-icons'

    export default function CardAddItem() {
        return (
            <View style={styles.containerCard}>
                <View style={styles.containerInner}>
                    <AntDesign name='pluscircle' size={45} color={Colors.VerdeEscuro} />
                    <Text style={styles.titulo}>Adicionar Itens</Text>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        containerCard: {
            width: '49%',
            backgroundColor: Colors.VerdeClaro,
            borderRadius: 15,
            padding: 15,
            marginEnd: 8,
            marginBottom: 10,
            marginVertical: 10,
            alignItems: 'center',
            elevation: 1, 
            margin: 2,
            justifyContent: 'center'
        },
        containerInner: {
            alignItems: 'center',
            justifyContent: "center",
            gap: 15,
        },
        titulo: {
            fontSize: 20,
            fontFamily: 'Montserrat_600SemiBold',
            color: Colors.VerdeEscuro,
            textAlign: 'center',
        }
    })

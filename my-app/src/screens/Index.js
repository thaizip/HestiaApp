import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../assets/colors/colors';
import ImgIndex from '../../assets/images/access';
import Logo from '../../assets/images/access/logo';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <ImgIndex/>
                <Logo/>
                <Text style={[styles.text, {marginBottom: 5}]}>Venha fazer parte da Economia Inteligente no Supermercado!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, { color: '#254B2A', fontWeight: 500 }]} onPress={() => navigation.navigate('Login')}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.text}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.VerdeEscuro,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        width: '100%',
        paddingHorizontal: 35,
        paddingBottom: 50,
    },
    text: {
        color: Colors.VerdeClaro,
        fontWeight: '400',
        fontSize: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 20,
        width: '100%',
    },
    button: {
        width: 130,
        alignItems: 'center',
        backgroundColor: Colors.VerdeClaro,
        padding: 5,
        borderRadius: 10,

    },
    buttonCadastro: {
        width: 130,
        alignItems: 'center',
        borderColor: Colors.VerdeClaro,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,

    },

});

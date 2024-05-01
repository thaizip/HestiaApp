import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../assets/colors/colors';
import ImgIndex from '../../assets/images/access';
import Logo from '../../assets/images/access/logo';

export default function Index({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.inner}>
                <ImgIndex/>
                <Logo/>
                <Text style={[style.text, {marginBottom: 5}]}>Venha fazer parte da Economia Inteligente no Supermercado!</Text>
                <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.button}>
                        <Text style={[style.text, { color: '#254B2A', fontWeight: 500 }]} onPress={() => navigation.navigate('Login')}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.buttonCadastro} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={style.text}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
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

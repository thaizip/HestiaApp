import React, { useState } from 'react';
import { Colors } from '../../../assets/colors/colors';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import ImgLogin from '../../../assets/images/access/login';

export default function Index({ navigation }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };
  return (
    <KeyboardAvoidingView style={style.container} keyboardVerticalOffset={1000} >
      <View style={style.inner}>
        <ImgLogin />
        <Text style={[style.text, { fontSize: 25, fontWeight: 'bold' }]}>BEM - VINDO ! </Text>
        <Text style={[style.text, { fontWeight: 300 }]}>Faça login para continuar </Text>
        <TouchableOpacity style={style.buttonGoogle} onPress={() => navigation.navigate('Cadastro')}>
          <Image source={require('../../../assets/images/access/logoGoogle.png')} style={style.googleLogo} />
          <Text style={style.text}>Entre com o Google</Text>
        </TouchableOpacity>

        <View style={style.dividerContainer}>
          <View style={style.divider} />
          <Text style={[style.text, { marginHorizontal: 10, fontSize: 10 }]}>OU</Text>
          <View style={style.divider} />
        </View>
        {/* inputs */}
        <View> 
          <Text style={style.text}>E-MAIL</Text>
          <TextInput
            style={style.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={style.text}>SENHA</Text>
          <TextInput
            style={style.input}
            secureTextEntry={true}
          />
        </View>
        {/* links */}
        <View style={style.checkboxContainer}>
          <TouchableOpacity style={[style.checkbox, termsAccepted && style.checkboxSelected]} onPress={handleTermsToggle}>
            {termsAccepted && <View style={style.checkboxInner} />}
          </TouchableOpacity>
          <Text style={[style.text, { fontSize: 11, }]}>LEMBRE DE MIM</Text>
          <TouchableOpacity style={{marginLeft: 'auto' }}>
            <Text style={[style.text, { fontSize: 11 }]}>ESQUECEU A SENHA?</Text> 
          </TouchableOpacity>
        </View>
        
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.button}>
            <Text style={[style.text, { color: '#254B2A', fontWeight: 600 }]}  onPress={() => navigation.navigate('Home')}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    fontSize: 15,
  },
  input: {
    backgroundColor:  Colors.Branco,
    borderRadius: 10,
    height: 35,
    marginVertical: 8,
    width: '100%',
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginVertical: 10,
    width: '100%',
  },
  
  button: {
    width: 150,
    alignItems: 'center',
    backgroundColor: Colors.VerdeClaro,
    padding: 5,
    borderRadius: 10,
  },
  buttonGoogle: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.VerdeClaro,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.VerdeClaro,
    flex: 1,
    marginHorizontal: 5,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 15,
    height: 15,
    backgroundColor: Colors.Branco,
    borderRadius: 10, // Torna o TouchableOpacity circular
    marginRight: 10,
    borderWidth: 5,
    borderColor: Colors.Branco,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: Colors.VerdeClaro, // Cor quando selecionado
    borderColor: Colors.VerdeClaro,
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: Colors.VerdeEscuro,
    borderRadius: 10, // Torna o marcador de seleção dentro da bolinha
  },

});

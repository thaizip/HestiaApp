import React, { useState } from 'react';
import { Colors } from '../../../assets/colors/colors';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default function Index({ navigation }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsToggle = () => {
    setTermsAccepted(!termsAccepted);
  };
  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={1000} >
      <View style={styles.inner}>
        <Image source={require('../../../assets/images/access/index.png')} style={[styles.image, { alignSelf: 'center' }]} />
        <Text style={[styles.text, { fontSize: 25, fontWeight: 'bold' }]}>BEM - VINDO ! </Text>
        <Text style={[styles.text, { fontWeight: 300 }]}>Faça login para continuar </Text>
        <TouchableOpacity style={styles.buttonGoogle} onPress={() => navigation.navigate('Cadastro')}>
          <Image source={require('../../../assets/images/access/logoGoogle.png')} style={styles.googleLogo} />
          <Text style={styles.text}>Entre com o Google</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={[styles.text, { marginHorizontal: 10, fontSize: 10 }]}>OU</Text>
          <View style={styles.divider} />
        </View>
        {/* inputs */}
        <View> 
          <Text style={styles.text}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.text}>SENHA</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        {/* links */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={[styles.checkbox, termsAccepted && styles.checkboxSelected]} onPress={handleTermsToggle}>
            {termsAccepted && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text style={[styles.text, { fontSize: 11, }]}>LEMBRE DE MIM</Text>
          <TouchableOpacity style={{marginLeft: 'auto' }}>
            <Text style={[styles.text, { fontSize: 11 }]}>ESQUECEU A SENHA?</Text> 
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, { color: '#254B2A', fontWeight: 600 }]}  onPress={() => navigation.navigate('Home')}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    alignItems: 'center',
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

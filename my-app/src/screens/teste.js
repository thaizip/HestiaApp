import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ModAdd from '../components/Modais/ModAdd';
import ModNewList from '../components/Modais/ModNewList';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../assets/colors/colors';

const { height } = Dimensions.get('window');

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const Modal = ({ visible, onClose, children }) => {
    const translateY = useSharedValue(height);

    useEffect(() => {
      translateY.value = withTiming(visible ? 0 : height, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });

    return (
      <>
        {visible && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={onClose}
          />
        )}
        <Animated.View style={[styles.modal, animatedStyle]}>
          {children}
        </Animated.View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <AntDesign name='pluscircle' size={20} color={Colors.VerdeEscuro} />
        <Text style={styles.text}>Nova Lista</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <ModNewList />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 15
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.Fundo,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold'
  },
});

export default App;



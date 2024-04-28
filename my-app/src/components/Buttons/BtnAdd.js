import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../assets/colors/colors';
import { FontAwesome6 } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize';
import ModAdd from '../modais/ModAdd';


export default function BtnAdd() {
    const modalizeRef = useRef(null)
    function onOpen() {
        modalizeRef.current?.open();
    }
    return (
        
        <View style={style.container}>
            <TouchableOpacity onPress={onOpen }>
                <FontAwesome6 name='plus' size={12} />
            </TouchableOpacity>
            <Modalize
            ref={modalizeRef}
            snapPoint={500}
            modalStyle={style.modal}
            overlayStyle={style.overlay}>
                <ModAdd/>
            </Modalize>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: Colors.VerdeEscuro,
        alignItems: 'center',
        padding: 5,
    },

});
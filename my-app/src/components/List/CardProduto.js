// import { View, Text, StyleSheet, Image } from "react-native";
// import BtnCompararCard from "../Buttons/BtnCompararCard";
// import { Colors } from "../../../assets/colors/colors";
// import BtnAdd from "../Buttons/BtnAdd";
// import { imagePaths } from '../../../assets/images/imagesPaths';

// export default function CardProduto({data}) {


//     const getImageSource = (imgUrl) => {
//         return imagePaths[imgUrl] || require('../../../assets/images/imgPadrao.png')
//     }
//     return (
//             <View style={style.containerCard}>
//                 <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
//                     <BtnAdd />
//                 </View>
//                 <View style={style.containerImg}>
//                     <Image source={(getImageSource(imgUrl))}/>
//                 </View>
//                 <View style={style.containerInner}>
//                     <Text style={style.titulo}>{data.name}</Text>
//                     <Text style={style.descricao}>{data.description}</Text>
//                     <Text style={style.peso}>100g</Text>
//                     {/* <Text style={style.peso}></Text> */}
//                     <BtnCompararCard />
//                 </View>
//             </View>
//     )
// }

// const style = StyleSheet.create({

//     containerCard: {
//         height: 260,
//         backgroundColor: Colors.Branco,
//         borderRadius: 15,
//         padding: 15,
//         marginEnd: 8,
//         marginBottom: 10,
//         // marginVertical: 10,
//         elevation: 1, 

//     },
//     containerImg: {
//         flexDirection: 'row',
//         justifyContent: 'center'
//     },
//     containerInner: {
//          gap: 5,
//         alignContent: 'flex-end',
//         marginTop: 'auto'

//     },
//     titulo: {
//         fontSize: 15,
//         fontFamily: 'Montserrat_600SemiBold'
//     },
//     descricao: {
//         fontSize: 12,
//         fontFamily: 'Montserrat_500Medium',
//         textAlign: 'left'
//     },
//     peso: {
//         fontSize: 12,
//         fontFamily: 'Montserrat_300Light',
//     }

// })

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BtnCompararCard from "../Buttons/BtnCompararCard";
import { Colors } from "../../../assets/colors/colors";
import BtnAdd from "../Buttons/BtnAdd";
import { imagePaths } from '../../../assets/images/imagesPaths';

export default function CardProduto({ data }) {
    const getImageSource = (imgUrl) => {
        return imagePaths[imgUrl] || require('../../../assets/images/imgPadrao.png');
    };

    return (
        <View style={style.containerCard}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <BtnAdd />
            </View>
            <View style={style.containerImg}>
                <Image source={getImageSource(data.imgUrl)} style={style.image} />
            </View>
            <View style={style.containerInner}>
                <Text style={style.titulo}>{data.name}</Text>
                <Text style={style.descricao}>{data.description}</Text>
                <Text style={style.peso}>100g</Text>
                <BtnCompararCard />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    containerCard: {
        height: 260,
        backgroundColor: Colors.Branco,
        borderRadius: 15,
        padding: 15,
        marginEnd: 8,
        marginBottom: 10,
        elevation: 1,
    },
    containerImg: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerInner: {
        gap: 5,
        alignContent: 'flex-end',
        marginTop: 'auto',
    },
    titulo: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold'
    },
    descricao: {
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium',
        textAlign: 'left'
    },
    peso: {
        fontSize: 12,
        fontFamily: 'Montserrat_300Light',
    },
    image: {
        width: "100%",
        justifyContent: 'flex-start',
        resizeMode: 'contain' 
    }
});

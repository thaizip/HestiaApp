

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
// import { Colors } from '../../assets/colors/colors';
// import CardProduto from '../components/List/CardProduto';
// import Search from '../components/Search';
// import apiStore from '../service/apiStore';
// import Categorias from '../components/Categorias';
// import Fonts from '../../assets/fonts/fonts';

// const { width } = Dimensions.get('window');

// export default function Explorar() {
//     const [produtos, setProdutos] = useState([]);
//     const [produtosFiltrados, setProdutosFiltrados] = useState([]);

//     //Lista todas
//     useEffect(() => {
//         apiStore.get('/products')
//             .then((response) => {
//                 setProdutos(response.data);
//                 setProdutosFiltrados(response.data);
//                 // console.log(JSON.stringify(response.data, null, 2));
//             })
//             .catch((error) => {
//                 console.error("Erro ao buscar produtos:", error.message);
//             });
//     }, []);

//     // Filtra por categorias
//     const filtrarPorCategoria = (categoria) => {
//         if (categoria === 'Todas') {
//             setProdutosFiltrados(produtos);
//         } else {
//             const produtosFiltrados = produtos.filter(produto =>
//                 produto.categories.categoryName === categoria
//             );
//             setProdutosFiltrados(produtosFiltrados);
//         }
//     };

//     return (
//         <Fonts font={
//             <View style={styles.container}>
//                 <Text style={styles.titulo}>Explorar</Text>
//                 <Text style={styles.subtitulo}>Com o que deseja economizar hoje?</Text>
//                 <Search />

//                 <Categorias onSelectCategory={filtrarPorCategoria} />

//                 <FlatList
//                     data={produtosFiltrados}
//                     keyExtractor={(item, index) => index.toString()}
//                     numColumns={2}
//                     renderItem={({ item }) => (
//                         <View style={styles.cardContainer}>
//                             <CardProduto data={item} />
//                         </View>
//                     )}
//                 />

//             </View>
//         } />
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Colors.Fundo,
//         paddingTop: 50,
//         paddingHorizontal: 25,
//         marginTop: 15
//     },
//     titulo: {
//         color: Colors.Preto,
//         fontSize: 35,
//         fontFamily: 'Montserrat_600SemiBold'
//     },
//     subtitulo: {
//         fontSize: 17,
//         fontFamily: 'Montserrat_400Regular'
//     },
//     cardContainer: {
//         flex: 1,
//     },
// });
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Colors } from '../../assets/colors/colors';
import CardProduto from '../components/List/CardProduto';
import Search from '../components/Search';
import apiStore from '../service/apiStore';
import Categorias from '../components/Categorias';
import Fonts from '../../assets/fonts/fonts';


const { width } = Dimensions.get('window');

export default function Explorar() {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    useEffect(() => {
        // Simulação de busca de produtos por ID (substitua pelo seu método real)
        const fetchProdutos = async () => {
            try {
                const response = await apiStore.get('/products');
                setProdutos(response.data);
                setProdutosFiltrados(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error.message);
            }
        };

        fetchProdutos();
    }, []);

    const filtrarPorCategoria = (categoria) => {
        if (categoria === 'Todas') {
            setProdutosFiltrados(produtos);
        } else {
            const produtosFiltrados = produtos.filter(produto =>
                produto.category.categoryName === categoria
            );
            setProdutosFiltrados(produtosFiltrados);
        }
    };

   

    return (
        <Fonts font={
            <View style={styles.container}>
                <Text style={styles.titulo}>Explorar</Text>
                <Text style={styles.subtitulo}>Com o que deseja economizar hoje?</Text>
                <Search />

                <Categorias onSelectCategory={filtrarPorCategoria} />

                <FlatList
                    data={produtosFiltrados}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <CardProduto data={item} />
                        </View>
                    )}
                />

            </View>
        } />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Fundo,
        paddingTop: 50,
        paddingHorizontal: 25,
        marginTop: 15
    },
    titulo: {
        color: Colors.Preto,
        fontSize: 35,
        fontFamily: 'Montserrat_600SemiBold'
    },
    subtitulo: {
        fontSize: 17,
        fontFamily: 'Montserrat_400Regular'
    },
    cardContainer: {
        flex: 1,
    },
});

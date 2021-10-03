import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
import Boxproducts from "../../Components/Boxproducts";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Footer from '../../Components/Footer'
import Modal from '../../Components/Modal'
import Slider from "../../Components/Slider";
import Horizontalscroll from "../../Components/Horizontalscroll";




const App = ({ navigation }) => {

    const listing = [

        {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        }, {
            title: 'NikeLabe 21M NYC,NikeLabe 21M NYC',
            id: 'NikeLabe 21M NYC',
            link: "Lifestyle"
        },

    ];
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("right");

    const navigationView = () => (
        <View style={[styles.navigationContainer]}>
            <ScrollView>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mens')}>

                    <Text style={{ marginTop: 70, marginLeft: 30, fontSize: 20, fontWeight: "bold" }}>Men</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Womens')}>

                    <Text style={styles.paragraph}>Women</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Kids')}>

                    <Text style={styles.paragraph}>Kids</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mens')}>

                    <Text style={styles.paragraph}>Customise</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Categories')}>

                    <Text style={styles.paragraph}>Sale</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mens')}>

                    <Text style={styles.paragraph}>SNKRS</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require("../../Assets/jorden.png")}
                        style={{ height: 28, width: 20, marginLeft: 45, marginTop: 45 }} />
                    <Text style={{ marginTop: -25, marginLeft: 80, fontSize: 18, fontWeight: "bold" }}>Jordan</Text>

                </TouchableOpacity>


                <Text style={{ fontSize: 18, padding: 30, marginTop: 60 }}>Become a Nike Member for the best products, inspiration and stories in sports.</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, marginTop: -57, marginLeft: 95, fontWeight: "bold" }}>Learn more</Text>
                </TouchableOpacity>


                <View style={{ flexDirection: "row", marginTop: -20 }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}>

                        <Text style={{
                            fontSize: 18, marginLeft: 30, borderWidth: 0.5,
                            height: 43, width: 110, borderRadius: 50, backgroundColor: "#000",
                            color: "#fff", marginTop: 10, paddingTop: 7, paddingLeft: 19
                        }}>Sign In</Text>
                    </TouchableOpacity>


                    {/* <Modal navigation={navigation} /> */}

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>

                        <Text style={{
                            fontSize: 18, marginLeft: 25, borderWidth: 0.5,
                            height: 43, width: 100, borderRadius: 30, marginTop: 10,
                            color: "#000", paddingTop: 7, paddingLeft: 18
                        }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../../Assets/bag.png")}
                        style={{ height: 28, width: 20, marginLeft: 30, marginTop: 70 }} />

                    <Text style={{
                        marginTop: -20, marginLeft: 60, fontSize: 15,
                        fontWeight: "bold"
                    }}>Bag</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../../Assets/order.png")}
                        style={{ height: 28, width: 25, marginLeft: 30, marginTop: 30 }} />

                    <Text style={{
                        marginTop: -23, marginLeft: 60, fontSize: 15,
                        fontWeight: "bold"
                    }}>Order</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../../Assets/help.png")}
                        style={{ height: 28, width: 23, marginLeft: 30, marginTop: 30 }} />

                    <Text style={{
                        marginTop: -23, marginLeft: 60, fontSize: 15,
                        fontWeight: "bold", marginBottom: 150
                    }}>Help</Text>
                </TouchableOpacity>

            </ScrollView>


        </View>
    );

    return (

        <DrawerLayoutAndroid
            style={{ backgroundColor: "#fff" }}
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}
        >
            <View style={{
                flexDirection: "row",
                padding: 16,
                marginTop: 15
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Categories')}>

                    <Image source={require("../../Assets/nike.png")}
                        style={{
                            height: 40, width: 60, marginLeft: 20,
                            resizeMode: "contain"
                        }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../../Assets/bag.png")}
                        style={{ height: 30, width: 23, marginLeft: 150, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Searchscreen")}>

                    <Image source={require("../../Assets/search.png.png")}
                        style={{ height: 30, width: 25, marginLeft: 28, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => drawer.current.openDrawer()}>
                    <Image source={require("../../Assets/menu.png")}
                        style={{ height: 40, width: 30, marginLeft: 28 }} />
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 150, }}>
                <Text style={{ marginLeft: 30, fontSize: 27, fontWeight: "bold" }}>Find a Nike Store</Text>

                <View>
                    <TextInput
                        style={{
                            marginLeft: 30, borderWidth: 0.3, borderColor: "gray", width: "78%",
                            paddingLeft: 55, height: 47, marginTop: 15,
                        }}
                        placeholder='Email adderess'
                        placeholderTextColor="gray"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Searchscreen")}>
                        <Image source={require("../../Assets/search.png.png")}
                            style={{ height: 25, width: 25, marginLeft: 38, marginTop: -35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Searchscreen")}>
                        <Image source={require("../../Assets/send.png")}
                            style={{ height: 25, width: 25, marginLeft: 312, marginTop: -35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Searchscreen")}>
                        <Image source={require("../../Assets/filter2.png")}
                            style={{ height: 40, width: 45, marginLeft: 356, marginTop: -42 }} />
                    </TouchableOpacity>
                </View>

            </View>


            <TouchableOpacity>
                <Text style={{ alignSelf: "center", marginTop: 34, fontSize: 20 }}>List</Text>
            </TouchableOpacity>
            <View>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={listing}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link)}
                            style={{
                                marginTop: 15, height: 50, width: "100%",
                                backgroundColor: '#fff',
                            }}>


                            <Text style={{ fontWeight: "bold", marginLeft: 40, fontSize: 17 }}>{item.id}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>






            {/* <Footer /> */}
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: "row",
        padding: 16,
        marginTop: 15
    },
    navigationContainer: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },

    paragraph: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 30, fontSize: 20,
        fontWeight: "bold"
    }
});

export default App;


// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

// export default HomeScreen;
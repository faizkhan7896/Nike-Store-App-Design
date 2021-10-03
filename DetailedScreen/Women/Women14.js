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
// import Modal from '../Components/Modal'
// import Slider from "../Components/Slider";
import Horizontalscroll from "../../Components/Horizontalscroll";
// import SecondHorizontalscroll from "../Components/SecondHorizontalscroll";
import SizeGuid from "../../Components/SizeGuid";




const App = ({ navigation }) => {


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
            <ScrollView>
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

                <View style={{ marginTop: 50, }}>
                    <Text style={{ marginLeft: 30, fontSize: 17, fontWeight: "bold" }}>Men's Running Shoe</Text>
                    <Text style={{ marginLeft: 330, fontSize: 15, fontWeight: "bold", marginTop: -20 }}>$ 600</Text>
                    <Text style={{ marginLeft: 30, fontSize: 21, fontWeight: "bold", marginTop: 20 }}>Nike Air Zoom Tempo</Text>
                    <Text style={{ marginLeft: 310, fontSize: 12, marginTop: -20 }}>Incl.of taxes</Text>
                    <Text style={{ marginLeft: 310, fontSize: 12, marginTop: 5 }}>and duties</Text>

                    <Text style={{ marginLeft: 30, fontSize: 21, fontWeight: "bold", marginTop: -20 }}>NEXT%</Text>

                </View>
                <Image style={{
                    height: 450, width: "90%", marginTop: 50, marginLeft: 22
                }}
                    source={require("../../Assets/Womensclothing/Completeproduct/14/1.png")} />
                <View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Arrivalsclothes')}>

                        <Text style={{
                            fontSize: 15, marginLeft: 45, backgroundColor: "#fff",
                            height: 43, width: 130, borderRadius: 30, marginTop: -380,
                            color: "#000", paddingTop: 10, paddingLeft: 15, fontWeight: "bold",
                        }}>Highly Rated</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 30, fontSize: 21, fontWeight: "bold", marginTop: 20 }}>Select Size</Text>
                    <Text style={{ marginLeft: 310, fontSize: 15, marginTop: -23 }}>Size Guid</Text>
                    <SizeGuid />



                </View>
                <Text style={{ marginTop: 60, marginLeft: 30, fontSize: 15 }}> A futuristic spin on OG Nike running shoes and </Text>
                <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}> Tinker Hatfield's most iconic designs, the Nike </Text>
                <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>Adapt Auto Max features Nike FitAdapt technology </Text>
                <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>for a modern look and revolutionary feel. Set and</Text>
                <Text style={{ marginTop: 65, marginLeft: 30, fontSize: 15 }}>:Shown: Black/Fireberry/Electric Green/Black</Text>

                <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>:Style: CZ6804-001</Text>
                <Text style={{ marginTop: 15, width: 150, marginLeft: 30, fontSize: 15, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "black" }}>View Product Detail</Text>

                <View style={{ height: 70, width: "90%", marginTop: 60, marginLeft: 25, padding: 22, borderTopWidth: 0.5, borderColor: "gray", }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }} >Size & Fit</Text>
                    <Image style={{
                        height: 30, width: "10%", marginTop: -27, marginLeft: 310
                    }}
                        source={require("../../Assets/down.png")} />
                </View>

                <View style={{ height: 70, width: "90%", marginLeft: 25, padding: 22, borderTopWidth: 0.5, borderColor: "gray", }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }} >Free Delivery & Return</Text>
                    <Image style={{
                        height: 30, width: "10%", marginTop: -27, marginLeft: 310
                    }}
                        source={require("../../Assets/down.png")} />
                </View>
                <View style={{ height: 70, width: "90%", marginLeft: 25, padding: 22, borderTopWidth: 0.5, borderColor: "gray", }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }} >Review (89)</Text>
                    <Image style={{
                        height: 30, width: "10%", marginTop: -27, marginLeft: 310
                    }}
                        source={require("../../Assets/down.png")} />
                </View>
                <View style={{ height: 70, width: "90%", marginLeft: 25, padding: 22, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "gray", }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }} >Menufactoring & Import Info</Text>
                    <Image style={{
                        height: 30, width: "10%", marginTop: -27, marginLeft: 310
                    }}
                        source={require("../../Assets/down.png")} />
                </View>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 150, alignSelf: "center" }} >Exploring the Nike Air Zoom Tempo </Text>
                    <Text style={{ fontSize: 17, marginTop: 10, alignSelf: "center" }} >NEXT%</Text>

                    <Image style={{
                        height: 450, width: "90%", marginTop: -27, marginLeft: 25, marginTop: 70
                    }}
                        source={require("../../Assets/Womensclothing/Completeproduct/14/2.png")} />
                    <Text style={{ fontSize: 27, fontWeight: "bold", alignSelf: "center", marginTop: 50, }} >Zoom Forward</Text>
                    <Text style={{ marginTop: 30, marginLeft: 30, fontSize: 15 }}> A futuristic spin on OG Nike running shoes and </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}> Tinker Hatfield's most iconic designs, the Nike </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>Adapt Auto Max features Nike FitAdapt technology </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>for a modern look and revolutionary feel. Set and</Text>
                </View>

                <View>
                    <Image style={{
                        height: 450, width: "90%", marginTop: -27, marginLeft: 25, marginTop: 70
                    }}
                        source={require("../../Assets/Womensclothing/Completeproduct/14/3.png")} />
                    <Text style={{ fontSize: 27, fontWeight: "bold", alignSelf: "center", marginTop: 50, }} >Responsive Hell</Text>
                    <Text style={{ marginTop: 30, marginLeft: 30, fontSize: 15 }}> A futuristic spin on OG Nike running shoes and </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}> Tinker Hatfield's most iconic designs, the Nike </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>Adapt Auto Max features Nike FitAdapt technology </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>for a modern look and revolutionary feel. Set and</Text>
                </View>

                <View>
                    <Image style={{
                        height: 450, width: "90%", marginTop: -27, marginLeft: 25, marginTop: 70
                    }}
                        source={require("../../Assets/Womensclothing/Completeproduct/14/4.png")} />
                    <Text style={{ fontSize: 27, fontWeight: "bold", alignSelf: "center", marginTop: 50, }} >Runner-Informed</Text>
                    <Text style={{ fontSize: 27, fontWeight: "bold", alignSelf: "center", marginTop: 10, }} >Traction</Text>
                    <Text style={{ marginTop: 30, marginLeft: 30, fontSize: 15 }}> A futuristic spin on OG Nike running shoes and </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}> Tinker Hatfield's most iconic designs, the Nike </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>Adapt Auto Max features Nike FitAdapt technology </Text>
                    <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 15 }}>for a modern look and revolutionary feel. Set and</Text>
                </View>



                <Horizontalscroll navigation={navigation} />

                {/* <SecondHorizontalscroll navigation={navigation} /> */}

                <Footer navigation={navigation} />
            </ScrollView>














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
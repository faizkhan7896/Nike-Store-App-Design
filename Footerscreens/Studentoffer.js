import React, { useRef, useState } from "react";
import {
    Image, Button, FlatList, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
// import Boxproducts from "../Components/Boxproducts";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Footer from '../Components/Footer'
import Modal from '../Components/Modal'
import Slider from "../Components/Slider";
import Horizontalscroll from "../Components/Horizontalscroll";




const Categories = ({ navigation }) => {

    const listing = [

        {
            id: 'Lifestyle',
            link: "Lifestyle"
        },
        {
            id: 'Jorden',
            link: "Jorden"
        },
        {
            id: 'Running',
            link: "Running"
        },
        {
            id: 'Basketball',
            link: "Basketball"
        },

        {
            id: 'Football',
            link: "Football"
        },
        {
            id: 'Training & Gym',
            link: "Gym"
        },
        {
            id: 'Skateboard',
            link: "Sketboard"
        },
        {
            id: 'Baseball',
            link: "Baseball"
        },
        {
            id: 'Golf',
            link: "Golf"
        },
        {
            id: 'Tennis',
            link: "Tennis"
        },
        {
            id: 'Athletics',
            link: "Athletics"
        },
        {
            id: 'Walking',
            link: "Walking"
        },
    ];
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("right");

    const navigationView = () => (
        <View style={[styles.navigationContainer]}>
            <ScrollView>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mensclothes')}>

                    <Text style={{ marginTop: 70, marginLeft: 30, fontSize: 20, fontWeight: "bold" }}>Men</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Womensclothes')}>

                    <Text style={styles.paragraph}>Women</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Kidsclothes')}>

                    <Text style={styles.paragraph}>Kids</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mens')}>

                    <Text style={styles.paragraph}>Customise</Text>
                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Categories')}>

                    <Text style={styles.paragraph}>Sale</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Mens')}>

                    <Text style={styles.paragraph}>SNKRS</Text>

                    <Image style={{
                        height: 15, width: "180%", resizeMode: "contain", marginTop: -17
                    }}
                        source={require("../Assets/next.png")} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require("../Assets/jorden.png")}
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

                    <Image source={require("../Assets/bag.png")}
                        style={{ height: 28, width: 20, marginLeft: 30, marginTop: 70 }} />

                    <Text style={{
                        marginTop: -20, marginLeft: 60, fontSize: 15,
                        fontWeight: "bold"
                    }}>Bag</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../Assets/order.png")}
                        style={{ height: 28, width: 25, marginLeft: 30, marginTop: 30 }} />

                    <Text style={{
                        marginTop: -23, marginLeft: 60, fontSize: 15,
                        fontWeight: "bold"
                    }}>Order</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../Assets/help.png")}
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

                    <Image source={require("../Assets/nike.png")}
                        style={{
                            height: 40, width: 60, marginLeft: 20,
                            resizeMode: "contain"
                        }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BagScreen')}>

                    <Image source={require("../Assets/bag.png")}
                        style={{ height: 30, width: 23, marginLeft: 150, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Searchscreen")}>

                    <Image source={require("../Assets/search.png.png")}
                        style={{ height: 30, width: 25, marginLeft: 28, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => drawer.current.openDrawer()}>
                    <Image source={require("../Assets/menu.png")}
                        style={{ height: 40, width: 30, marginLeft: 28 }} />
                </TouchableOpacity>

            </View>
            <ScrollView>


                <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}>GET HELP</Text>
                <View>
                    <TextInput
                        style={{
                            marginLeft: 30, borderWidth: 0.3, borderColor: "gray", width: "90%",
                            paddingLeft: 25, height: 47, marginTop: 25, marginLeft: 20
                        }}
                        placeholder='What can ve help we you with'
                        placeholderTextColor="gray"
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Searchscreen")}>

                        <Image source={require("../Assets/search.png.png")}
                            style={{ height: 25, width: 25, marginLeft: 360, marginTop: -35 }} />
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 40, marginTop: 100 }}>DOES NIKE OFFER A STUDENT DISCOUNT? </Text>
                <Text style={{ marginLeft: 40, marginTop: 15, marginRight: 40 }}>We’re currently experiencing a high volume of contacts and wait times may be longer than usual.</Text>
                <Text style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>

                    <Text style={{
                        fontSize: 15, marginLeft: 65, borderWidth: 0.5,
                        height: 38, width: 200, borderRadius: 30, marginTop: 30,
                        color: "#fff", paddingTop: 7, paddingLeft: 18, backgroundColor: "#000",
                    }}>Get your Promocode</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 40, marginTop: 50 }}>FAQs </Text>

                <Text style={{ fontSize: 15, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>Can I use the discount more than once?</Text>
                <Text style={{ marginTop: 5, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>

                <Text style={{ fontSize: 17, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>Can I use the student discount st Nike store?</Text>
                <Text style={{ marginTop: 5, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>

                <Text style={{ fontSize: 17, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>What is eligible?</Text>
                <Text style={{ marginTop: 5, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>

                <Text style={{ fontSize: 17, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>What if my university isn't listed?</Text>
                <Text style={{ marginTop: 10, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>


                <Text style={{ fontSize: 17, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>I am having trouble varifying my student status,What should I do?</Text>
                <Text style={{ marginTop: 5, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>

                <Text style={{ fontSize: 17, marginLeft: 40, fontWeight: "bold", marginTop: 20 }}>What is Sheer ID?</Text>
                <Text style={{ marginTop: 5, marginLeft: 40, marginRight: 40 }}> Please also note that some deliveries are taking a little longer than usual. To check the status of your order, please visit nike.com/orders. Thank you for your patience.</Text>
                <Text style={{ marginBottom: 20, borderBottomWidth: 2, borderBottomColor: "gray", marginLeft: 40, marginTop: 10, fontWeight: "bold", width: 120 }}>SheerID website
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 40, marginTop: 10, color: "gray", marginBottom: 20, }}>TERMS AND CONDITIONS  </Text>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -40, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>Welcome to the NIKE community!  You are reading these Terms  </Text>
                </View>
                <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 40, marginTop: 50 }}>CONTACT US </Text>
                <Text style={{ marginTop: 10, marginLeft: 40, marginRight: 40 }}>
                    We’re currently experiencing a high volume of contacts and wait times may be longer than usual. To check the status of your order, Thank you for your patience.
                    </Text>
                <View style={{ flexDirection: "row", marginTop: 50, }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://www.nike.com/help/static/phone.png',
                        }}
                    />
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Text style={{ fontSize: 17 }}>PRODUCT & ORDER</Text>
                        <Text style={{ fontSize: 12 }}>000 800 100 9538</Text>
                        <Text style={{ fontSize: 12 }}>24 hours a day</Text>
                        <Text style={{ fontSize: 12 }}>7 days a week</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 50, }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://www.nike.com/help/static/chat.png',
                        }}
                    />
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Text style={{ fontSize: 17 }}>PRODUCT & ORDER</Text>
                        <Text style={{ fontSize: 12 }}>Chat with us</Text>
                        <Text style={{ fontSize: 12 }}>24 hours a day</Text>
                        <Text style={{ fontSize: 12 }}>7 days a week</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 50, }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchB05zORAa2lqwixxumWvedypNLulVtV1LiVRQQgvR1Ol0Kflv_B3cyYbsG3i-rgt36w&usqp=CAU',
                        }}
                    />
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Text style={{ fontSize: 17 }}>PRODUCT & ORDER</Text>
                        <Text style={{ fontSize: 12 }}>Email us</Text>
                        <Text style={{ fontSize: 12 }}>we'll reply within</Text>
                        <Text style={{ fontSize: 12 }}>5 buisness days</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 50, marginBottom: 50 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://www.nike.com/help/static/store-locator.png',
                        }}
                    />
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Text style={{ fontSize: 17 }}>STORE LOCATER</Text>
                        <Text style={{ fontSize: 12 }}>Find a Nike store retail in you</Text></View>
                </View>



                <Footer navigation={navigation} />



            </ScrollView>


        </DrawerLayoutAndroid>
    );
}

export default Categories;


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
    },
    tinyLogo: {
        width: 60,
        height: 60,
        marginLeft: 50,
        marginTop: 38
    },
});
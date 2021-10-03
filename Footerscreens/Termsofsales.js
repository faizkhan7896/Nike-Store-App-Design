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


                <Text style={{ fontSize: 30, fontWeight: "bold", color: "#4f4f4f", alignSelf: "center", marginTop: 80 }}>TERMS OF SALES</Text>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>PLEASE READ THESE TERMS OF SALE CAREFULLY BEFORE ORDERING PRODUCTS ONLINE FROM THE NIKE PLATFORM. PLEASE, NOTE THAT THESE TERMS OF SALE INCLUDE THE ADDITIONAL TERMS INCORPORATED HEREIN BY REFERENCE.   PURCHASES MADE IN AUSTRALIA, CANADA, EGYPT, INDIA, INDONESIA, ISRAEL, MALAYSIA, MEXICO, MOROCCO, NEW ZEALAND, PHILIPPINES, PUERTO RICO, RUSSIA, SAUDI ARABIA, SINGAPORE, SOUTH AFRICA, TAIWAN, THAILAND, UNITED ARAB EMIRATES, AND VIETNAM ARE GOVERNED BY DIFFERENT TERMS. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginTop: 30, marginLeft: 40, marginRight: 40 }}>If you are located in any of the countries identified below, additional country-specific terms may apply to you and are viewable at the end of these terms of sale or by clicking on the country reference link. These additional terms override the Terms below to the extent of any inconsistency. </Text>

                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 40, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>CHINA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 100, marginTop: 10, fontWeight: "bold", color: "gray", }}>COSTA RICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>KOREA</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>APPLICABILITY</Text>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You are reading these Terms of Sale (“Terms of Sale”) because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”). These Terms of Sale create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE,” “we,” “us,” or “our”) regarding orders placed for products available on the Platform.  Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. Nike may revise these Terms of Sale without notice by posting revised Terms of Sale on its Platform.  The Terms of Sale posted on the Platform at the time you place your order on the Platform will govern that purchase.  Please read these terms carefully and check that the details of your order are complete and accurate before submitting your order. If you think that there is a mistake, please contact us: privacy@nike.com. Nike’s Terms of Use and Privacy Policy are incorporated herein by this reference. </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>PLACING ORDERS ON THE PLATFORM</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>ELIGIBILITY TO ORDER</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>To place an order on the Platform, you must be of legal age in your country and a consumer - not a reseller.</Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>NO PURCHASE FOR RESALE</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>The Platform is intended solely for NIKE to sell NIKE products direct to end consumers, and therefore purchase of products for resale is strictly prohibited. Purchase for resale means the purchase of NIKE product by someone who resells, or intends to resell, the NIKE product to others (consumers, businesses or any third party).  If NIKE believes you are involved in purchase for resale, NIKE reserves the right to take any action against you, including, without limitation, to restrict sales to you, cancel your orders, and/or suspend or close your account.   </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>HOW TO ORDER</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You need an e-mail address to place an order, and you may need to set your browser to accept both (functional) cookies and pop-ups in order to be able to use all the functionalities of the Website, which includes designing customized items, adding items to your shopping bag and submitting your order. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>When you submit an order we will send you an email acknowledging receipt of your order.  Our acceptance of the order takes place when the Products are shipped to you - we will send you an email confirming that the Products have been shipped (“Order Confirmation”). At this point a contract, containing these Terms of Sale, comes into existence and is binding on you and us (the “Contract”). We recommend that you print or download a copy of these Terms of Sale and the relevant Order Confirmation for future reference.  If we are unable to supply you with a product, we will inform you of this in writing and will not process the order. </Text>


                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20, marginRight: 50 }}>OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>Fulfillment of all orders on the Platform is subject to availability. We explicitly reserve the right not to accept your order for any reason. We also reserve the right to cancel a Contract by written notice to you in the following situations, without being liable for any damage or costs other than repayment of any amount received from you in relation to the Contract we cancelled:</Text>


                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>the product is not available / in stock;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your billing information is not correct or not verifiable;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your bank transfer payment is not received within 12 calendar days after acceptance of your order;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe you are under the legal age in your country;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe that you are a reseller;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>there was an error in the price displayed on the Platform;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we could not deliver to the address provided by you;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>due to an Event Outside Our Control (see below); or</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>in the event of misspelling, pricing or other errors or mistakes in the Platform information.</Text>
                </View>



                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>PLEASE READ THESE TERMS OF SALE CAREFULLY BEFORE ORDERING PRODUCTS ONLINE FROM THE NIKE PLATFORM. PLEASE, NOTE THAT THESE TERMS OF SALE INCLUDE THE ADDITIONAL TERMS INCORPORATED HEREIN BY REFERENCE.   PURCHASES MADE IN AUSTRALIA, CANADA, EGYPT, INDIA, INDONESIA, ISRAEL, MALAYSIA, MEXICO, MOROCCO, NEW ZEALAND, PHILIPPINES, PUERTO RICO, RUSSIA, SAUDI ARABIA, SINGAPORE, SOUTH AFRICA, TAIWAN, THAILAND, UNITED ARAB EMIRATES, AND VIETNAM ARE GOVERNED BY DIFFERENT TERMS. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginTop: 30, marginLeft: 40, marginRight: 40 }}>If you are located in any of the countries identified below, additional country-specific terms may apply to you and are viewable at the end of these terms of sale or by clicking on the country reference link. These additional terms override the Terms below to the extent of any inconsistency. </Text>

                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 40, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>CHINA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 100, marginTop: 10, fontWeight: "bold", color: "gray", }}>COSTA RICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>KOREA</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>APPLICABILITY</Text>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You are reading these Terms of Sale (“Terms of Sale”) because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”). These Terms of Sale create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE,” “we,” “us,” or “our”) regarding orders placed for products available on the Platform.  Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. Nike may revise these Terms of Sale without notice by posting revised Terms of Sale on its Platform.  The Terms of Sale posted on the Platform at the time you place your order on the Platform will govern that purchase.  Please read these terms carefully and check that the details of your order are complete and accurate before submitting your order. If you think that there is a mistake, please contact us: privacy@nike.com. Nike’s Terms of Use and Privacy Policy are incorporated herein by this reference. </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>PLACING ORDERS ON THE PLATFORM</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>ELIGIBILITY TO ORDER</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>To place an order on the Platform, you must be of legal age in your country and a consumer - not a reseller.</Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>NO PURCHASE FOR RESALE</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>The Platform is intended solely for NIKE to sell NIKE products direct to end consumers, and therefore purchase of products for resale is strictly prohibited. Purchase for resale means the purchase of NIKE product by someone who resells, or intends to resell, the NIKE product to others (consumers, businesses or any third party).  If NIKE believes you are involved in purchase for resale, NIKE reserves the right to take any action against you, including, without limitation, to restrict sales to you, cancel your orders, and/or suspend or close your account.   </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>HOW TO ORDER</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You need an e-mail address to place an order, and you may need to set your browser to accept both (functional) cookies and pop-ups in order to be able to use all the functionalities of the Website, which includes designing customized items, adding items to your shopping bag and submitting your order. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>When you submit an order we will send you an email acknowledging receipt of your order.  Our acceptance of the order takes place when the Products are shipped to you - we will send you an email confirming that the Products have been shipped (“Order Confirmation”). At this point a contract, containing these Terms of Sale, comes into existence and is binding on you and us (the “Contract”). We recommend that you print or download a copy of these Terms of Sale and the relevant Order Confirmation for future reference.  If we are unable to supply you with a product, we will inform you of this in writing and will not process the order. </Text>


                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20, marginRight: 50 }}>OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>Fulfillment of all orders on the Platform is subject to availability. We explicitly reserve the right not to accept your order for any reason. We also reserve the right to cancel a Contract by written notice to you in the following situations, without being liable for any damage or costs other than repayment of any amount received from you in relation to the Contract we cancelled:</Text>


                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>the product is not available / in stock;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your billing information is not correct or not verifiable;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your bank transfer payment is not received within 12 calendar days after acceptance of your order;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe you are under the legal age in your country;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe that you are a reseller;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>there was an error in the price displayed on the Platform;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we could not deliver to the address provided by you;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>due to an Event Outside Our Control (see below); or</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>in the event of misspelling, pricing or other errors or mistakes in the Platform information.</Text>
                </View>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>PLEASE READ THESE TERMS OF SALE CAREFULLY BEFORE ORDERING PRODUCTS ONLINE FROM THE NIKE PLATFORM. PLEASE, NOTE THAT THESE TERMS OF SALE INCLUDE THE ADDITIONAL TERMS INCORPORATED HEREIN BY REFERENCE.   PURCHASES MADE IN AUSTRALIA, CANADA, EGYPT, INDIA, INDONESIA, ISRAEL, MALAYSIA, MEXICO, MOROCCO, NEW ZEALAND, PHILIPPINES, PUERTO RICO, RUSSIA, SAUDI ARABIA, SINGAPORE, SOUTH AFRICA, TAIWAN, THAILAND, UNITED ARAB EMIRATES, AND VIETNAM ARE GOVERNED BY DIFFERENT TERMS. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginTop: 30, marginLeft: 40, marginRight: 40 }}>If you are located in any of the countries identified below, additional country-specific terms may apply to you and are viewable at the end of these terms of sale or by clicking on the country reference link. These additional terms override the Terms below to the extent of any inconsistency. </Text>

                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 40, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>CHINA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 100, marginTop: 10, fontWeight: "bold", color: "gray", }}>COSTA RICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>KOREA</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>APPLICABILITY</Text>


                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You are reading these Terms of Sale (“Terms of Sale”) because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”). These Terms of Sale create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE,” “we,” “us,” or “our”) regarding orders placed for products available on the Platform.  Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. Nike may revise these Terms of Sale without notice by posting revised Terms of Sale on its Platform.  The Terms of Sale posted on the Platform at the time you place your order on the Platform will govern that purchase.  Please read these terms carefully and check that the details of your order are complete and accurate before submitting your order. If you think that there is a mistake, please contact us: privacy@nike.com. Nike’s Terms of Use and Privacy Policy are incorporated herein by this reference. </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4f4f4f", marginLeft: 40, marginTop: 30 }}>PLACING ORDERS ON THE PLATFORM</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>ELIGIBILITY TO ORDER</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>To place an order on the Platform, you must be of legal age in your country and a consumer - not a reseller.</Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>NO PURCHASE FOR RESALE</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>The Platform is intended solely for NIKE to sell NIKE products direct to end consumers, and therefore purchase of products for resale is strictly prohibited. Purchase for resale means the purchase of NIKE product by someone who resells, or intends to resell, the NIKE product to others (consumers, businesses or any third party).  If NIKE believes you are involved in purchase for resale, NIKE reserves the right to take any action against you, including, without limitation, to restrict sales to you, cancel your orders, and/or suspend or close your account.   </Text>

                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20 }}>HOW TO ORDER</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>You need an e-mail address to place an order, and you may need to set your browser to accept both (functional) cookies and pop-ups in order to be able to use all the functionalities of the Website, which includes designing customized items, adding items to your shopping bag and submitting your order. </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>When you submit an order we will send you an email acknowledging receipt of your order.  Our acceptance of the order takes place when the Products are shipped to you - we will send you an email confirming that the Products have been shipped (“Order Confirmation”). At this point a contract, containing these Terms of Sale, comes into existence and is binding on you and us (the “Contract”). We recommend that you print or download a copy of these Terms of Sale and the relevant Order Confirmation for future reference.  If we are unable to supply you with a product, we will inform you of this in writing and will not process the order. </Text>


                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 20, marginRight: 50 }}>OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray", marginLeft: 40, marginTop: 15, marginRight: 40 }}>Fulfillment of all orders on the Platform is subject to availability. We explicitly reserve the right not to accept your order for any reason. We also reserve the right to cancel a Contract by written notice to you in the following situations, without being liable for any damage or costs other than repayment of any amount received from you in relation to the Contract we cancelled:</Text>


                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>the product is not available / in stock;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your billing information is not correct or not verifiable;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>your bank transfer payment is not received within 12 calendar days after acceptance of your order;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe you are under the legal age in your country;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we believe that you are a reseller;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>there was an error in the price displayed on the Platform;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>we could not deliver to the address provided by you;</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>due to an Event Outside Our Control (see below); or</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 50, marginTop: -35, marginLeft: 40, }}>.</Text>
                    <Text style={{ fontSize: 17, marginTop: 8, marginLeft: -28, marginLeft: 10, marginRight: 80 }}>in the event of misspelling, pricing or other errors or mistakes in the Platform information.</Text>
                </View>


                {/* <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 40, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>CHINA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 100, marginTop: 10, fontWeight: "bold", color: "gray", }}>COSTA RICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, marginLeft: 5, borderBottomWidth: 0.5, height: 23, width: 55, marginTop: 10, fontWeight: "bold", color: "gray", }}>KOREA</Text>
                    </TouchableOpacity>

                </View> */}







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
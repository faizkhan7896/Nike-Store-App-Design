import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Gethelp from '../Footerscreens/Gethelp'
import Guides from '../Footerscreens/Guides'
import Aboutnike from '../Footerscreens/Aboutnike'


function Footer({ navigation }) {
    return (
        <View>
            <View style={{
                height: 200, width: "100%", backgroundColor: "black",
                borderBottomWidth: 0.5, borderBottomColor: "#5c5c5c"
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        FIND A STORE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}>

                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        BECOME A MEMBER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        SIGN UP FOR EMAIL</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('Studentoffer')}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        STUDENT DISCOUNT</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('Sendfeedback')}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        SEND US FEEDBACK</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 200, width: "100%", backgroundColor: "black", }}>

                <Gethelp />
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}>


                    <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        GET HELP</Text>
                </TouchableOpacity> */}

                <MaterialIcons
                    style={{ marginLeft: 370, marginTop: -25 }}
                    name="plus" color="#FFF" size={25} />
                <Aboutnike />

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}>


                    <Text style={{ marginTop: 50, marginLeft: 20, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                        ABOUT NIKE</Text>
                </TouchableOpacity> */}
                <MaterialIcons
                    style={{ marginLeft: 370, marginTop: -25 }}
                    name="plus" color="#FFF" size={25} />



                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Location')}>


                        <Entypo
                            style={{ marginLeft: 20, marginTop: 10 }}
                            name="twitter-with-circle" color="gray" size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Location')}>


                        <Entypo
                            style={{ marginLeft: 20, marginTop: 10 }}
                            name="facebook-with-circle" color="gray" size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Location')}>



                        <Entypo
                            style={{ marginLeft: 20, marginTop: 10 }}
                            name="youtube-with-circle" color="gray" size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Location')}>



                        <Entypo
                            style={{ marginLeft: 20, marginTop: 10 }}
                            name="instagram-with-circle" color="gray" size={35} />
                    </TouchableOpacity>

                </View>


            </View>
            <View style={{ height: 370, width: "100%", backgroundColor: "black", }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}>


                    <Ionicons
                        style={{ marginLeft: 10, }}
                        name="location" color="#FFF" size={17} />
                </TouchableOpacity>



                <Text style={{ marginLeft: 40, marginTop: -15, fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                    India</Text>


                <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}>


                    <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 10, color: "gray" }}>
                        2021,Nike,all Right Reserved</Text>
                </TouchableOpacity>

                <Guides />


                <TouchableOpacity
                    onPress={() => navigation.navigate('Termsofsales')}>



                    <Text style={{ marginLeft: 20, fontSize: 10, color: "gray" }}>
                        Terms of Sales</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('TERMSUSES')}>


                    <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 10, color: "gray" }}>
                        Terms of Use</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Privacypolicy')}>


                    <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 10, color: "gray" }}>
                        Nike Privacy policy</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}



export default Footer;
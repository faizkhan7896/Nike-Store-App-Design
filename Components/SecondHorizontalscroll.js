import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, ScrollView, FlatList, TextInput, Image, Text, StyleSheet, View, TouchableOpacity, Touchable } from "react-native";
import Header from './Header'

const Horizontalscroll = ({ navigation }) => {

    const listing = [
        {
            id: '5 Colors Nike Air Force  ',
            img: require("../Assets/shoes/01.png"),
            link: "Shoes"
        },

        {
            id: '5 Colors Nike Air Presto ',
            img: require("../Assets/shoes/07.png"),
            link: "Shoes"
        },
        {
            id: '5 Colors Nike Air Force Presto',
            img: require("../Assets/shoes/02.png"),
            link: "Shoes"
        },
        {
            id: '5 Colors Nike  Force ',
            img: require("../Assets/shoes/03.png"),
            link: "Shoes"
        },
        {
            id: '5 Colors Nike Air  ',
            img: require("../Assets/shoes/04.png"),
            link: "Shoes"
        },

        {
            id: '5 Colors Nike Air Presto Force ',
            img: require("../Assets/shoes/06.png"),
            link: "Shoes"
        },
    ];






    return (


        <ScrollView style={{ flex: 1, backgroundColor: "#e0e0e0cf" }}>

            <View>
                <View style={{ backgroundColor: "#fff", height: 100, }}>
                    <Text style={{ marginLeft: 28, marginTop: 45, color: "black", fontSize: 17, fontWeight: "bold" }}>
                        YOU MIGHT ALSO LIKE</Text>
                </View>
                <FlatList
                    style={{ backgroundColor: "white", height: 470, }}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    data={listing}
                    renderItem={({ index, item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.link)}
                            style={{
                                marginTop: 25, marginBottom: 10, height: 410, width: 300,
                                backgroundColor: '#fff', alignItems: "center", justifyContent: "center",
                                marginLeft: 10,
                            }}>

                            <Image style={{
                                height: "80%", width: "100%", marginTop: -40
                            }}
                                source={item.img} />
                            <Text style={{ marginTop: 20 }}>{item.id}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>




        </ScrollView>


    );
};


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",


    },
    navigationContainer: {
        backgroundColor: "#fff"
    },
    Hellow: {
        alignSelf: "center",
        height: 70,
        fontSize: 25,
        marginTop: 15,


    },

});

export default Horizontalscroll;
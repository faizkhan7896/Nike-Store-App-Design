import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function SizeGuid({ }) {
    return (
        <View>
            <View style={{
                backgroundColor: "white", flexDirection: "row", marginTop: 40, flex: 1, alignSelf: "center",
                width: "100%", marginLeft: 100
            }}>
                <Text style={{
                    borderWidth: 0.5, borderRadius: 5, height: 40, borderColor: "gray",
                    marginTop: 20, paddingLeft: 25, paddingTop: 9, width: "25%"
                }}>US 7</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    marginTop: 20, paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 7.5</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    marginTop: 20, paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 8</Text>
            </View>

            <View style={{
                backgroundColor: "white", flexDirection: "row", marginTop: 13, flex: 1, alignSelf: "center",
                width: "100%", marginLeft: 100
            }}>
                <Text style={{
                    borderWidth: 0.5, borderRadius: 5, height: 40, borderColor: "gray",
                    paddingLeft: 25, paddingTop: 9, width: "25%"
                }}>US 8.5</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 9</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 9.5</Text>
            </View>

            <View style={{
                backgroundColor: "white", flexDirection: "row", marginTop: 13, flex: 1, alignSelf: "center",
                width: "100%", marginLeft: 100
            }}>
                <Text style={{
                    borderWidth: 0.5, borderRadius: 5, height: 40, borderColor: "gray",
                    paddingLeft: 25, paddingTop: 9, width: "25%"
                }}>US 10</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 10.5</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 11</Text>
            </View>

            <View style={{
                backgroundColor: "white", flexDirection: "row", marginTop: 13, flex: 1, alignSelf: "center",
                width: "100%", marginLeft: 100
            }}>
                <Text style={{
                    borderWidth: 0.5, borderRadius: 5, height: 40, borderColor: "gray",
                    paddingLeft: 25, paddingTop: 9, width: "25%"
                }}>US 11.5</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 12</Text>
                <Text style={{
                    marginLeft: 5, borderWidth: 0.5, borderRadius: 5, height: 40,
                    paddingLeft: 25, paddingTop: 9, width: "25%", borderColor: "gray",
                }}>US 12.5</Text>
            </View>
            <View style={{
                backgroundColor: "white", flexDirection: "row", marginTop: 13, flex: 1, alignSelf: "center",
                width: "100%", marginLeft: 100
            }}>
                <Text style={{
                    borderWidth: 0.5, borderRadius: 5, height: 40, borderColor: "gray",
                    paddingLeft: 25, paddingTop: 9, width: "25%"
                }}>US 13</Text>

            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Arrivalsclothes')}>

                <Text style={{
                    fontSize: 15, alignSelf: "center", backgroundColor: "#000",
                    height: 45, width: 280, borderRadius: 30, marginTop: 30,
                    color: "#fff", paddingTop: 10, paddingLeft: 100, fontWeight: "bold",
                }}>Add to Bag</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Arrivalsclothes')}>

                <Text style={{
                    fontSize: 15, alignSelf: "center", backgroundColor: "#cfcfcf",
                    height: 45, width: 280, borderRadius: 30, marginTop: 40,
                    color: "#000", paddingTop: 12, paddingLeft: 100, fontWeight: "bold",
                }}>Favorite</Text>
            </TouchableOpacity>








        </View>

    );
}
export default SizeGuid;
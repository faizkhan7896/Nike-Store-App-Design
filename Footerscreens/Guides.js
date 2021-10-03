import React, { useRef, useState } from "react";
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Gethelp = ({ navigation }) => {
    const [shouldshow, setshouldshow] = useState(true);
    return (
        <SafeAreaView style={{ backgroundColor: "black", }}>
            <View style={{ margin: 10 }}>



                {
                    shouldshow ? (
                        <View style={{
                            borderTopWidth: 0.5, borderRightWidth: 1.5, borderLeftWidth: 1.5,
                            borderBottomWidth: 4, borderColor: "white", marginLeft: 10, height: 170,
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 30, }}>Nike Adept</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 52, }}>  Nike Air </Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 60, }}>Nike Air Force 1</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 30, }}>Nike Air Max</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 50, }}>Nike FlyEase</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 35, }}>Nike Flyknit </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 30, }}>Nike Flyleather</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 39, }}>Nike Free</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 55, }}>Nike Joiride</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 30, }}>Nike Pagasus</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 45, }}>Nike React</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 48, }}>Nike Vaporfly</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 30, }}>Nike Zoom Fly</Text>
                                <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11, marginLeft: 42, }}>Nike ZoomX</Text>
                            </View>

                        </View>


                    ) : null
                }
                <TouchableOpacity
                    onPress={() => setshouldshow(!shouldshow)} >
                    <Text style={{ color: "gray", marginLeft: 10, marginTop: 25, fontSize: 11 }}>Guids</Text>
                </TouchableOpacity>



            </View>

        </SafeAreaView>
    );
}
export default Gethelp;

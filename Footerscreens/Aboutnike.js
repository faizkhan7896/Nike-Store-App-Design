import React, { useRef, useState } from "react";
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Gethelp = ({ navigation }) => {
    const [shouldshow, setshouldshow] = useState(true);
    return (
        <SafeAreaView style={{ backgroundColor: "black", }}>
            <View style={{ margin: 10 }}>

                <TouchableOpacity
                    onPress={() => setshouldshow(!shouldshow)}

                >
                    <Text style={{ color: "#fff", marginTop: 15, marginLeft: 10, fontSize: 12, fontWeight: "bold", }}> ABOUT NIKE</Text>

                </TouchableOpacity>

                {
                    shouldshow ? (
                        <View >
                            <Text style={{ color: "gray", marginLeft: 10, marginTop: 25, fontSize: 11 }}>
                                News
                        </Text>
                            <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11 }}>
                                Careear
                        </Text>
                            <Text style={{ color: "gray", marginLeft: 10, marginTop: 12, fontSize: 11 }}>
                                Investors
                        </Text>

                        </View>



                    ) : null
                }



            </View>

        </SafeAreaView>
    );
}
export default Gethelp;

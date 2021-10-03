
import * as React from 'react';
import Footer from './Footer'
import Header from './Header'
import Horizontalscroll from './Horizontalscroll'
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

function BagScreen({ navigation }) {
    return (
        <View>
            <ScrollView>

                <View style={{ backgroundColor: "#fff", height: 800, }}>
                    <Header navigation={navigation} />

                    <Text style={{ color: '#000', fontSize: 20, alignSelf: "center", marginTop: 50 }}>
                        Bag </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: 'gray', marginBottom: 80, marginLeft: 155 }}> 0 item </Text>
                        <Text style={{ color: '#000', marginBottom: 80 }}>| Rs 0.00</Text>
                    </View>
                    <View style={{ height: 85, backgroundColor: "#f2f2f2", width: "93%", marginLeft: 15 }}>

                        <Text style={{ marginLeft: 18, marginTop: 15, color: "black", fontSize: 14, }}>Please be aware that we are curruntly experiencing local coustomer clearance
                        delays which will affect the delivery date of your day.</Text>
                    </View>
                    <Text style={{ marginLeft: 28, marginTop: 45, color: "black", fontSize: 17, }}>
                        Therw are no item in your Bag</Text>


                    <Text style={{ marginLeft: 28, marginTop: 45, color: "black", fontSize: 17, fontWeight: "bold" }}>
                        Summary</Text>


                    <Text style={{ marginLeft: 28, marginTop: 25, color: "black", fontSize: 14, }}>
                        Subtotal</Text>


                    <Text style={{ marginLeft: 330, color: "gray", fontSize: 14, marginTop: -25, }}>
                        Rs 0.00 </Text>
                    <Text style={{ marginLeft: 28, marginTop: 15, color: "black", fontSize: 14, }}>
                        Estimatin Delivery & Handeling</Text>


                    <Text style={{ marginLeft: 330, color: "gray", fontSize: 14, marginTop: -25, }}>
                        Rs 0.00 </Text>
                    <Text style={{ marginLeft: 28, marginTop: 40, color: "black", fontSize: 14, fontWeight: "bold" }}>
                        Total</Text>


                    <Text style={{ marginLeft: 330, color: "black", fontSize: 14, marginTop: -25, }}>
                        Rs 0.00 </Text>


                    <Text style={{ marginLeft: 28, marginTop: 45, color: "black", fontSize: 17, fontWeight: "bold" }}>
                        Favorites</Text>
                    <Text style={{
                        marginLeft: 28, color: "black", fontSize: 15, marginTop: 15,

                    }}>
                        Want to view your favorites? Join us or Sign-in </Text>
                </View>

                <Horizontalscroll navigation={navigation} />
                <Footer navigation={navigation} />


                {/* </View> */}
            </ScrollView>
        </View>


    );
}
export default BagScreen;
import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
// import Modal from "react-native-modal";
import SignIn from '../Screens/SignIn'

function ModalTester({ navigation }) {



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

            <View style={{ backgroundColor: "#cfcfcf", width: "100%", height: "100%" }}>
                <View style={{
                    backgroundColor: "#fff", marginTop: 230, padding: 40, borderRadius: 10, flex: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25,
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack('HomeScreen')}>
                        <Image style={{
                            height: 20, width: 20, marginTop: 20, marginLeft: 320
                        }}
                            source={require("../Assets/cross.png")} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 27, fontWeight: "bold", marginTop: 40 }}>Send us Feedback</Text>
                    <Text style={{ fontSize: 15, marginTop: 40 }}>First, what would you like to tell us about?</Text>
                    <TextInput
                        style={{
                            borderWidth: 1, borderColor: "gray", width: "107%",
                            paddingLeft: 15, height: 45, marginTop: 15, borderRadius: 5
                        }}
                        placeholder='Select a Option'
                        placeholderTextColor="black"
                    />
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 315,
                            marginTop: -36
                        }}
                        source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAADw8PAoKCj09PTv7+8lJSWTk5OQkJArKyuMjIyZmZmSkpKWlpYhISGcnJyFhYXGxsY6OjpISEiJJhDdAAACyUlEQVR4nO3XbXebMAyG4TpNStY3su3//9eFOrQBS4pDzGxx7utrWx+eSkbi6QkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCZ345OXaQL/Qqn9uG4wqmLdCGsELE/n9pIxGMYvBU+tf869bXwqYvEgKWr2F9ObSBiF8IKEfvvU6s36k/Ako3aX51aOeIxhBUi9pNTqzbqewgrROxnp1asYhfmPgqc+pacWi3ivIKD7uFTP4RTK0U8Co/yeBXTCla7i2mLlogoB6xSRamZHo+oBSzR/vc6/FIf5n3xofq/7flQ8Nkz7V+KV1Gv4Oe+6LNn2ulVXBZRD/hSoYKD3bP6SEsaVW/RWgHPjVryLhp3sEqLRnu9ive++4wK7lZ59kyHUhFbbNHIaNR7hrS2PpxbtGoFB0aj5keUNtxLBSvewZHxRs2NqFewdotGO3305y3MegU/mwho3sWciPI3yqDmmJgyFrjbjWpUsJmA5tC4FdF4yTTSopHxurEb9dVJwMV30cMdHBlzUY9otGj1QZ863D809Aq21qKR0agn8Q/0O1h/VZMZQ0OqolHB5u7gyPjqTyN6a9HIWODmjaq3aCurmiz7Lp7U32tvTEwZd/E6olHBxgOaC9xPRD+bjMRY4MaIeou2OOhTxnYTIxoVbL5FoxtVNAK6qODAWOBObsfElDE0/qg/aX1MTBlDQ62gq4DmAifzMCamjNfNNgKadzHl6w6OjLmYVNDNmJgyFjj/LRplNmqrX/Q5shrVy6omy3ij+m3RyPjqjzytarIbd9HnmJgyFzhvq5rMuIve7+BIjbiVgOpd3MIdHIlz0euqJhMWuO20aJQ0qudVTTZrVN+rmmzy1b+1Fo2uFjj/q5rs+y5uaUxMXRa4baxqsq+hsc07ODovcNsa9Kn9340HBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8k/r0QS+70JmxMAAAAASUVORK5CYII=',
                        }}
                    />
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 40 }}>We are unable to respond to requests submitted here. If you need assistance with your Nike Product or Services please contact us.</Text>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 35,
                            backgroundColor: "#ededed",
                            marginTop: 60
                        }}
                    // onPress={() => navigation.navigate('Mainscreen')}
                    >
                        <Text style={{
                            color: '#7a7979', fontSize: 16,
                            fontWeight: 'bold',
                        }}> Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}
export default ModalTester



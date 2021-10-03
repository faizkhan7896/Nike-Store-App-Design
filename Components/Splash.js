import { ActivityIndicator, View, Image } from "react-native"
import { useEffect } from 'react';

import * as React from 'react';
import Home from "../Screens/Home";


const Load = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    setTimeout(() => {
        setIsLoading(false);

    }, 500);

    if (isLoading) {

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                <ActivityIndicator size="large" />
                <Image style={{
                    height: 125, width: "55%", resizeMode: "contain",
                }}
                    source={require("../Assets/nike.png")} />


            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <Home navigation={navigation} />

        </View>
    )

}
export default Load;
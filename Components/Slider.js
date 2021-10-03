import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';



const Slider = ({ navigation }) => {

    const listing = [

        {
            id: 'Best Mens Shoes',
            link: "Lifestyle"
        },
        {
            id: 'New Mens Shoes',
            link: "Jorden"
        },
        {
            id: 'Mens Black Running Shoes',
            link: "Running"
        },
        {
            id: 'Mens Crew Socks',
            link: "Basketball"
        },

        {
            id: 'Mens Jogger & Tracksuite Bottoms',
            link: "Football"
        },
        {
            id: 'Mens Cross Training Shoes',
            link: "Gym"
        },
        {
            id: 'Mens Running Cross Training Shoes',
            link: "Sketboard"
        },
        {
            id: 'Mens Baseball Low-Top Shoes ',
            link: "Baseball"
        },
        {
            id: 'Mens Sle Running Shoes',
            link: "Golf"
        },
        {
            id: 'Mens Artificial Grass F0otball Shoes',
            link: "Tennis"
        },

    ];

    return (
        <View>
            <Text style={{ marginLeft: 28, marginTop: 45, color: "black", fontSize: 17, fontWeight: "bold" }}>Related Categories</Text>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                data={listing}
                renderItem={({ index, item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.link)}
                        style={{
                            marginTop: 35, height: 35, width: 250, borderWidth: 0.5, borderColor: "gray",
                            backgroundColor: '#fff', alignItems: "center", justifyContent: "center",
                            borderRadius: 50, marginBottom: 25, marginLeft: 20
                        }}>


                        <Text style={{ fontSize: 12 }}>{item.id}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}
export default Slider;



// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TouchableHighlight,
// } from 'react-native';

// import ImageSlider from 'react-native-image-slider';

// class slid extends Component {
//     render() {
//         const images = [
//             'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5pa2UlMjBzaG9lfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
//             'https://futureworldindia.in/wp-content/uploads/2020/12/MacBook-Air_Web-Banner_Available-Now_2.jpg',
//             'https://futureworldindia.in/wp-content/uploads/2020/12/Mac-Mini_Web-Banner_Available-Now_2.jpg',
//             'https://i.pinimg.com/564x/2b/02/9a/2b029af5b328c2e585b7804c2817659f.jpg',

//             'https://cdn.shopify.com/s/files/1/0019/9534/1870/files/truewirelessmusic_lexuma_true_wireless_stereo_earbuds_theme_banner_580x.png?v=1553498735',
//             'https://placeimg.com/640/640/beer',
//         ];

//         return (
//             <View style={styles.container}>

//                 <ImageSlider
//                     autoPlayWithInterval={3000}
//                     circleLoop

//                     images={images}



//                     customSlide={({ index, item, style, width }) => (
//                         // It's important to put style here because it's got offset inside
//                         <View
//                             key={index}
//                             style={[style, styles.customSlide,]}
//                         >
//                             <Image source={{ uri: item }} style={styles.customImage} />
//                         </View>
//                     )} />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         height: 230,
//         backgroundColor: '#F5FCFF',
//     },
//     slider: { backgroundColor: '#000', height: 350 },


//     contentText: { color: '#fff' },


//     customImage: {
//         width: "100%",
//         height: 230,
//     },
// });

// export default slid;

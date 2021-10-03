
// import React, { Component } from 'react';
// import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

// function Header({ navigation }) {
//     return (
//         <View>
//             <ScrollView>
//                 <View style={{
//                     flex: 1, flexDirection: "row",
//                     padding: 16,
//                     marginTop: 15
//                 }}>

//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Categories')}>

//                         <Image source={require("../Assets/nike.png")}
//                             style={{
//                                 height: 40, width: 60, marginLeft: 20,
//                                 resizeMode: "contain"
//                             }} />
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('BagScreen')}>

//                         <Image source={require("../Assets/bag.png")}
//                             style={{ height: 28, width: 20, marginLeft: 150 }} />
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Searchscreen")}>

//                         <Image source={require("../Assets/search.png.png")}
//                             style={{ height: 25, width: 22, marginLeft: 28 }} />
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         onPress={() => alert('openDrawer')}>
//                         <Image source={require("../Assets/menu.png")}
//                             style={{ height: 30, width: 30, marginLeft: 28 }} />
//                     </TouchableOpacity>

//                 </View>





//             </ScrollView>


//         </View>
//     );

// }

// export default Header;
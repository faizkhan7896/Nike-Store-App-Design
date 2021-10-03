import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navigation from './Screens/Navigation'
import Order from './Screens/Order'

import Gethelp from './Footerscreens/Gethelp'
import Footer from './Components/Footer'


const HelloWorldApp = () => {
  return (

    <Navigation />
  )
}
export default HelloWorldApp;







// import Bag from './Components/Bag'
// import Header from '../Components/Header'
// import Studentoffer from './Screens/Studentoffer'
// import Location from './Location/Location'
// import Shoes from './ProductDetais/Shoes'
// import Modal from './Components/Modal'
// import SizeGuid from './Components/SizeGuid'
// import Slider from './Components/Slider'
// import Datepikker from './Components/Datepikker'
// import Horizontalscroll from './Components/Horizontalscroll'
// import Signup from './Screens/Signup'









// class App extends Component {
//   state = {
//     text: "loading"

//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(data => data.json())
//       .then(data2 => {
//         console.log(data2)
//         this.setState({
//           text: data2[0].url
//         })
//       })
//   }

//   render() {
//     console.log("from render")

//     return (
//       <View style={{ backgroundColor: "white", flex: 1, alignItems: "center", justifyContent: "center" }}>

//         <Text style={{ fontSize: 25 }}>
//           {this.state.text}
//         </Text>
//         <Text style={{ fontSize: 25 }}>
//           textInComponent
//          </Text>
//       </View>
//     );
//   }
// }


// export default App;
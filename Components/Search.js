import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

function Searchscreen({ navigation }) {
    return (
        <View>
            <TextInput
                style={{
                    marginLeft: 50, borderWidth: 1, borderColor: "gray", width: "80%",
                    paddingLeft: 15, height: 40, marginTop: 15,
                }}
                placeholder='Email adderess'
                placeholderTextColor="gray"
            />
        </View>
    );
}
export default Searchscreen;
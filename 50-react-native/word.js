import React, {useState} from 'react'
import {View, Text, TextInput} from  'react-native'


function Word() {
    const [input, setInput] = useState('initial input')

    return(
        <View>
            <TextInput
            placeholder= "Type something"
            onChangeText = {text => setInput(text)}
            />
            <Text>{input}</Text>
        </View>
    )
}

export default Word


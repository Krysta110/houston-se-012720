import React, {useState} from 'react'
import {View, Text, FlatList, StyleSheet, SafeAreaView} from  'react-native'


function List() {
    return(
        <SafeAreaView style={styles.container}>
            <Text>List components:</Text>
            <FlatList
            data={[
                {Todo: "Start project"},
                {Todo: "MVP Demo"},
                {Todo: "Final project prep"}
            ]}
            renderItem={({item}) => <Text>{item.Todo}</Text>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:"50%"
    }
})

export default List
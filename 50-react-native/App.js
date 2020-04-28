/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Word from './word'
import List from './list'


export default class App extends Component{

  render(){
    return(
      <View style={styles.container}>
        {/* <Text style={styles.textFonts}>Hello World!</Text> */}
        <Word/>
        <List/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#368ABC'
  },
  textFonts: {
    color: '#368ABC'
  }
})

// const App = () => {
//   return(
//           <View>
//             <Text>Hello World!</Text>
//           </View>
//     )
// }

// export default App
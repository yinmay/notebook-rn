import React, { Component } from 'react'
import {View, Text} from 'react-native' 

import navStyles from './styles/navStyles'

class componentName extends Component {
    static navigationOptions={
        title:'Post',
        ...navStyles

      }
    render () {
        return (
            <View>
              <Text> new page 
              </Text>
            </View>
        )
    }
}

export default componentName
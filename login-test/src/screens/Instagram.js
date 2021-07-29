import React from 'react';
import {View, Image, Button, StyleSheet} from "react-native" ;

import CardCompent from '../components';

class Instagram extends React.Component{

    static navigationOptions = {
        title:"Instagram",
    }

    render(){
        return (
            <View>
                <Text>
                    Hi
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: 'white',
  },

  //text: {
  //  textAlign: 'center',
  //  fontSize: 22,
  //  fontWeight: 'bold',
  //}
});

export default Instagram;
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {View, Image, Button, StyleSheet} from "react-native" ;

class Background extends React.Component{
  state = {
    	image: null,
      }
      
  _pickImage = async () => {
    const {status_roll} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
  };
  
  render(){
    let { image } = this.state;
    
    return (
          <View>
            <Image source={require('../../assets/linedrawing_example.png')} style={{width: "100%", height: 350}} />
            <View>
              <Button 
               title="Select Image"
               style={styles.text}
               onPress={this._pickImage}
               color="#707070"
              />
            </View>
            {image == null ? <View style={styles.container}/>:
            <Image source={{ uri: image }} style={{width: "100%", height: 220}}/>}
          </View>  
     )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 220,
    backgroundColor: '#E6E6E6',
  },

  text: {
    textAlign: 'center',
    fontSize: 22,
  }
});

export default Background;
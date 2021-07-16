import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { View,StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
    font-size: 30px;
    color: #111111;
`;
class MainScreen extends React.Component {
    
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
            <Container>
                <MaterialIcons name="add-a-photo" size={40} color="black" />
                <Text style={styles.text1}></Text>
                 <Text style={styles.text1}>Upload</Text>
                 <Text style={styles.text1}>Your</Text>
                 <Text style={styles.text1}>Picture</Text>
                 <Text style={styles.text1}>Here</Text>
                 <Text style={styles.text1}></Text>
                 <Text style={styles.text2}>원하시는 사진을 업로드해주세요</Text>
                 <Text style={styles.text2}>라인드로잉으로 변환해드립니다</Text>
                 <Text style={styles.text2}>멋진작품을 만들어보세요</Text>
                 <Text style={styles.text1}></Text>
                 <Text style={styles.text1}></Text>
                 <TouchableHighlight onPress={this._pickImage} style={styles.button}>
                  <View style={styles.btnContainer}>
                  <Text style={styles.btnText}>Select Image</Text>
                  </View>
                  </TouchableHighlight>
            </Container>
        );
      }
};
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 600,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
  
    text1: {
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 30,
    },
    text2: {
      textAlign: 'left',
      fontSize: 15,
    },
    btnContainer: {
      backgroundColor: '#000000',
      paddingHorizontal: 50,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    button: {
      borderRadius: 5
    },
    btnText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white'
    }
  });
export default MainScreen;
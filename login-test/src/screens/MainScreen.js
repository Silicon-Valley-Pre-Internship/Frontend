import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Test from './Test';
import { Buffer } from 'buffer';

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
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  state = {
    image: null,
  };

  //1. 이미지 선택
  _pickImage = async () => {
    // const {status_roll} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (!result.cancelled) {
      //기존에 사용할 state - image
      this.setState({ image: result.uri });
      //test용 setState - photo
      this.setState({ photo: result });
      //console.log(result);
      alert('이미지 선택 완료!');
    }
  };

  //2. flask에게 이미지 보내기
  post = async () => {
    // console.log(this.state.image);

    if (this.state.image !== null) {
      //FormData 처리
      const formData = new FormData();
      formData.append('image', {
        name: this.state.image,
        uri: this.state.image,
        type: 'image/jpeg',
      });
      // console.log(formData);

      //Post 처리
      await axios
        .post('http://10.200.15.194:333/img_trans', formData, {
          headers: {
            enctype: 'multipart/form-data',
          },
          // responseType: 'arraybuffer',
        })
        .then((res) => {
          // console.log(res);
          alert('Upload success!');

          // test용 - photo
          this.setState({ photo: res });
          this.setState({ image: res });
          console.log(res.data);
        })

        .catch((error) => {
          console.log(error);
          alert('Upload failed!');
        });
    }
  };

  render() {
    const { image } = this.state;
    //test용 - photo
    const { photo } = this.state;
    return (
      <Container>
        <MaterialIcons name='add-a-photo' size={40} color='black' />
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

        {/* test */}
        {/* {photo && (
          <React.Fragment>
            <Image
              source={{ uri: photo.data }}
              style={{ width: 200, height: 200 }}
            />
          </React.Fragment>
        )} */}

        <TouchableHighlight onPress={this._pickImage} style={styles.button}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Select Image</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.text1}></Text>
        <TouchableHighlight onPress={this.post} style={styles.button}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Upload to the server</Text>
          </View>
        </TouchableHighlight>

        <Text style={styles.text1}></Text>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('Test', {
              url: this.state.image,
            })
          }
          style={styles.button}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Navigate to next page</Text>
          </View>
        </TouchableHighlight>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
export default MainScreen;

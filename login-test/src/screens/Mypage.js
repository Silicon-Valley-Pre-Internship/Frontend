import React from "react";
import styled from "styled-components";
import { View, Image, Text, Dimensions, Alert, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

var images = [
  require("../assets/1.png"),
  require("../assets/2.png"),
  require("../assets/3.png"),
  require("../assets/4.png"),
  require("../assets/5.png"),
  require("../assets/6.png"),
  require("../assets/7.png"),
  require("../assets/8.png"),
  require("../assets/9.png"),
  require("../assets/10.png"),
  require("../assets/11.png"),
  require("../assets/12.png"),
];

var { width, height } = Dimensions.get("window");

class Mypage extends React.Component {
  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 },
            { marginBottom: 2 },
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };

  renderSection = () => {
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {this.renderSectionOne()}
      </View>
    );
  };

  render() {
    return (
      <Container>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          양유진 님
        </Text>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 1, alignItems: "center", marginLeft: 20 }}>
            <Image
              source={require("../assets/profile1.png")}
              style={{ width: 75, height: 75, borderRadius: 37.5 }}
            />
          </View>
          <View style={{ flex: 3 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: "gray" }}>게시물</Text>
                <Text style={{ fontSize: 25 }}>212</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: "gray" }}>친구</Text>
                <Text style={{ fontSize: 25 }}>17</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={styles.button}>
            <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={() => Alert.alert("프로필 편집")}
              >
                프로필 편집
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={() => Alert.alert("새 게시물")}
              >
                새 게시물
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 5 }}>{this.renderSection()}</View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#9C9393",
    paddingHorizontal: 50,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 8,
  },
  button: {
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
  },
});

export default Mypage;

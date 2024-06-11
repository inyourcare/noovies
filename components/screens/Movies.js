import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: ${(props) => (props.selected ? "blue" : "red")};
`;

const Movies = ({ navigation: { navigate } }) => (
  // Tap Stack Native Navigation Integration
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Btn
    // onPress={() => navigate("Stack", { screen: "Three" })}
    >
      <Title selected={false}>Movies1</Title>
      <Title selected={true}>Movies2</Title>
    </Btn>
    {/* <Pressable
      onPress={() => navigate("Stack", { screen: "Three" })}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "rgb(210, 230, 255)" : null },
        styles.btn,
      ]}
    >
      <Text style={styles.text}>Movies</Text>
    </Pressable> */}
  </View>
);

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "blue",
  },
});
export default Movies;

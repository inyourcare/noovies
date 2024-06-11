import React from "react";
import { TouchableOpacity, Text, View } from "react-native"

const Movies = ({ navigation: { navigate } }) => (
    // Tap Stack Native Navigation Integration
    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={() => navigate("Stack", { screen: "Three" })}
    >
        {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
        <Text>Movies</Text>
        {/* </View> */}
    </TouchableOpacity>
)
export default Movies
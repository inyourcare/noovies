import React from "react";
import { TouchableOpacity, Text, View } from "react-native"

const Movies = ({ navigation: { navigate } }) => (
    // Tap Stack Native Navigation Integration
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
            onPress={() => navigate("Stack", { screen: "Three" })}
        >
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
            <Text>Movies</Text>
            {/* </View> */}
        </TouchableOpacity>
    </View>
)
export default Movies
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native"

const Movies = ({ navigation: { navigate } }) => (
    // Tap Stack Native Navigation Integration
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
            onPress={() => navigate("Stack", { screen: "Three" })}
            style={styles.btn}
        >
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
            <Text style={styles.text}>Movies</Text>
            {/* </View> */}
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    btn: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    text: {
        color: "blue"
    }
})
export default Movies
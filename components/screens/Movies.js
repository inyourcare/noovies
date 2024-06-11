import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Pressable } from "react-native"

const Movies = ({ navigation: { navigate } }) => (
    // Tap Stack Native Navigation Integration
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
            // onPress={() => navigate("Stack", { screen: "Three" })}
            style={styles.btn}
        >
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
            <Text style={styles.text}>Movies1</Text>
            {/* </View> */}
        </TouchableOpacity>
        <Pressable
            // onPress={() => navigate("Stack", { screen: "Three" })}
            style={({ pressed }) => [{ backgroundColor: pressed ? 'rgb(210, 230, 255)' : null }, styles.btn]}
        >
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
            <Text style={styles.text}>Movies2</Text>
            {/* </View> */}
        </Pressable>
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
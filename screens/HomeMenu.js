import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Image, } from "react-native";
import MyIcon from "../components/MyIcon";


export default function HomeMenu() {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 20, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white', alignContent: 'center' }}>
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                <MyIcon title="Class" name="users" size={30} color="orange" onPress={() => { navigation.navigate("Checkmenu"); }} />
                <MyIcon title="Profile" name="user" size={30} color="orange" onPress={() => { navigation.navigate("Myprofile"); }} />
                <MyIcon title="Sign up" name="sign-in" size={30} color="orange" onPress={() => { navigation.navigate("VRU"); }} />
                <MyIcon title="Select" name="book" size={30} color="orange" onPress={() => { navigation.navigate("Menumix"); }}  />
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                <MyIcon title="Receipt" name="file" size={30} color="orange" onPress={() => { navigation.navigate("Receipt"); }}  />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
                <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
            </View>
        </View>
    );
}



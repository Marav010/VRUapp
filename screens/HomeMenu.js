import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Image, Text, } from "react-native";
import MyIcon from "../components/MyIcon";


export default function HomeMenu() {
    const navigation = useNavigation();
    return (

        <View style={{ flex: 1, backgroundColor: 'green', paddingTop: 20 }}>

            <View style={{ marginHorizontal: 20, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white', alignContent: 'center' }}>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                    <MyIcon title="Class" name="users" size={30} color="orange" onPress={() => { navigation.navigate("Checkmenu"); }} />
                    <MyIcon title="Profile" name="user" size={30} color="orange" onPress={() => { navigation.navigate("Myprofile"); }} />
                    <MyIcon title="Sign up" name="sign-in" size={30} color="orange" onPress={() => { navigation.navigate("VRU"); }} />
                    <MyIcon title="Select" name="book" size={30} color="orange" onPress={() => { navigation.navigate("Menumix"); }} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                    <MyIcon title="Receipt" name="file" size={30} color="orange" onPress={() => { navigation.navigate("Receipt"); }} />
                    <MyIcon title="xxx" name="question" size={30} color="orange" />
                    <MyIcon title="xxx" name="question" size={30} color="orange" />
                    <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
                </View>
            </View>
            <View style={{ height: 323, width: 350, justifyContent: 'center',paddingLeft:100 ,}}>
                <Image style={{ aspectRatio: 2.5 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYNUgECZPy1cv9Dioxjcihj-PJDzSrTkAtss8Q51bVs5pv4g1mpAHxAY0TTzucS1AEQM&usqp=CAU' }} />
            </View>
        </View>

    );
}



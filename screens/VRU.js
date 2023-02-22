import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyIcon from '../components/MyIcon';
export default function VRU() {
    const navigation = useNavigation();
    return (
        <View style={{flex:1,backgroundColor:'lightgray'}}>
            <View style={{ padding: 100, flex: 2, flexDirection: 'column' }}>
                <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', }}>
                    <MyIcon title="นักศึกษา" name="user" size={100} color="orange" />
                    <TextInput placeholder='รหัสนักศึกษา' />
                    <TextInput placeholder='รหัสผ่าน'secureTextEntry={true} /> 
                    
                    <Button title='Log in' color={"skyblue"} onPress={() => { navigation.navigate("HomeMenu"); }} />
                </View>
                <Button style={{ flex: 2 }} title="Back" onPress={() => navigation.navigate("HomeMenu")} />
            </View>
        </View>

    );

}
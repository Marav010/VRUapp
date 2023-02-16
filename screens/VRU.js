import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyIcon from '../components/MyIcon';
export default function VRU() {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 100, flex: 2, flexDirection: 'column' }}>
            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', }}>
                <MyIcon title="นักศึกษา" name="user" size={100} color="orange" />
                <TextInput placeholder='รหัสนักศึกษา' />
                <TextInput placeholder='รหัสผ่าน' />
                <Button title='Log in' color={"skyblue"} />
            </View>
        </View>
    );

}
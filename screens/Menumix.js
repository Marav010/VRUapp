import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from '../components/MyIcon';


export default function Menumix() {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 30 }}>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}></View>
                <View>
                    <Text style={{ fontSize: 40 }}>แผนการเรียน</Text>
                    <Text style={{ fontSize: 20 }}>เลือกเทอมสำหรับค้นหา</Text>
                </View>
            </View>
            <View style={{ padding: 30, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 80, width: 400, borderRadius: 100 / 2, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginLeft: 10 }}></View>
                        <View>
                            <Text style={{ fontSize: 20 }}>2/2565</Text></View>
                    </View>
                </View>
                <View style={{ padding: 30 }}>
                    <MyIcon title="ค้นหา" name="check" size={30} color="orange" />
                </View>
            </View>
        </View>
    );
}
import React from "react";
import { View, Image, Text } from "react-native";
import {AntDesign, Fontisto, Feather } from 'react-native-vector-icons';
import * as Font from 'expo-font';
import styles from "./style";

Font.loadAsync({
  'insta-font': require('../../src/fonts/BeautyMountainsPersonalUse-od7z.ttf'),
});

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.headerLeft}>
            <Text style={styles.txtLogo}>Instagram</Text>
            <Feather name="chevron-down" size={15} style={styles.icoH} />    
            </View>
            
            <View style={styles.iconRight}>
                <AntDesign name="hearto" size={25} style={styles.icoH} />
                <Fontisto name="messenger" size={25} style={styles.icoH} />
            </View>
        </View>
    );
}
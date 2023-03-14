import React from "react";
import { Text, View } from 'react-native';
import { Entypo, AntDesign, Octicons, Feather, FontAwesome, Ionicons } from 'react-native-vector-icons'
import styles from "./style";

export default function Menu(){
    return(
        <View style={styles.menuList}>
            <Entypo name="home" size={30} style={styles.icoMenu} />
            <AntDesign name="search1" size={30} style={styles.icoMenu} />
            <Octicons name="diff-added" size={35} style={styles.icoMenu} />
            <Feather name="film" size={30} style={styles.icoMenu} />
            <FontAwesome name="user-circle-o" size={30} style={styles.icoMenu} />
        </View>
    );   
}
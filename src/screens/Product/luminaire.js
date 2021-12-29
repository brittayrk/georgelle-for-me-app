import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header, Left, Body, Right } from "native-base";
import { Button } from '../../common'
import styles from "./productStyle.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"

export const luminaire = ({ navigation}) => {
    return (
            <View style={{ flex: 1 }}>
            <Text>Page Luminaire !</Text>
        </View>
    );
}

export default luminaire;

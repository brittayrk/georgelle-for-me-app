import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Left, Body, Right } from "native-base";
import { Button } from '../../common'
import styles from "./productStyle.js";
import ProductList from "./ProductList.js"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"
import { firebase } from '@firebase/app';
import database from '@react-native-firebase/database';
import Header from "../Dashboard/header";
const ref = database().ref('Products');
export default class rideaux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: []
        }
    }
    
    componentDidMount() {
        database()
            .ref('rideaux')
            .once('value')
            .then(snapshot =>{
                var li = []
                snapshot.forEach((child)=>{
                    li.push({
                        key: child.key,
                        stock:child.val().stock,
                        image:child.val().image,
                        description:child.val().description,
                        name:child.val().name,
                        prix:child.val().prix
                    })
                })
                this.setState({Products:li})
                console.log('Data: ',Products);
            })
    }
    render (){
        return (
                <View style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                <FlatList
            data={this.state.Products}
            renderItem={({item}) => <ProductList product={item}/>}
                />
                </ScrollView>
        </View>
        );
    }
}

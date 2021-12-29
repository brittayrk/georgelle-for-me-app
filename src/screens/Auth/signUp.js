import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { AuthCard, Input } from "../../common";
import styles from "./authStyle.js"
import auth from '@react-native-firebase/auth';

export default class SignUn extends Component {
    state = {
        email: "",
        password: ""
    };
    createUser = () => {
        const { email, password } = this.state;
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('Dashboard');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    render() {
    return (
        <AuthCard>
            <View style={styles.topTextView}>
                <Text onPress={() => navigation.navigate('SignIn')} style={[styles.topText]}>Sign In</Text>
                <Text onPress={() => navigation.navigate('SignUp')} style={[styles.topText, { color: "#42c762" }]}>SignUp</Text>
            </View>

            <View style={{ marginTop: 24 }}>
                <Text style={styles.welcomeText}>Welcome to Fryo!</Text>
                <Text style={{ color: '#C9CACA', fontSize: 12 }}>Lets get started</Text>
            </View>

            <View>
                <View style={{ marginTop: 10 }}>
            <Input
        placeholder="Email Address"
        onChangeText={email => this.setState({ email })}
        />
            <Input
        placeholder="Password"
        onChangeText={password => this.setState({ password })}
        secureTextEntry
        />
                </View>
            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: "flex-end" }}>
                <TouchableOpacity onPress={() => this.createUser()} style={styles.done}>
                    <Icon name="arrowright" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

        </AuthCard>
    );
    }
}

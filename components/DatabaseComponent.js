import React, {Component} from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import database from '@react-native-firebase/database';

const iosConfig = {
};

const androidConfig = {
    client_id: '95470898399-o17a8qafbhsc9pamcmr7k2de9a3qgfvi.apps.googleusercontent.com',
    appId: '1:95470898399:android:24c317209f9b634c2aed6a',
    apiKey: 'AIzaSyDTf5SEFqwlryZnFITbPPHz1Iu-PqkdiMM',
    databaseURL: 'https://georgelle-for-me.firebaseio.com/',
    storageBucket: 'georgelle-for-me.appspot.com',
    messagingSenderId: '95470898399',
    projectId: 'georgelle-for-me',
    persistence: true,
};

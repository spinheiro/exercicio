import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Simples from './componentes/Simples'


export default createDrawerNavigator({

    Texto: {
        screen: () =>  <Text> Bllaaaa </Text>

    },
    Simples: {
        screen: () =>  <Simples texto='shooow'/>

    }

}, {drawerWidth: 300})

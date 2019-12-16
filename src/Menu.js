import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Simples from './componentes/Simples'
import Contador from  './componentes/Contador'


export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    Texto: {
        screen: () =>  <Text> Bllaaaa </Text>

    },
    Simples: {
        screen: () =>  <Simples texto='shooow'/>

    }

}, {drawerWidth: 300})

import React from "react"
import { createDrawerNavigator } from "react-navigation"

export default createDrawerNavigator({

    MegaSena: {
        screen: () => 'bla',
        navigationOptions: { title: 'Mega Sena'} 
    }
})

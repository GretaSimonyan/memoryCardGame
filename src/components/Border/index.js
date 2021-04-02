import React from "react";
import { View } from '../../styled';
import PlayersNumber from '../PlayersNumber';
import GameOn from '../GameOn';

function Border(){
    return(
        <View id='border' 
            grid 
            gTC='1fr' 
            gap='10px 0' 
            justI='center'
            alignI='center' 
            gTR='50px auto auto' 
        >
            <PlayersNumber/> 
            <GameOn/>
        </View>
    )
}

export default Border;
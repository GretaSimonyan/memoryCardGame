import React from "react";
import {
    View
} from '../../styled';
import PlayersNumber from '../PlayersNumber';
import GameOn from '../GameOn';

function Border(){
    return(
        <View id='border' grid gTC='1fr' gTR='50px auto auto' gap='10px 0' alignI='center' justI='center'>
            <View fontSize='23px' op='0.5'> Border </View>
            <PlayersNumber/> 
            <GameOn/>
        </View>
    )
}

export default Border;
import React from "react";
import {
    View
} from '../../styled';
import PlayersNumber from '../PlayersNumber';
import GameOn from '../GameOn';

function Border(){
    return(
        <View id='border' 
            flex 
            w='90%'
            m='10px auto' 
            fD='column' 
            justC='center' 
            alignI='center' 
        >
            <View fontSize='23px' op='0.5'> Border </View>
            <PlayersNumber/> 
            <GameOn/>
        </View>
    )
}

export default Border;
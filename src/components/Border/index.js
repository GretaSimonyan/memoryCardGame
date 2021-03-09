import React from "react";
import {
    View
}from '../../styled';
import PlayersNumber from '../PlayersNumber';
// import BorderSize from '../BorderSize';
import GameOn from '../GameOn';

function Border(){
    return(
        <View id='border' 
            flex 
            w='90%'
            m='0 auto' 
            fD='column' 
            justC='center' 
            alignI='center' 
        >
            <View fontSize='23px' op='0.5'> Border </View>
            <PlayersNumber/> 
            {/* <BorderSize/> */}
            <GameOn/>
        </View>
    )
}

export default Border;
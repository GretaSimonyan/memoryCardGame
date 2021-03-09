import React from "react";
import {
    View
}from '../../styled';

function Header (){
    return(
        <View id='header' p='20px 0'>
            <View flex justC='center' c='orange' fontSize='30px'>
                <h1>Memory</h1>
            </View>
        </View>
    )
}

export default Header;
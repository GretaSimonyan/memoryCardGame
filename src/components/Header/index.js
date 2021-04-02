import React from "react";
import { View } from '../../styled';
import Tada from 'react-reveal/Tada';

function Header (){
    return(
        <View id='header' p='20px 0' fontSize='30px'>
            <Tada>
                <View flex justC='center' c='orange'>
                    <h1>Memory</h1>
                </View>
            </Tada>
        </View>
    )
}

export default Header;
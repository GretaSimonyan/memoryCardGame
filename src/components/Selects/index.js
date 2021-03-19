import React from "react";
import {
    View
}from '../../styled';
import PlayersSelect from '../PlayersSelect';
import BorderSizeSelect from '../BorderSizeSelect';

function Selects(){
    return( 
        <View id='selects' flex alignI='center' justC='space-around' >
            <PlayersSelect />
            <BorderSizeSelect />
        </View>
    )
}

export default Selects;
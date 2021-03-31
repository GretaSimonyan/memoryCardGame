import React from "react";
import {
    View
}from '../../styled';
import PlayersSelect from '../PlayersSelect';
import BorderHeightSelect from '../BorderHeightSelect';
import BorderWidthSelect from '../BorderWidthSelect';
 
function Selects(){
    return( 
        <View id='selects' flex alignI='center' justC='space-around' >
            <PlayersSelect />
            <View id='borderSizeSelect' flex fD='column' >
                <View fontSize='25px'>Border Size</View>
                <View flex fD='column' alignI='flex-end' justC='center'>
                    <BorderHeightSelect/>
                    <BorderWidthSelect/>
                </View>    
            </View>
        </View>
    )
}

export default Selects;
import React from "react";
import {
    View,
    Text
}from '../../styled';
import BorderHeightSelect from '../BorderHeightSelect';
import BorderWidthSelect from '../BorderWidthSelect';

function BorderSizeSelect (){
    return(
        <View id='BorderSizeSelect' flex fD='column' >
            <Text fontSize='25px'>Border Size</Text>
            <View flex fD='column' alignI='flex-end' justC='center'>
                <BorderHeightSelect/>
                <BorderWidthSelect/>
            </View>    
        </View>
    )
}

export default BorderSizeSelect;
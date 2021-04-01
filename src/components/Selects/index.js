import React from "react";
import { View } from '../../styled';
import PlayersSelect from '../PlayersSelect';
import BorderHeightSelect from '../BorderHeightSelect';
import BorderWidthSelect from '../BorderWidthSelect';
 
function Selects(){
    return( 
        <View id='selects' grid gTC='1fr 1fr' justI='center'>
            <PlayersSelect />
            <View id='bSizeSelect' grid gap='5px' tAlign='center'>
                <View fontSize='25px'>Border Size</View>
                <View grid gTC='1fr 1fr' gap='15px'>
                    <BorderHeightSelect/>
                    <BorderWidthSelect/>
                </View>    
            </View>
        </View>
    )
}

export default Selects;
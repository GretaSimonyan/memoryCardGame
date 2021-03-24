import React, {useContext} from "react";
import {
    View
}from '../../styled';
import { Context } from '../../Store';

function PlayersNumber(){
    const [state] = useContext(Context);
    
    return(
        <View id='playersNumber' flex justC='space-between' m='0 auto' w='70%'>
            <View>
                {
                    state.curArr.map((item=state.currentPlayer, key) => 
                        <View key={key}>
                            Player {item.title} : {item.point}
                        </View>
                    )
                }
            </View>
            <View>
                Current Player:  {state.currentPlayer.title}
            </View>
        </View>
    )
}

export default PlayersNumber;
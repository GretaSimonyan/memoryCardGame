import React, {useContext} from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store';

function PlayersNumber(){
    const [state, dispatch] = useContext(Context);

    let plArr = ["A","B","C","D"];
    plArr.length = state.plValue;

    // let activePlayer = () => {
    //     dispatch({
    //         type: 'SET_CURRENT_PLAYER',
    //         current: plArr[1]
    //     });
    // };
    
    return(
        <View id='playersNumber' flex justC='space-between' m='0 auto' w='70%'>
            <View>
                {
                    plArr.map((num, key) => 
                        <View key={key}>
                            Player {num} : 0
                        </View>
                    )
                }
            </View>
            <View>
                Current Player:  {state.current}
            </View>
        </View>
    )
}

export default PlayersNumber;
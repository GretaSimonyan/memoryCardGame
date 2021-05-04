import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Select from '../StylesComp/Select';
import { SET_HEIGHT } from '../../actionTypes';

function BoardHeightSelect (){
    const [state, dispatch] = useContext(Context);
    const heightArr = [2,3,4,5,6,7,8];

    const handleNumberChange = e => {
        dispatch({
            type: SET_HEIGHT,
            height: heightArr[e.target.value]
        })
    };

    return(
        <View grid gTR='1fr 1fr' gap='5px'>
            <View fontSize='20px'> Height </View>
            <Select onChange={e => handleNumberChange(e)}>
                {
                    heightArr.map((num=state.height,key)=> 
                        <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </Select>
        </View>
    )
}

export default BoardHeightSelect;
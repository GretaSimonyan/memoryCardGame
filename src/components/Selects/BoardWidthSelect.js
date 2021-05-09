import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Select from '../StylesComp/Select';
import { setWidth } from  '../../Actions';

function BoardWidthSelect (){
    const [state, dispatch] = useContext(Context);
    const widthArr = [2,3,4,5,6,7,8];

    const handleNumberChange = e => {
        dispatch(setWidth(widthArr[e.target.value]))
    };

    return(
        <View grid gTR='1fr 1fr' gap='5px'>
            <View fontSize='20px'> Width </View>
            <Select onChange={e => handleNumberChange(e)}>
                {
                    widthArr.map((num=state.width,key)=> 
                        <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </Select>
        </View>
    )
}

export default BoardWidthSelect;
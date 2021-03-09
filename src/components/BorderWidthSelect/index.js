import React, { useContext } from "react";
import {
    View
}from '../../styled';
import { Context } from '../../Store';

function BorderWidthSelect (){
    const [state, dispatch] = useContext(Context);

    const widthArr = [2,3,4,5,6,7,8];

    const handleNumberChange = e => {
        dispatch({
            type: "SET_Width",
            width: widthArr[e.target.value]
        })
    }

    return(
        <View flex alignI='center' justC='space-between'>
            <View fontSize='20px'> Width </View>
            <View id='height' m='0 10px'>
                <select onChange={e => handleNumberChange(e)}>
                    {
                        widthArr.map((num,key)=> 
                            <option key={key} value={key}>
                                {num}
                            </option>
                        )
                    }
                </select>
            </View>
        </View>
    )
}

export default BorderWidthSelect;
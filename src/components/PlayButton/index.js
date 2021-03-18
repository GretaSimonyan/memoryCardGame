import React, {useContext} from "react";
import {
    View
}from '../../styled';
import { Context } from '../../Store';
import Border from '../Border';

function PlayButton(){
    const [state, dispatch] = useContext(Context);

    function selected(){
        dispatch({
            type: 'SET_PLAY',
            play: true
        });
    };

    return(
        <View id='playButton' >
            <View flex fW='wrap' justC='space-around'>
                <button onClick={() => selected()}>
                    Play
                </button>
            </View>
            {state.play ? <Border/> : null}
        </View>
    )
}

export default PlayButton;
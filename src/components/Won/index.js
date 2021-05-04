import React, { useContext, useEffect } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Button from '../StylesComp/Button.js';
import { setWinner } from '../../actions';

function Won(){
    const [state, dispatch] = useContext(Context);

    function countWinner(){
        let pointsArr = [];
        state.currentPlayers.map((curr)=> pointsArr.push(curr.point));
        dispatch(setWinner(state.currentPlayers.find(cur => cur.point === Math.max(...pointsArr))))
    };

    useEffect(() => {
        countWinner()
    },state.currentPlayers);

    return(
        <View id='Won' 
            z='4'
            w='50%'
            m='auto'
            p='20px'
            bRad='4px'
            left='0px'
            right='0px'
            pos='absolute'
            tAlign='center'
            bgColor='orange'
            overflow='hidden'
        >
            <View grid
                gap='15px'
                gTR='1fr 1fr auto'
                justI='center'
                fontSize='30px'
            >
                <View c='azure'> 
                    Congratulations Player {state.winner.title} 
                </View>
                <View c='azure'> 
                    You win by gaining {state.winner.point} points
                </View>
                <Button href='/'> Restart </Button>
            </View>
        </View>
    )
}

export default Won;
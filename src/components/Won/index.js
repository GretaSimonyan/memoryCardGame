import React, {
    useContext, 
    useEffect
} from "react";
import { View }from '../../styled';
import { Context } from '../../Store';
import Button from '../StylesComp/Button.js';

function Won(){
    const [state, dispatch] = useContext(Context);

    function countWinner(){
        let pointsArr = [];
        state.curArr.map((curr)=> pointsArr.push(curr.point));

        dispatch({
            type: 'SET_WINNER',
            winner: state.curArr.find(cur => cur.point === Math.max(...pointsArr)).title,
        });
    };

    useEffect(() => {
        countWinner()
    },state.curArr);

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
                gTR='1fr 1fr'
                justI='center'
                fontSize='30px'
            >
                <View c='azure'>
                    Winner - Player {state.winner}
                </View>
                <Button href='/'>
                    Restart
                </Button>
            </View>
        </View>
    )
}

export default Won;
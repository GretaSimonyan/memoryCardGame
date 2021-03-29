import React, {
    useContext, 
    useEffect
} from "react";
import { View }from '../../styled';
import { Context } from '../../Store';

function Won(){
    const [state, dispatch] = useContext(Context);

    function countWinner(){
        let pointsArr = [];
        state.curArr.map((curr)=>{
            pointsArr.push(curr.point);
        });

        dispatch({
            type: 'SET_WINNER',
            winner: state.curArr.find(cur => cur.point === Math.max(...pointsArr)).title,
        });
    };

    useEffect(() => {
        countWinner()
    },state.curArr);
    
    // function restart() {
		
    // };

    return(
        <View id='Won' 
            // pos='relative'
            z='4'
            w='50%'
            h='50px'
            bgColor='orange'
            tAlign='center'
            // overflow='hidden'
            pos='absolute'
            top='0px'
            left='0px'
            right='0px'
            bottom='0px'
            m='auto'
            bRad='3px'
        >
            <View grid
                gap='15px'
                gTR='1fr 1fr'
                justI='center'
            >
                <View>
                    Winner {state.winner}
                </View>
                <a href='#'>
                    Retstart
                </a>
            </View>
            
            {/* <button className="homescreen__shuffle-button " onClick={this.clickMe} >Start!</button> */}
        </View>
    )
}

export default Won;
import React, { useContext, useEffect } from "react";
import { Context } from '../../Store';
import { setWinner } from '../../Actions';
import { View } from '../../styled';
import Button from '../StylesComp/Button.js';

function Won(){
  const [state, dispatch] = useContext(Context);

  let points = [];
  state.currentPlayers.map((curr)=> points.push(curr.point));

  useEffect(() => {
    dispatch(setWinner(state.currentPlayers.find(cur => cur.point === Math.max(...points))));
  },[state.currentPlayers]);

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
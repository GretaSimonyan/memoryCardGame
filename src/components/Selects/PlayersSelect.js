import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Select from '../StylesComp/Select';
import { 
  setPlayersValue,
  setActivePlayer,
  setCurrentPlayers
} from '../../Actions';

function PlayersSelect (){
  const [state, dispatch] = useContext(Context);
  const players = [1,2,3,4]
    
  const statePlayers = [...state.players];
  statePlayers.length = state.playersValue;

  const handleNumberChange = e => {
    dispatch(setPlayersValue(players[e.target.value]));
    const randomPlayer = statePlayers.sort(() => 0.5 - Math.random())[0];
    dispatch(setActivePlayer(randomPlayer));
  };

  function currArrChanged(){
    dispatch(setCurrentPlayers(statePlayers));
  };

  return( 
    <View grid gap='15px'>
      <View fontSize='25px'> Players Number </View>
      <Select
        onChange={handleNumberChange} 
        onClick={currArrChanged}
      >
        {
          players.map((num) => 
            <option key={num} value={num}>
              {num}
            </option>
          )
        }
      </Select>
    </View>
  )
}

export default PlayersSelect;
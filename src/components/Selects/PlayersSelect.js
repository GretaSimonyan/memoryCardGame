import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    dispatch(setCurrentPlayers(state.playersValue));
  }, []);

  const handleNumberChange = e => {
    dispatch(setCurrentPlayers(+e.target.value));
  };

  return( 
    <View grid gap='15px'>
      <View fontSize='25px'> Players Number </View>
      <Select
        onChange={handleNumberChange}
        value={state.playersValue}
        // onClick={currArrChanged}
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
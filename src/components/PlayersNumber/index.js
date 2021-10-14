import React, { useContext } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Jello from 'react-reveal/Jello';

function PlayersNumber() {
  const [state] = useContext(Context);

  return (
    <View id='playersNumber' grid gTC='1fr 1fr' gTR='1fr' gap='200px'>
      <View>
        {
          state.currentPlayers.map((item = state.activePlayer, key) =>
            <View key={key}>
              Player {item.title} : {item.point}
            </View>
          )
        }
      </View>
      <Jello>
        <View>
          Current Player: {state.activePlayer.title}
        </View>
      </Jello>
    </View>
  )
}

export default PlayersNumber;
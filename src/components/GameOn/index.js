import React, { useContext, useState, useEffect } from "react";
import { Context } from '../../Store';
import { setActivePlayer, setFirstCard, setSecondCard,  } from '../../Actions';
import { View } from '../../styled';
import Card from '../StylesComp/Card';
import cardImages from './cards';
import Won from '../Won';
import { columns, rows, generate } from './utils';

function GameOn(){
    const [state, dispatch] = useContext(Context);
    
    let cardsNum = state.height * state.width;

    useEffect(()=> {
        if( cardsNum % 2 !== 0 ) {
            alert("Multiple width and height values must be Even number");
        }else{
            setCards(generate(cardsNum));
        };
    },[cardsNum]);

    const [cards, setCards] = useState(cardImages);
    // let cards = state.cards
    let firstCard = state.firstCard;
    let secondCard = state.secondCard;

    function cardIsFlipped(cardId, isFlipped) {
		setCards(prev => prev.map(c => {
            console.log({...c, isFlipped})
			if (c.id !== cardId)
				return c;
			return {...c, isFlipped};
		}));
	};

    function cardCanFlip(cardId, canFlip){
        setCards(prev => prev.map(c=> {
            if(c.id !== cardId)
                return c;
            return {...c, canFlip};
        }))
    };
    
    function countPoints(){
        let flipArr = [];
        cards.map(card => (!card.canFlip) && flipArr.push(card.canFlip) );
        if (flipArr.length === cards.length) return <Won/>;
    };

    function onSuccessGuess() {
        cardCanFlip(firstCard.id, false);
        cardCanFlip(secondCard.id, false);
        cardIsFlipped(firstCard.id, true);
		cardIsFlipped(secondCard.id, true);
        dispatch(setFirstCard(null));
        dispatch(setSecondCard(null));
        setPointsForCurrPlayer();
    };

    function onFailureGuess() {
        setTimeout(() => {
			cardIsFlipped(firstCard.id, false);
		}, 1000);
		setTimeout(() => {
			cardIsFlipped(secondCard.id, false);
		}, 1200);

        cardCanFlip(firstCard.id, true);
        cardCanFlip(secondCard.id, true);

        dispatch(setFirstCard(null));
        dispatch(setSecondCard(null));

        setNextPlayer();
    };

    function setNextPlayer(){
        let indexOfActivePlayer = state.currentPlayers.indexOf(state.activePlayer);
        dispatch(setActivePlayer(( indexOfActivePlayer < state.currentPlayers.length-1)? 
        state.currentPlayers[indexOfActivePlayer+1] : state.currentPlayers[0]))
    };

    function setPointsForCurrPlayer(){
        state.activePlayer.point = state.activePlayer.point + 1;
        dispatch(setActivePlayer(state.activePlayer));
    };
    
    useEffect(() => {
		if (!firstCard || !secondCard)
			return;
		((firstCard.imageURL === secondCard.imageURL) && (firstCard.id !== secondCard.id)) ? onSuccessGuess() : onFailureGuess();
	}, [firstCard, secondCard]);

    function handleClick(pic) {
		if (!pic.canFlip) return;
        (firstCard) ? dispatch(setSecondCard(pic)) : dispatch(setFirstCard(pic));

        cardIsFlipped(pic.id, true);
        cardCanFlip(pic.id, false);
    };

    return(
        <>
            <View id='gameOn' grid gap='5px 5px'
                gTC={ columns(state.width) }
                gTR={ rows(state.height) }
            >
                {cards.map((pic,index) => 
                    <Card 
                        bgImg={pic.imageURL} 
                        key={pic+index} 
                        onClick={() => handleClick(pic)}
                        isFlipped={pic.isFlipped}
                    />)
                }
            </View>
            {countPoints()}
        </>
    )
}

export default GameOn;
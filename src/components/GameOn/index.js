import React, { useContext, useState, useEffect } from "react";
import { View } from '../../styled';
import { Context } from '../../Store';
import Card from '../StylesComp/Card';
import cardImages from './cards';
import Won from '../Won';

function GameOn(){
    const [state, dispatch] = useContext(Context);
    const pictures = cardImages.slice();

    function generate(cardsNum) {
        if( cardsNum % 2 !== 0 ) {
            pictures.length = 2;
            alert("Multiple width and height values must be Even number");
        }else{
            pictures.length = cardsNum/2;
        };
        pictures.push(...pictures);

        let c = pictures.map((image,index) => ({
            id: image +" "+ index,
            imageURL: image,
            isFlipped: false,
            canFlip: true
        }));
        return c.sort(()=> Math.random() - 0.5);
    };

    //////////////////////////////////////////////////////
    let cardsNum = state.height * state.width;

    useEffect(()=> {
        setCards(generate(cardsNum));
    },[cardsNum]);

    const [cards, setCards] = useState(generate(cardsNum));
    const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);

    function cardIsFlipped(cardId, isFlipped) {
		setCards(prev => prev.map(c => {
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
        setFirstCard(null);
        setSecondCard(null);
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

        setFirstCard(null);
        setSecondCard(null);

        setNextPlayer();
    };

    function setNextPlayer(){
        let indexOfCurrentPlayer = state.curArr.indexOf(state.currentPlayer);
        if( indexOfCurrentPlayer < state.curArr.length-1){
            dispatch({
                type: 'SET_CURRENT_PLAYER',
                currentPlayer: state.curArr[indexOfCurrentPlayer+1],
            });
        }else{
            dispatch({
                type: 'SET_CURRENT_PLAYER',
                currentPlayer: state.curArr[0],
            });
        };
    };

    function setPointsForCurrPlayer(){
        state.currentPlayer.point = state.currentPlayer.point + 1;
        dispatch({
            type: 'SET_CURRENT_PLAYER',
            currentPlayer: state.currentPlayer,
        });
    };
    
    useEffect(() => {
		if (!firstCard || !secondCard)
			return;
		((firstCard.imageURL === secondCard.imageURL) && (firstCard.id !== secondCard.id)) ? onSuccessGuess() : onFailureGuess();
	}, [firstCard, secondCard]);

    function handleClick(pic) {
		if (!pic.canFlip) return;
        (firstCard) ? setSecondCard(pic) : setFirstCard(pic);
        cardIsFlipped(pic.id, true);
        cardCanFlip(pic.id, false);
    };
    
    function columns(width){
        let w = '100px 100px'
        for(let i = 1; i <= width-2; i++){
            w += ' 100px'
        }
        return w
    };
    function rows(height){
        let r = '120px 120px'
        for(let i = 1; i <= height-2; i++){
            r += ' 120px'
        }
        return r
    };

    return(
        <>
            <View id='gameOn' grid gap='5px 5px'
                gTC={columns(state.width)}
                gTR={rows(state.height)}
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
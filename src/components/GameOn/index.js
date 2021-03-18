import React, {
    useContext, 
    useState, 
    useEffect
} from "react";
import { View }from '../../styled';
import { Context } from '../../Store';
import styled from 'styled-components';

import cardImages from './cards';

const Item = styled(View)`
    width: 100px;
    height: 120px;
    transition: transform 0.5s;
    ${ (props) => props.isFlipped === false ? `background: linear-gradient(0deg, rgba(255,33,33,1) 25%, rgba(252,164,41,1) 74%);
    ` : `transform: rotateY(180deg);` }
`;

function GameOn(){
    const [state, dispatch] = useContext(Context);
    const pictures = cardImages.slice();
    pictures.length = 2;
    pictures.push(...pictures);

    function generate(p) {
        const c = p.map((image,index) => ({
            id: image +" "+ index,
            imageURL: image,
            isFlipped: false,
            canFlip: true
        }));
        console.log("c",c);
        return c.sort(()=> Math.random() - 0.5);
    };

    useEffect(()=> {
        if((state.height * state.width) % 2 !== 0 ){
            pictures.length = 2;
            alert("Multiple width and height values must be Even number")
        }else{
            pictures.length = (state.height * state.width)/2;
        };
        pictures.push(...pictures);
        setCards(generate(pictures));
    },[state.height, state.width]);

    //////////////////////////////////////////////////////
    const [cards, setCards] = useState(generate(pictures));
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
    
    function onSuccessGuess() {
        console.log('success');
        cardCanFlip(firstCard.id, false);
        cardCanFlip(secondCard.id, false);
        cardIsFlipped(firstCard.id, true);
		cardIsFlipped(secondCard.id, true);
        setFirstCard(null);
        setSecondCard(null);
    };

    function onFailureGuess() {
        console.log('failure');
        const firstId = firstCard.id;
        const secondId = secondCard.id;

        setTimeout(() => {
			cardIsFlipped(firstId, false);
		}, 1000);
		setTimeout(() => {
			cardIsFlipped(secondId, false);
		}, 1200);

        setFirstCard(null);
        setSecondCard(null);
    };

    useEffect(() => {
		if (!firstCard || !secondCard)
			return;
		((firstCard.imageURL === secondCard.imageURL) && (firstCard.id !== secondCard.id)) ? onSuccessGuess() : onFailureGuess();
        cardCanFlip(firstCard.id, true);
        cardCanFlip(secondCard.id, true);
	}, [firstCard, secondCard]);

    function handleClick(pic) {
		if (!pic.canFlip)
			return;
        (firstCard) ? setSecondCard(pic) : setFirstCard(pic);
        cardIsFlipped(pic.id, true);
        cardCanFlip(pic.id, false);
    };
    console.log(cards);

    function columns(width){
        let w = '100px 100px'
        for(let i = 1; i <= width-2; i++){
            w += ' 100px'
        }
        return w
    }
    function rows(height){
        let r = '120px 120px'
        for(let i = 1; i <= height-2; i++){
            r += ' 120px'
        }
        return r
    }

    return(
        <View id='gameOn' 
            grid
            gap='5px 5px'
            gTC={columns(state.width)}
            gTR={rows(state.height)}
            >
            {cards.map((pic,index) => 
                <Item 
                    bgImg={pic.imageURL} 
                    key={pic+index} 
                    onClick={() => handleClick(pic)}
                    isFlipped={pic.isFlipped}
                    bgSize='cover'
                    bgPos='center'
                    bgRep='no-repeat'
                />)
            }
        </View>
    )
}

export default GameOn;
import React, {useContext, useState} from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store';
import styled from 'styled-components';

import Pictures from '../Pictures';
const Item = styled(View)`
    width: 100px;
    height: 120px;
    margin: 5px 5px 0 0;
    ${ (props) => props.isFlipped === false ? `` : 
    `border: 2px solid darken($accent-color, 10%);
	transform: rotateY(180deg);` }
`;

function BorderSize(){
    const [state, dispatch] = useContext(Context);

    const pictures = Pictures.slice();

    pictures.length = state.height * state.width;

    pictures.push(...pictures);

    pictures.sort(()=> Math.random() - 0.5);
    ///////////////game begins//////////////

    const [canFlip, setCanFlip] = useState(true);
    const [firstImg, setFirstImg] = useState(null);
    const [secondImg, setSecondImg] = useState(null);

    // function cardIsOpened(){

    // }

    let opened = [];

    function handleClick(pic) {
        if(opened.length == 2) {
            setTimeout(() => check(),750)
            // console.log('1. length = 2')
            // console.log(opened)
        }else {
            let cards = {
                ...pic
            }
            opened.push(cards);
            setCanFlip(false)
            // console.log("2. length!=2 push.(cards)")
            if(opened.length == 2){
                setTimeout(() => check(),750)
                // console.log('4. length=2 ashxatec checky')
            }
            console.log(opened)

        }
    }

    function check(){
        if((opened[0].name == opened[1].name) && (opened[0].index !== opened[1].index) ){
            console.log('3. ashxatec check functiony')
            
        }
    }


    return(
        <View id='borderSize' >
            <View flex fW='wrap' justC='space-around'  m='0 auto' w='80%'>
                {pictures.map((pic,index) => 
                    <Item bgImg={pic.src} 
                        key={pic.src.toString()+pic.id+index} 
                        bgSize='cover'
                        bgPos='center'
                        bgRep='no-repeat'
                        isFlipped={canFlip}
                        onClick={() => handleClick(pic)}
                        // close={close}
                        // complate={complate}
                    />)
                }
            </View>
        </View>
    )
}

export default BorderSize;
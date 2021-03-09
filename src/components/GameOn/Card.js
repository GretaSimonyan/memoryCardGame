import React, {useContext, useState, useEffect} from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store';
import styled from 'styled-components';

// import Pictures from '../Pictures';
// import cards from './cards';

const Item = styled(View)`
    width: 100px;
    height: 120px;
    margin: 5px 5px 0 0;
    ${ (props) => props.isFlipped === false ? `` : 
    `border: 2px solid darken($accent-color, 10%);
	transform: rotateY(180deg);` }
`;

function Card({imgURL, isFlipped, onClick}){
    return(
        <>
            <Item 
                bgImg={ImgURL}
                bgSize='cover'
                bgPos='center'
                bgRep='no-repeat'
                // {...props}
            />
        </>
    )
}

export default Card;
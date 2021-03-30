import {
    View
}from '../../styled';
import styled from 'styled-components';

const Card = styled(View)`
    width: 100px;
    height: 120px;
    transition: transform 0.5s;
    ${ (props) => props.isFlipped === false ? `background: linear-gradient(0deg, rgba(255,33,33,1) 25%, rgba(252,164,41,1) 74%);
    ` : `transform: rotateY(180deg);` }
`;

export default Card;
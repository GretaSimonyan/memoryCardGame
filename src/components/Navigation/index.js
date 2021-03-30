import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled(NavLink)`
	background-color: #ffffff;
    border: 1px solid #fbb04f;
	cursor: pointer;
	color: #fbb04f;
	font-family: Arial;
	font-weight: bold;
	padding: 12px 16px;
	text-decoration: none;
    transition:0.3s ease all;
    &:hover {
        color: white;
        background: #fb9e25;
    &}
    :active {
        position: relative;
        top:1px;
    }
`;
export default Navigation;
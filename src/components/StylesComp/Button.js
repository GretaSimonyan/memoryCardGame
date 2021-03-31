import styled from 'styled-components';

const Button = styled.a`
    box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
	background-color:#ffc477;
	border:1px solid #eeb44f;
    border-radius:28px;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:12px 26px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
    &:hover {
        background:linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
        background-color:#fb9e25;
    }
    &:active {
        position:relative;
        top:1px;
    }
`;

export default Button;
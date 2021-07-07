import styled from "styled-components";
// import Hello from '../../images/Hello.svg'

export const About2Container = styled.div`
min-height: 800px;
display: flex;
justify-content: space-evenly;
align-items: center;
border: solid black;

@media screen and (max-width: 768px) {
    padding:  100px 0;
}
`
export const Img = styled.img`
width: 50em;
margin-top: 5%;
margin-left: 2%;
margin-bottom:5%;

`
export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: solid red;
width: 50em;
height: 30em;

`

export const Header = styled.h1`
color: #48454d;
margin-bottom: 10px;

`

export const Description = styled.p`
font-size: 16px;
`
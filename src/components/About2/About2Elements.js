import styled from "styled-components";
// import Hello from '../../images/Hello.svg'

export const About2Container = styled.div`
min-height: 800px;
display: flex;
justify-content: space-evenly;
align-items: center;
border: solid black;

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
}
`
export const Img = styled.img`
width: 40rem;
margin-top: 5%;
margin-left: 2%;
margin-bottom:5%;

@media screen and (max-width: 1000px) {
  width: 30rem;
}
`
export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid red;

width: 40em;
height: 30em;

@media screen and (max-width: 768px) {
height: 15em ;
}

`

export const Header = styled.h1`
color: #48454d;
margin-bottom: 20px;

@media screen and (max-width: 768px) {
display: flex;
justify-content: center;
}
`

export const Description = styled.p`
font-size: 16px;
border: 1px solid red;
width: 90%;

@media screen and (max-width: 768px) {
/* margin: 20px; */
display: flex;
justify-content: center;
align-items: center;
}
`
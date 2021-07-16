import styled from "styled-components";
// import Hello from '../../images/Hello.svg'

export const About2Container = styled.div`
min-height: 800px;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
justify-content:space-around;
}
`;

export const Img = styled.img`
width: 50%;
margin-top: 5%;
margin-left: 2%;
margin-bottom:5%;

@media screen and (max-width: 1000px) {
  width: 40rem;
  margin-bottom: 100px;
}
`;

export const DescriptionContainer = styled.div`
display: flex;
align-items: center;
min-width: 300px ;
width: 40em;
height: 30em;

@media screen and (max-width: 768px) {
height: 15em ;
}
`;

export const Header = styled.h1`
text-align: center;
color: #48454d;;

@media screen and (max-width: 768px) {
display: flex;
justify-content: center;
}
`;

export const Description = styled.p`
font-size: 16px;
width: 90%;

@media screen and (max-width: 768px) {
display: flex;
justify-content: center;
align-items: center;
}
`;
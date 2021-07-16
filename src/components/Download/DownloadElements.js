import styled from "styled-components";


export const DownloadContainer = styled.div`
display: flex;
/* width: 50%; */
flex-direction: column;
justify-content: center;
align-items: center;
height:900px;
`;

export const GifContainer = styled.div`
height: 98%;
width: 99.2vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
z-index: 1;
background-image: url('https://giffiles.alphacoders.com/178/17838.gif');

@media screen and (max-width: 768px) {
    padding:  100px 0;
}
`;

export const Overlay = styled.div`
background-color: #ff3c00;
height: 50vh;
width: 99.2vw;
opacity: .5;
position: absolute;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Wrapper = styled.div` 
position: absolute;
z-index: 3;
width: 50vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`;

export const DataContainer = styled.div`

`;

export const Header = styled.h1`
display: flex;
justify-content: center;
font: 2em;
margin: 30px;
color: black;
`;

export const IconWrapper = styled.div`
min-width: 500px;
display: flex;
justify-content: space-evenly;
`
export const Anchor = styled.a`

&:hover{
    transition: all 0.2s ease-in-out;
font-size: 1.1em;
}
`;

export const Footer = styled.div`
display: flex;
justify-content: center;
width: 300px;
position: relative;
top: 370px;
`

export const Copyright = styled.span`
color: black;
`

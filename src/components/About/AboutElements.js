import styled from "styled-components";

export const AboutContainer = styled.div`
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #666778;
color: white;
padding-top: 3em;
padding-bottom: 3em;

@media screen and (max-width: 768px) {
    padding:  50px 0;
}
`

export const Header = styled.h1`
margin-top: 30px;
margin-bottom: 5px;
`
export const Description = styled.p`
padding: 20px;
max-width: 60%;
height: 50%;
display: flex;
justify-self: center;
margin-bottom: 20px;

@media screen and (max-width: 768px) {
    padding:  40px 0;
    width: 80%;
}
`
export const FeaturesContainer = styled.div`
width:50%;
height: 15rem;
display: flex;
justify-content: space-evenly;
align-items: center;
margin:5px;

@media screen and (max-width: 768px) {
    margin-top: 10px;
    padding:  10px 0;
    /* display: flex;
    flex-direction: column;
    margin-bottom: 50px; */
}

`
export const FeatWrapper = styled.div`
margin: 10px ;
width: 25%;
display: flex;
flex-direction: column;
align-items: center;
min-width:200px

`;

export const FeatureDescription = styled.p`
margin-top: 10px;
`
import styled from "styled-components";

export const AboutContainer = styled.div`
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
    padding:  100px 0;
    /* background-color: #ff3c00; */
    /* color:white; */
}
`

export const Header = styled.h1`
margin: 20px;
`
export const Description = styled.h3`
border: 2px solid red;
max-width: 80%;
display: flex;
justify-self: center;

@media screen and (max-width: 768px) {
    padding:  50px 0;
    /* background-color: #ff3c00; */
    /* color:white; */
    width: 80%;
}

`
export const FeaturesContainer = styled.div`
width:50%;
display: flex;
justify-content: space-evenly;
align-items: center;
border: solid red;
margin:5px;

@media screen and (max-width: 768px) {
    margin-top: 40px;
    padding:  10px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
}

`
export const FeatWrapper = styled.div`
margin: 10px ;
width: 25%;
border: 2px solid blue;
display: flex;
flex-direction: column;
align-items: center;
min-width:200px

`;

export const FeatureDescription = styled.p`

`
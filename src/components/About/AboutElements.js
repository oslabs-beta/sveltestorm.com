import styled from "styled-components";

export const AboutContainer = styled.div`
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
    padding:  100px 0;
}
`

export const Header = styled.h1`

`
export const Description = styled.h3`
max-width: 900px;
`
export const FeaturesContainer = styled.div`
width:40%;
display: flex;
justify-content: space-evenly;
align-items: center;
border: solid red;
margin:5px;

`
export const FeatWrapper = styled.div`
width: 25%;
border: 2px solid blue;
display: flex;
flex-direction: column;
align-items: center;

`

export const FeatureDescription = styled.p`

`
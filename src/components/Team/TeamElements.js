import styled from "styled-components";

export const TeamContainer = styled.div`
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid green;
overflow-x: hidden;

@media screen and (max-width: 768px) {
    padding:  100px 0;
}
`
export const Header = styled.h1`
margin: 50px;

`
export const GroupContainer = styled.div`
width: 80%;
border: solid red;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
    margin: 10px;
    padding:  100px 0;
    display: grid;
    grid-template-columns: 200px 200px;
}
`

export const TeamWrapper = styled.div`
border: solid black;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
min-width: 200px;
max-height: 250px;
`

export const Img = styled.img`
height: 10rem;
border-radius: 50%;
`

export const Name = styled.p`
margin-bottom: 10px;
`

export const LinkWrapper = styled.h1`

`

export const Linkedin = styled.div`

`

export const Git = styled.div`

`
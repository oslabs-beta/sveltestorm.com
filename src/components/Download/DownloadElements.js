import styled from "styled-components";

export const DownloadContainer = styled.div`
min-height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    padding:  100px 0;
}
`

export const Header = styled.h1`
font: 2em;
margin: 50px;
`

export const IconWrapper = styled.div`
min-width: 500px;
display: flex;
justify-content: space-evenly;
align-items: center;
`


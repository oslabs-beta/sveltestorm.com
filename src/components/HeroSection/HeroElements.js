import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'


export const HeroContainer = styled.div`
background: white;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position:relative;
z-index: 1;

/* :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
} */
`

// add :before styles

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const IconBg = styled.div`
width: 100%;
height: 100%;
color: #ff3c00;
display: flex;
font-size: 50rem;
justify-content: flex-end;
align-items: flex-start;
position: relative;
top: -150px;
right: -100px;




/* border: 2px solid red; */
z-index: 1;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
color: #48454d;
font-size: 48px;
text-align: center;

@media screen and (max-width: 786px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const HeroP = styled.p `
margin-top:24px;
color: #48454d;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 786px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
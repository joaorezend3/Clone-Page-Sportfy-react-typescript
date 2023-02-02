import styled from "styled-components";

const HeaderContent = styled.div`
width:100%;
display: flex;
padding: 0px 23px;

`

const topText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const titleCards = styled.h2`
display: inline-block;
max-width: 100%;
font-size: 16px;
text-overflow: ellipsis;
white-space: nowrap;
`
/* Gambiarra */
const exibirCards = styled.a`
margin:0 0 0 900px;
font-weight:bold;
font-size: 0.75rem;
a{
    color:#b3b3b3;
    text-decoration:none;   
}
a:hover{
    border-bottom:1px solid #ccc;
    color:#b3b3b3;
}
`
const cards = styled.section`
display:flex;
justify-content:center;
gap:25px;
`
const card = styled.div`
background-color:#161616;
height:268px;
width:170px;
border-radius:6px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
cursor: pointer;
padding:5px;
display:flex;
flex-direction:column;
align-items:center;
:hover{
    background-color:#232323;
}
`
const imgCard = styled.div`
overflow: hidden;
margin-top:10px;
height: 160px;
img{
    height: 100%;
}
`
const textCard = styled.div`
h2{
    font-size: 1rem;
    font-weight:700;
}
p{
    font-size:0.875rem;
}

`

/* Cards */

export { HeaderContent, topText, titleCards, exibirCards, cards, card, imgCard, textCard };
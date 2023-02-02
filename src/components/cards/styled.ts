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
gap:25px;
`
const card = styled.div`
background-color:#161616;
height:268px;
width:200px;
border-radius:6px;
`

/* Cards */

export { HeaderContent, topText, titleCards, exibirCards,cards,card };
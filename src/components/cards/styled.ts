import styled from "styled-components";

const HeaderContent = styled.div`
width:100%;
display: flex;
padding: 0% 2%;
`

const topText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h2{
position: relative;
margin-left:9px;    
}
`

const exibirCards = styled.a`
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
const titleCards = styled.h2`
display: inline-block;
max-width: 100%;
font-size: 16px;
text-overflow: ellipsis;
white-space: nowrap;
`
const cards = styled.section`
display:flex;
justify-content:center;
flex-wrap: wrap;
gap:25px;
`
const card = styled.div`
background-color:#161616;
height:268px;
width:180px;
border-radius:6px;
box-shadow: rg
ba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
cursor: pointer;
padding:9px;
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
border-radius:4px;
position: relative;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
img{
    height: 100%;
    width: 100%;
}
`
const textCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2{
    font-size: 1rem;
    font-weight:700;
}
p{
    font-size:0.875rem;
}

`
export { HeaderContent, topText, titleCards, exibirCards, cards, card, imgCard, textCard };
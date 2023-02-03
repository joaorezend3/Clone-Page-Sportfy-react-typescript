import styled from "styled-components";

const Footertop = styled.div`
display:flex;
margin: 50px 0 0 237px;
flex-wrap: wrap;
gap:90px;

hr{
    margin-top: 90px;
    padding:90px;
    width: 50%;
    background-color: #292929;
    border-bottom: solid 1px #ccc;
}
`
const Footer = styled.div`

p{
    margin: 50px 0 20px  278px;
}
h2{
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
}

li{
    color:#a7a7a7;
    list-style-type: none;
    margin: 12px 0 0 0;
}
li:hover{
    border-bottom: solid 1px  #a7a7a7;
    transition: ease 0.5s;
}
.social{
    display:flex;
    gap:14px;
}
.social button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #292929;
    border:none;
    color: #fff;
    cursor: pointer;
}
.social button:hover{
background-color: rgb(114, 114, 114);    
}
.social button svg{
    height: 35px;
    widht: 35px;
}
`

export { Footer, Footertop };
import styled from "styled-components";

const HeaderContent = styled.div`
width:100%;
display: flex;
justify-content: space-between;
background-color: #0f0f0f;
padding:6px 12px;
`
const arrowbButtons = styled.div`
margin-top:5px;
margin: 10px 20px 0 20px;
button {
margin: 0 15px 0 0px;
background-color:#090909;  
border:none;
color: #fff;
height:35px;
width:35px;

border-radius:100%;
cursor:not-allowed;
button svg{
display: none;
}
div.left{
transform:rotate(180deg);
}
`
const buttonsLogin = styled.div`
margin:0 40px 0 0;
display: inline-flex;
gap:16px;
    button{
width:100px;    
height:50px;
font-size:0.9rem;
font-weight:bold;
border:none;
}

.btnInscreva{
background-color:transparent;
color:#a7a7a7;
}
.btnInscreva:hover{
color:#fff;
}
.btnLogin{
background-color:#fff;
color:#000;
border-radius:24px;
}
.btnLogin:hover{
transform:scale(1.1)
}
`
export { HeaderContent, arrowbButtons, buttonsLogin };
import styled from "styled-components";

const NavBar = styled.div`
    background-color: #000000;
    position: fixed;
    border: 0;
    margin: 0;
    padding: 0 0 0 10px;
    height: 100%;
    width: 237px;
    white-space: nowrap;
    overflow: hidden;
.logo svg{
    margin:25px 0 0 15px ;
    height:40px;
}
ul{
    padding:30px 20px 0 20px;
}
li{
    list-style-type: none;
    margin-bottom:16px;
}
li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 900;
}   
li a:hover {
    color: #fff;
}   
.active{
    color:#fff;
}
li svg {
    vertical-align: middle;
    margin-right: 15px;
}
button{
    border: 1px solid #fff;
    background-color: #070707;
    color: #fff;
    font-weight:700;
    border-radius:24px;
    cursos: pointer;
    height:32px;
    widht: 172px;
    padding:0 14px;
}
.language{
margin-top: 15%;
}
}
.language:hover{
    background-color: #000;
transfor:scale(1.1);;
}
.language svg {
    vertical-align: middle;
}
`
const infoUser = styled.div`
    padding: 0px  ;
    margin:30px 0 0 0;
`
const pleyListIcon = styled.div`
        background-color:#b3b3b3 ;
        display: flex;
        justify-content: center;
        aling-itemns: center;
        margin:0 15px 0 0;
        color: #000;
        border-radius: 2px;
        height:24px;
        width:24px;
        position: relative;
    
    svg{
        position:absolute;
        left:24%;
        top:24%;
        
    }
    `
const mscCurtida = styled.div`
    background: linear-gradient(135deg,#450af5,#c4efd9);
    color:#b3b3b3;
    display: flex;
    justify-content: center;
    aling-itemns: center;
    margin:0 15px 0 0;
    border-radius: 2px;
    height:24px;
    width:24px;
    position: relative;
    svg{
        position:absolute;
        left:24%;
        top:24%;
    }
    `
const Links = styled.div`
    margin:35% 0 0 0;
    text-align:center;
li{
    display: flex;
}
li a{
    box-sizing: border-box;
    margin-right: 10px;
    font-size: 0.6875rem;
    font-weight: 500;
}
    `
export { NavBar, pleyListIcon, infoUser, mscCurtida, Links };
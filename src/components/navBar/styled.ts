import styled from "styled-components";

const NavBar = styled.div`
    background-color: #000000;
    position: fixed;
    border: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 237px;
    white-space: nowrap;
    overflow: hidden;
.logo svg{
    margin:25px 0 0 15px ;
    height:38px;
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
}   
li a:hover {
    color: #fff;
}   
.active{
    font-weight: bold;
    color:#fff;
}
li svg {
    vertical-align: middle;
    margin-right: 15px;
}
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
        height:20px;
        width:20px;
        position: relative;
    
    svg{
        position:absolute;
        left:20%;
        top:20%;
        
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
    height:20px;
    width:20px;
    position: relative;
    svg{
        position:absolute;
        left:20%;
        top:20%;
    }
    `
const Links = styled.div`
    margin:90% 0 0 0;
    text-align:center;
li{
    display: flex;
}
li a{
    box-sizing: border-box;
    margin-right: 10px;
    font-size: 0.5875rem;
    font-weight: 500;
}
    `
export { NavBar, pleyListIcon, infoUser, mscCurtida, Links };
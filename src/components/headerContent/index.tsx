import * as C from "./styled";

export const NavBarHeaderContent = () => {
    return (
        <C.HeaderContent>
            <C.arrowbButtons>
                <button className="left-arrow"><div className="left"> </div></button>
                <button className="right-arrow"><div className="right"></div></button>

            </C.arrowbButtons>
            <C.buttonsLogin>
                <button className="btnInscreva">Inscreva se</button>
                <button className="btnLogin">Entrar</button>
            </C.buttonsLogin>
        </C.HeaderContent>
    )
} 
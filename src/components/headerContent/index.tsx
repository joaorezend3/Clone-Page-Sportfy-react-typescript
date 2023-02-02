import * as C from "./styled";

export const NavBarHeaderContent = () => {
    return (
        <C.HeaderContent>
            <C.arrowbButtons>
                <button className="left-arrow"><svg role="img" height="16" width="16" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path></svg></button>
                <button className="right-arrow"><svg role="img" height="16" width="16" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path></svg></button>
                
            </C.arrowbButtons>
            <C.buttonsLogin>
                <button className="btnInscreva">Inscreva se</button>
                <button className="btnLogin">Entrar</button>
            </C.buttonsLogin>
        </C.HeaderContent>
    )
} 
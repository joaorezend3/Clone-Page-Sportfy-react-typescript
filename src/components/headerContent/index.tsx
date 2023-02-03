import * as C from "./styled";

export const NavBarHeaderContent = () => {
    return (
        <C.HeaderContent>
            <C.arrowbButtons>
                <button className="left-arrow">
                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-arrows-arrows-those-icons-lineal-color-those-icons-1.png"/>
                </button>
                <button className="right-arrow">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO3UWw6CMBAF0G7JR3xbwJZSaC1WEJ8hJIZlm7gA9zCmC/Dz+mG8Gzgzk8xl7J9vR7rqAQWEqwgKJHaPBWLjsUBkdliA5yUWWGuHBVbZFgsslcUCi9RggbkssMBU5FhgstFgIMmwwDhWWGAUpVhgyOVnoOn6Z9P1VLd38teOynNL9ngjc7iQrk6kfEPC1RQqOSpKCrUQHmsmcwq3D9MPuHxBN2A/lzfKxECEaOXZ9AAAAABJRU5ErkJggg=="/>
                </button>

            </C.arrowbButtons>
            <C.buttonsLogin>
                <button className="btnInscreva">Inscreva se</button>
                <button className="btnLogin">Entrar</button>
            </C.buttonsLogin>
        </C.HeaderContent>
    )
} 
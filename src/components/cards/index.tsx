import * as C from "./styled";

const ContainerCards = () => {
    return (
        <C.HeaderContent>
            <div>
                <C.topText>
                    <C.titleCards><h2>Foco</h2></C.titleCards>
                    <C.exibirCards><a href="">MOSTRAR TUDO</a></C.exibirCards>    
                </C.topText>
                <C.cards>
                <C.card></C.card>
                <C.card></C.card>
                <C.card></C.card>
                <C.card></C.card>
                <C.card></C.card>
                </C.cards>
            </div>
        </C.HeaderContent>
    )
}
export default ContainerCards;
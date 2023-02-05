# Recriando a Página Inicial do Spotify com React e TypeScript

![Screenshot]()

## Sobre o Projeto:

Este projeto visa recriar a página inicial do Spotify utilizando React e TypeScript. O objetivo é criar uma interface de usuário não logado, semelhante ao Spotify, com uma barra de navegação à esquerda e um container à direita exibindo as opções de música disponíveis para usuários não registrados.

##### Algumas imagens e SVGs foram bloqueados pelo Spotify, então algumas partes da página não ficaram 100% iguais.

---
## Principais Características:

- Utilização do React para criar componentes reutilizáveis e interativos na página.
- Utilização do TypeScript para garantir tipagem segura e maior legibilidade do código.
- Utilização de styled-components para facilitar a estilização dos componentes.

## Tecnologias Utilizadas

- React
- TypeScript
- styled-components
- CSSS
- HTML5



# Código Principal:

 O arquivo principal do projeto é onde todos os componentes são importados e montados para exibir a página final. Aqui é onde todos os componentes, incluindo a barra de navegação, o conteúdo do cabeçalho, o container de cartões e o rodapé, são renderizados para exibir a página final.

```typescript
function App() {
  return (
    <div className="App">
      <C.container>
        <NavBar></NavBar>
        <div className="content">
          <NavBarHeaderContent>
          </NavBarHeaderContent>
          <ContainerCards />
        </div>
        <Footer></Footer>
      </C.container>
    </div>
  );
}
```
Este projeto foi uma ótima maneira de praticar minhas habilidades em React e TypeScript, bem como aprender a trabalhar com styled-components. Se você está interessado em desenvolvimento web e aplicativos de música, este projeto é perfeito para você!

<p align="center">
<a href="https://www.linkedin.com/in/jo%C3%A3o-rezende-b3aa4821b/" ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a><p>

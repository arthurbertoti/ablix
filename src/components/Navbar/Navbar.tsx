// import { TechLogo, SearchButton, StyledCabecalho } from './styles';
// export default function Navbar() {
//     return (
//         <StyledCabecalho>
//             <TechLogo alt="Logo do Ablix" />
//             <div>
//                 <SearchButton href="https://google.com">
//                     Ajuda
//                 </SearchButton>
//                 <SearchButton href="https://google.com">
//                     Sair
//                 </SearchButton>
//             </div>
//         </StyledCabecalho>
//     )
// }
import React, { useState } from "react";
import {
    NavbarContainer,
    LeftContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
} from "./styles";
import LogoImg from "../../assets/logo.svg";

function Navbar() {

    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <Logo src={LogoImg} />
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/home"> Início</NavbarLink>
                        <NavbarLink to="/home#series"> Séries</NavbarLink>
                        <NavbarLink to="/home#filmes"> filmes</NavbarLink>
                        <NavbarLink to="/home/search"> Pesquisar</NavbarLink>
                        <NavbarLink to="/home"> Notificações</NavbarLink>
                        <NavbarLink to="/home#perfil"> Perfil</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;
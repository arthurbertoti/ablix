import {
    NavbarContainer,
    LeftContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
} from "./styles";
import LogoImg from "../../assets/logo.svg";

export default function Navbar() {
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
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
                        <NavbarLink to="#series"> Séries</NavbarLink>
                        <NavbarLink to="#filmes"> filmes</NavbarLink>
                        <NavbarLink to="/search"> Pesquisar</NavbarLink>
                        <NavbarLink to="#perfil"> Perfil</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
}

// import styled from 'styled-components';
// import Logo from '../../assets/logo.svg';

// export const SearchButton = styled.a`
//   text-align: center;
//   border-radius: 3px;
//   padding: 5px 20px;
//   margin: 0 10px;
//   font-weight: 600;
//   border: 2px solid white;
// `;

// export const StyledCabecalho = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   padding: 0 15vw;
//   height: 10vh;
//   align-items: center;
// `;

// export const TechLogo = styled.img`
//   width: 160px;
//   height: 30px;
//   content:url(Logo);
// `;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  background-color: #4b4b4b;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
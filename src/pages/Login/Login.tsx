import LoginForm from 'components/LoginForm/LoginForm'
import { LoginPage, Logo } from './styles'
import LogoImg from "../../assets/logo.svg";

export default function Login() {

  return (
    <LoginPage>
      <Logo src={LogoImg}/>
      <LoginForm />
    </LoginPage>
  )
};

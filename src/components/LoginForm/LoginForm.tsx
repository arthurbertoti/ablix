import { Container, Titulo, Button, Input, InputContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import * as React from 'react';
import IUser from '../../interfaces/IUser';

export default function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState<IUser>({
    name: '',
    password: '',
    showPassword: false,
  });
  const handleChange =
    (prop: keyof IUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Container>
      <Titulo>
        Entrar
      </Titulo>
      <InputContainer>
      <PersonOutlined/>
        <Input
          placeholder="Nome do usuário"
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
        />
      </InputContainer>
      <InputContainer>
      <LockOutlined />
        <Input
          placeholder="Senha"
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
        />
      </InputContainer>
      <Button
        disabled={values.name.length < 3 || values.password.length < 3}
        onClick={() => navigate('/home')}>
        Entrar
      </Button>
    </Container>
  )
};

import { Container, Titulo, Button, Input } from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import background from '../../assets/background.png';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlined from '@mui/icons-material/LockOutlined';
import * as React from 'react';
import { IconButton, InputAdornment, FormControl } from '@mui/material';

interface State {
  name: string;
  password: string;
  showPassword: boolean;
}

export default function LoginForm() {

  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.style.backgroundImage = `${background}`;
  }, []);

  const [values, setValues] = React.useState<State>({
    name: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Titulo>
        Entrar
      </Titulo>
      <FormControl sx={{ m: 2 }} variant="outlined">
        <Input
          placeholder="Nome do usuário"
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          startAdornment={<PersonOutlined />}
        />
      </FormControl>
      <FormControl sx={{ m: 2 }} variant="outlined">
        <Input
          placeholder="Senha"
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          startAdornment={<LockOutlined />}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button onClick={() => navigate('/home')}>
        Entrar
      </Button>
    </Container>
  )
};

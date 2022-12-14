import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 470px;
  height: 390px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid;
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const Titulo = styled.h2`
  color: white;
  margin-bottom: 20px;
  margin-top: 30px;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  border-color: #ffffff;
`;
export const Input = styled.input`
  color: black;
  box-sizing: border-box;
  margin: 12px 0;
  width: 400px;
  margin: 0 auto;
  height: 58px;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`

export const Button = styled.button`
  color: white;
  margin: auto;
  background-color: #4C1691;
  width: 397px;
  height: 58px;
  top: 15px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  && :hover{
    background-color: #6C1691;
  }  
`
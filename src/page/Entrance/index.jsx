import React from "react";
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const Banner = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  
  input {
      width: 250px;
      height: 35px;
      border-radius: 5px;
      margin-bottom: 10px;
      
      ::placeholder{
        padding-left: 10px;
      }
      ${({theme}) => css`
        border: 1px solid ${theme.colors.lightSilver};
        
      `} 
  }
`;

const Info = styled.p`
   margin-bottom: 5px;  
`;

const Button = styled(Link)`
  text-decoration: none;
  width: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: white;
  
  ${({theme}) => css`
    background: ${theme.colors.greenHeader};
  `}
`;

const Entrance = () => {
    return (
        <Banner>
            <Info>
                Логин
            </Info>
            <input placeholder='Введите Email' />
            <Info>
                Пароль
            </Info>
            <input placeholder='Введите Пароль' />
            <Button to='/category'>Войти</Button>
        </Banner>
    )
}

export default Entrance;
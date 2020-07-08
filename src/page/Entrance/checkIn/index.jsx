import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";

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
      padding-left: 10px;
      
      ${({theme}) => css`
        border: 1px solid ${theme.colors.lightSilver};
        
      `} 
  }
`;

const Title = styled.h1`
  padding: 30px 0;
  ${({theme}) => css`
        color: ${theme.colors.titleDark};
      `}
`;

const Info = styled.p`
   margin-bottom: 5px;  
`;

const Button = styled(Link)`
  text-decoration: none;
  min-width: 100px;
  max-width: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: white;
  
  ${({theme}) => css`
    background: ${theme.colors.greenHeader};
  `}
`;

class CheckIn extends Component{
    state = {
              email: '',
              password: '',
          };

    componentDidMount(){
        const db = firebase.database();
    }

   handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value
        })
    };
    createAccount = () => {
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error))
    };

    render() {

        return (
            <Banner>
                <Title>Регистрация</Title>
                <Info>
                    Логин
                </Info>
                <input
                    type="email"
                    id='email'
                    placeholder='Введите Email'
                    onChange={this.handleChange}
                />
                <Info>
                    Пароль
                </Info>
                <input
                    type='password'
                    id='password'
                    placeholder='Введите Пароль'
                    onChange={this.handleChange}
                />
                <Button
                    to='/category'
                    onClick={this.createAccount}
                >
                    Зарегистрироваться
                </Button>
            </Banner>
        )
    }
}

export default CheckIn

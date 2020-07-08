import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {singInUser} from "../../actions";
import {compose} from "../../Utils";
import {connect} from "react-redux";

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

const Title = styled.h1`
  padding: 30px 0;
  ${({theme}) => css`
        color: ${theme.colors.titleDark};
      `}
`;

class Entrance extends Component{
    state = {
        email: '',
        password: '',
        hasAccount: false,
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
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.props.singInUser(true)
                this.setState({
                    hasAccount: true,
                })
            })
            .catch(error => console.log(error))
    };

    render() {
        const {hasAccount} = this.state;

        return (
            <>
                {hasAccount ? <Redirect to='/category' /> : (
                    <Banner>
                        <Title>Вход</Title>
                        <Info>
                        Логин
                        </Info>
                        <input
                            type="text"
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
                            onClick={this.createAccount}
                            to='/main'
                        >
                            Войти
                        </Button>

                    </Banner>
                    )}
            </>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singInUser: singInUser
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))(Entrance);
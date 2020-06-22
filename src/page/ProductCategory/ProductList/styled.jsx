import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const Banner = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px 8px;
  margin: 10px;
  border-radius: 5px;
  transition: .3s ease-out;
  transition-delay: .1s;
  cursor: pointer;
  
  :hover{
    box-shadow: 0 0 10px rgb(173, 173, 173);
  }
  
  ${({theme}) => css`
    border: 1px solid ${theme.colors.lightSilver};
  `} 
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
 & img{
    background-position: center;
    background-size: cover;
    width: 250px;
    height: 150px;
 }  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.p`
  font-size: 18px;
  margin: 0;
  line-height: 150%;

  ${({theme, color, size}) => css`
    color: ${color || theme.colors.categoryLight};
    font-size: ${size};
  `}
`

const WrappTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
   margin: 0;
   line-height: 150%;
   
  ${({theme, size, color}) => css`
    color: ${color || theme.colors.titleDark};
    font-size: ${size};
  `}
`;

const Price = styled.h2`
  font-size: 24px;
  margin: 0;
  line-height: 150%;
  
  ${({theme}) => css`
    color: ${theme.colors.priceGreen} 
  `}
`;

export {
    Banner,
    Image,
    Wrapper,
    Category,
    WrappTitle,
    Title,
    Price
}
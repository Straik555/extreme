import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {array, func} from "prop-types";

import ProductList from "../ProductList";

const Banner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
  line-height: 100%;
  margin-bottom: 40px;
  ${({theme}) => css`
    color: ${theme.colors.greenHeader}
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: flex-start;
`;

const PaginatorList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  
`;

const List = styled.li`
  ${({theme}) => css`
         background: ${theme.colors.greenHeader};
    `};
  padding: 10px 15px;
  margin-right: 4px;
  border-radius: 4px;
  font-family: sans-serif;
  color: #fff;
  font-size: 1.1rem;
  min-width: 20px;
  text-align: center;
  list-style: none;
  cursor: pointer;
 &:last-child {
    margin-right: 0;
  }
  &:hover{
    background: #3E207C;
  }
  ${({child}) => css`
    &:nth-child(${child}){
    background: #D65DB1;
  }
`}`;

const Paginator = ({todos, productIdClick}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage, setTodosPerPage] = useState(25);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo) => {
        return (
            <ProductList
                key={todo.id}
                id={todo.id}
                title={todo.title}
                category={todo.category}
                price={todo.price}
                coverImage={todo.coverImage}
                productIdClick={productIdClick}
            />
        )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <List
                key={number}
                id={number}
                onClick={handleClick}
                to={number}
                child={currentPage}
            >
                {number}
            </List>
        );
    });

    return (
        <Banner>
            <Title>Наша продукция</Title>
            <Wrapper>
                {renderTodos}
            </Wrapper>
            <PaginatorList>
                {renderPageNumbers}
            </PaginatorList>
        </Banner>
    );
}

export default Paginator;

Paginator.propTypes = {
    todos: array,
    productIdClick: func,
}

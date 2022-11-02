import styled from 'styled-components'

export const Container =  styled.button`

    @media(min-width: 80em){
          width: 100%;
          margin: 1.6rem auto;
    } 
         
    width: 80%;
    background-color: ${({theme }) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.WHITE};

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    margin-left: 3.8rem;
    border-radius: 1.0rem;
    font-weight: 500;  
    cursor: pointer;
    &:disabled{
        opacity: 0.5;
    }
`  
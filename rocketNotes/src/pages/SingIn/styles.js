import styled from 'styled-components'


export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;


    `

export const Form = styled.form`

    margin: 0 auto ;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
   >h1{
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-weight: 700;
        
    }
    p{
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }


    h2{
        margin: 4.8rem 0  ;
        font-size: 2.4rem;
    }
    
    a{
        color: ${({theme}) => theme.COLORS.WHITE};
        text-decoration: none;
        font-size: 1.6rem;
        margin-top: 12rem;
        cursor: pointer;
    }

`




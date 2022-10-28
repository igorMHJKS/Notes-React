import styled from 'styled-components'
import Backgroundimg from '../../assets/re2.png'

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


 
     @media(min-width: 40rem){
        
        p{
            font-size:1.4rem;
        }
     }
      @media (min-width: 60em){
        p{
            font-size:1.4rem;
        }
    }
      @media (min-width: 65em){
        p{
            font-size:1.4rem;
        }
    }
  
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
        margin-top: 5rem;
        cursor: pointer;
    }


`



export const Background = styled.div`
    @media (min-width: 40em){

        background-image: url(${ Backgroundimg}) ;
        width: 40rem;
        height: 120rem;
        opacity: 0.5;


    }


     @media (min-width: 60em){

      background-image: url(${ Backgroundimg}) ;
      width: 60rem;
      height: 60rem;
      opacity: 0.5;
    }

      @media (min-width: 65em){

     background-image: url(${ Backgroundimg}) ;
     width:75rem;
     height: 80rem;
     opacity: 0.5;
    }
`


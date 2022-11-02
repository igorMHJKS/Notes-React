import styled from 'styled-components'

export const Container = styled.textarea`

         @media(min-width: 80em){
          width: 100%;
          margin: 0 auto;
         } 
width: 80%;
margin-left: 3.8rem;
height: 15.0rem;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
color: ${({theme}) => theme.COLORS.WHITE};

border: none;
resize: none;

margin-bottom: 0.8rem;
border-radius: 1.0rem;
padding: 1.6rem;

&::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_100};
}
`
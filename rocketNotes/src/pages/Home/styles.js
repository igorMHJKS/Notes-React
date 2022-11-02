import styled from 'styled-components'
import {Link } from 'react-router-dom'

// CSS PARA A PÁGINA TODA
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns:10rem auto;
  grid-template-rows:10.5rem 12.8rem auto 6.4rem ;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content"
  ;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  >header{
     padding: 1rem;

    span{
      font-size: 1rem;
    }
    
    strong{
      font-size:1.3rem ;
    }
    svg{
      width: 2rem;
    }
  }
`;
//
export const Brand = styled.div`
   grid-area: brand;

   display: flex;
   justify-content: center;
   align-items: center;

   border-bottom-width: 0.1rem;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

   background-color: ${({theme}) => theme.COLORS.BACKGROUND_900} ;

   >h1{
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-size: 1.4rem;
   }

   
`;
//

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({theme}) => theme.COLORS.ORANGE};

  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   svg{
    margin-right:0.8rem ;
   }
`;
//
export const Search = styled.div`
    grid-area: search;
    border: 0;
 ;`
//
export const Content = styled.div`
   grid-area: content;
   width: 100%;
   overflow-y: auto;
   padding: 6.4rem 5rem;
`;
//
export const Menu = styled.ul`
   grid-area: menu;

   padding-top: 6.4rem;
   text-align: center;
  
   color: ${({theme}) => theme.COLORS.ORANGE};
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_900} ;
   font-size: 1.2rem;

   cursor: pointer;
   >li{
    margin-bottom: 2.4rem;
    font-size: 1.2rem;
   }
`

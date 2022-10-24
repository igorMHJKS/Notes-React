import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.5rem auto; 
  grid-template-areas: 
  "header"
  "content";
  
  width: 100%;
  height: 100vh;

  

  >main{
    grid-area: content;
    overflow: scroll;
    padding: 3rem ;
  }
  `

  export const Links = styled.ul`
  list-style: none;
  >li{
    margin-top: 1.2rem;

    a{
      color: ${({theme}) => theme.COLORS.WHITE};
      text-decoration: none;
    }
  }
  `
  export const Content = styled.div`
    max-width: 55.0rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    >button:first-child{
      align-self: end;
      padding-right: 2rem;
    }

    >h1{
      padding: 2rem;
      font-size:3.6rem;
      font-weight: 500;
      margin-top:6.4rem ;
    }

    >p{
      padding: 2rem;
      font-size: 1.6rem;
      margin-top: 1.6rem;
      text-align: justify;
    }
  `

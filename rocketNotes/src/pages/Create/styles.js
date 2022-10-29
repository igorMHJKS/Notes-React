import styled from 'styled-components'

export const Container = styled.div`
   
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 10.5rem auto;
   grid-template-areas: 
   "header"
   "content";
   ;
   margin: 0 auto;
    


`


export const Form = styled.form`

  width: 85%;
  max-width: 55.0rem;
  margin: 3.8rem auto;

 >button{
  width: 95%;
  margin-left: 0.9rem;
 
 }
  
  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    h1{
        margin-left: 2rem;
    }
    >a{
        font-size: 1.5rem;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        
        margin: auto 1.9rem ;
    }

  }

    
`
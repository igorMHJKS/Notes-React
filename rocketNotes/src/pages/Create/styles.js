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
    

>main{
  grid-area: content;
  overflow-y: auto;
}

h2{
  margin-left: 4rem;
}


`


export const Form = styled.form`


  @media(min-width: 80em){
    >button{
      width: 100%;
    }
  }

  width: 80%;
  max-width: 55.0rem;
  margin: 3.8rem auto;
  


  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    h1{
        margin-left: 4rem;

    }
    >a{
        font-size: 1.5rem;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        
        margin: auto 4.5rem ;
    }

  }

    
`
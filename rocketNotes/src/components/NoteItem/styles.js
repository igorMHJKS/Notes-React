import styled from 'styled-components'

export const Container = styled.div`
 
 @media(min-width: 80em){
 width: 100%;
 margin: 1.6rem auto;

} 
 display: flex;
 align-items: center;

 background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

 color: ${({theme}) => theme.COLORS.GRAY_300};
 border: ${({theme, isNew}) => isNew ? ` ${theme.COLORS.GRAY_300}` : "none"};

  width:80%;
  margin-left:3.8rem;
 margin-bottom: 0.8rem;
 border-radius: 1.0rem;
 padding-right: 1.6rem;

>button {
 border: none;
 background: none;
}

>input{
    width: 100%;
    height: 5.6rem;
    

    padding: 1.2rem;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;


    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

}

.button-delete{
    color: ${({theme}) => theme.COLORS.RED};
}

.button-add{
    color: ${({theme}) => theme.COLORS.ORANGE};
}
`


  
import styled from 'styled-components'
import {Link } from 'react-router-dom'
//
export const Container = styled.header`
grid-area: header;

height: 10.5rem;
width: 100%;

border: solid 1px ${({theme}) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;

padding: 0 3.0rem;

`
//Nome e foto
export const Profile = styled(Link)`
    display: flex;  
    align-items: center;

>img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
}

>div{
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem ;
    line-height: 2.4rem;

span{
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
}

strong{
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};
}
}
`   

export const Logout = styled.button`
border: none;
background: none;

>svg{
    color:${({theme}) => theme.COLORS.GRAY_100};
    font-size: 2.5rem;
}
`
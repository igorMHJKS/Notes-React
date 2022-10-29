import styled from 'styled-components'

export const Container = styled.textarea`

width: 95%;
height: 15.0rem;
margin-left: 0.9rem;
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
import styled from 'styled-components'


export const Container = styled.div`
      
     
      >header {
        width: 100%;
        height: 14.4rem;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 5rem;
        cursor: pointer;
        margin-bottom:15.4rem ;

        svg{
            font-size: 2.4rem;
           color: ${({theme}) => theme.COLORS.GRAY_100}
        }

      }
      
    `
   export const Form = styled.form `
        width: 75%;
        margin: 0 auto;

        >div:nth-child(4){
            margin-top: 2.4rem;
        }


   `

   export const Avatar = styled.div`

          position: relative;
          margin: -25rem auto 3.2rem;
          width: 10.6rem;
          height: 10.6rem;
        

        >img{
          width: 10.6rem;
          height: 10.6rem;
          border-radius: 9.3rem;
        }


        label{
            width: 3.5rem;
            height: 3.5rem;

            background-color: ${({theme}) => theme.COLORS.ORANGE};
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
            

            position: absolute;
            top: 7.5rem;
            right: 0.10rem;

            cursor: pointer;

            input{
                display: none;
            }


            svg{
                width: 1.5rem;
                height: 1.5rem;
                color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            }
        }
        
    
   
   `

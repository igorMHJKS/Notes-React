import { Container } from './styles';

/*Em cada butão ele coloca um nome pra cada e 
crianção do loanding para butão de carregamento
*/

export function Button({title, loading: loading= false, ...rest}){
    return(
     <Container 
     type="button"
     disabled={loading}
     >
       {loading ? 'carregando... ': title}
       </Container> 
    )
}
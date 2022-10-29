import { Container, Form} from './styles'
import { Header} from '../../components/Header'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'

import { Input } from '../../components/Input'

export function Create (){
    return(

        <Container>
           <Header/>
           <main>
             <Form>
              <header>
                <h1>Criar nota</h1>
                <a href="/"> Voltar</a>
              </header>

              <Input placeholder="Titulo"/>
              <Textarea placeholder="Observações"/>
              <Button title="Salvar" />
             </Form>
           </main>
        </Container>
    )
}
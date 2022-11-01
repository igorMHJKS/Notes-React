import { Container, Form} from './styles'
import { Header} from '../../components/Header'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section  } from '../../components/Section'
import {Link } from 'react-router-dom'



import { Input } from '../../components/Input'

export function Create (){
    return(

        <Container>
           <Header/>
           <main>
             <Form>
              <header>
                <h1>Criar nota</h1>
                <Link to="/">
                voltar
                </Link>
              </header>

              <Input placeholder="Titulo"/>
              <Textarea placeholder="Observações"/>
              <Button title="Salvar" />

              <Section title="Links uteis">
                <NoteItem value="https://rocketseat.com.br"/>
                <NoteItem  IsNew placeholder="Novo link"/>
              </Section>

                <Section title="Marcadores">
                  <NoteItem value="react"/>
                  <NoteItem  IsNew placeholder="Nova tag"/>
                </Section>
                <Button title="Salvar" />
             </Form>
           </main>
        </Container>
    )
}
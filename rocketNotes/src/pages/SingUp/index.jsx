import {Container, Form, Background }from './styles'
import {Input }from '../../components/Input'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Button } from '../../components/Button'






export function SingUp (){
    return(

        <Container>
            <Background/>

            <Form action="">
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>

                 <Input type="name" placeholder="Nome" icon={FiUser}/>
                 <Input type="email" placeholder="E-mail" icon={FiMail}/>
                 <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Cadastrar"/>

                <a href="#"> Voltar para login</a>
                
                
            </Form>
        </Container>
    )
}
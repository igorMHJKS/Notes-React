import {Container, Form, Background }from './styles'
import {Input }from '../../components/Input'
import { FiMail, FiLock} from 'react-icons/fi'
import { Button } from '../../components/Button'
import {Link } from 'react-router-dom'







export function SingIn (){
    return(
        <Container>
            <Form action="">
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça login</h2>

                 <Input type="email" placeholder="E-mail" icon={FiMail}/>
                 <Input type="password" placeholder="Senha" icon={FiLock}/>
                   

                <Button title="Entrar"/>

                <Link to="/register">
                Criar nota
                </Link>                
                
            </Form>
            <Background/>
        </Container>
    )
}
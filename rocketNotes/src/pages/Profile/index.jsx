import {Container,Form, Avatar}from './styles'
import {Input }from '../../components/Input'
import { FiMail, FiLock, FiUser,FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function Profile (){
    return(
        <Container>

            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>

            
            </header>
 

            <Form action="">

            <Avatar>
               <img src="https://avatars.githubusercontent.com/u/103233352?v=4" alt="Imagem de usúario" />

               <label htmlFor="avatar">
                 <FiCamera/>

                 <input type="file" id='avatar'/>
               </label>
            </Avatar>

            <Input type="name" placeholder='Nome' icon={FiUser}/>
            <Input type="password"  placeholder='E-mail' icon={FiMail}/>        
            <Input type="password" placeholder="Senha atual" icon={FiLock}/>
            <Input type="password" placeholder="Nova senha" icon={FiLock}/>
                   
            <Button title="Salvar"/>
            </Form>
        </Container>
    )
}